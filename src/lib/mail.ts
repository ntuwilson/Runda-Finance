import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendLeadEmail(subject: string, lines: string[]) {
  if (!resend || !process.env.LEADS_TO_EMAIL || !process.env.LEADS_FROM_EMAIL) {
    console.info(`[email skipped] ${subject}`, lines);
    return;
  }

  await resend.emails.send({
    from: process.env.LEADS_FROM_EMAIL,
    to: process.env.LEADS_TO_EMAIL,
    subject,
    text: lines.join("\n"),
  });
}
