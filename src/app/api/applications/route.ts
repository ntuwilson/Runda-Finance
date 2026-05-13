import { NextRequest, NextResponse } from "next/server";
import { getPrisma } from "@/lib/db";
import { sendLeadEmail } from "@/lib/mail";
import { rateLimit } from "@/lib/rate-limit";
import { applicationSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  if (!rateLimit(`application:${ip}`, 10)) return NextResponse.json({ error: "Too many requests." }, { status: 429 });

  const parsed = applicationSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ errors: parsed.error.flatten() }, { status: 400 });

  const data = parsed.data;
  let id = "email-only";
  if (process.env.DATABASE_URL) {
    const prisma = getPrisma();
    const lead = await prisma.lead.create({
      data: {
        type: "Application",
        fullName: data.fullName,
        phone: data.phone,
        email: data.email || null,
        loanType: data.loanType,
        requestedAmount: data.requestedAmount,
        sourcePage: data.sourcePage,
        application: {
          create: {
            employmentOrBusinessStatus: data.employmentOrBusinessStatus,
            loanPurpose: data.loanPurpose,
            preferredContactTime: data.preferredContactTime,
            assetOrBusinessDetails: data.assetOrBusinessDetails || null,
            consent: data.consent,
          },
        },
      },
    });
    id = lead.id;
  }

  await sendLeadEmail("New Runda Finance loan application", [
    `Application: ${id}`,
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    `Loan type: ${data.loanType}`,
    `Amount: ${data.requestedAmount}`,
    `Status: ${data.employmentOrBusinessStatus}`,
    `Purpose: ${data.loanPurpose}`,
    `Documents: ${data.documentNames.join(", ") || "None listed"}`,
  ]);

  return NextResponse.json({ ok: true, id });
}
