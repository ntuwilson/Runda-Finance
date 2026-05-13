import { NextRequest, NextResponse } from "next/server";
import { getPrisma } from "@/lib/db";
import { sendLeadEmail } from "@/lib/mail";
import { rateLimit } from "@/lib/rate-limit";
import { callbackSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  if (!rateLimit(`callback:${ip}`)) return NextResponse.json({ error: "Too many requests." }, { status: 429 });

  const parsed = callbackSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ errors: parsed.error.flatten() }, { status: 400 });

  const data = parsed.data;
  let id = "email-only";
  if (process.env.DATABASE_URL) {
    const prisma = getPrisma();
    const lead = await prisma.lead.create({
      data: {
        type: "Callback",
        fullName: data.fullName,
        phone: data.phone,
        email: data.email || null,
        loanType: data.loanType,
        requestedAmount: data.amountNeeded,
        sourcePage: data.sourcePage,
      },
    });
    id = lead.id;
  }

  await sendLeadEmail("New Runda Finance callback request", [
    `Lead: ${id}`,
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    `Loan type: ${data.loanType}`,
    `Amount: ${data.amountNeeded}`,
    `Preferred time: ${data.preferredContactTime}`,
    `Message: ${data.message ?? ""}`,
  ]);

  return NextResponse.json({ ok: true, id });
}
