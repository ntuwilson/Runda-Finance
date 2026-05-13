import { NextRequest, NextResponse } from "next/server";
import { getPrisma } from "@/lib/db";
import { sendLeadEmail } from "@/lib/mail";
import { rateLimit } from "@/lib/rate-limit";
import { complaintSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  if (!rateLimit(`complaint:${ip}`, 10)) return NextResponse.json({ error: "Too many requests." }, { status: 429 });

  const parsed = complaintSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ errors: parsed.error.flatten() }, { status: 400 });

  const data = parsed.data;
  let id = "email-only";
  if (process.env.DATABASE_URL) {
    const prisma = getPrisma();
    const lead = await prisma.lead.create({
      data: {
        type: "Complaint",
        fullName: data.fullName,
        phone: data.phone,
        email: data.email || null,
        sourcePage: "complaints",
        complaint: {
          create: {
            loanReference: data.loanReference || null,
            category: data.category,
            message: data.message,
            preferredContactMethod: data.preferredContactMethod,
          },
        },
      },
    });
    id = lead.id;
  }

  await sendLeadEmail("New Runda Finance complaint", [
    `Complaint: ${id}`,
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    `Category: ${data.category}`,
    `Reference: ${data.loanReference ?? ""}`,
    `Message: ${data.message}`,
  ]);

  return NextResponse.json({ ok: true, id });
}
