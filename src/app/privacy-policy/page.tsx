import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { siteDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Runda Finance",
  description: "Read how Runda Finance collects, uses, stores, and protects customer information submitted through the website and loan application process.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero title="Privacy Policy" body="This draft explains how Runda Finance handles information submitted through the website and loan application process. It must be reviewed by legal or compliance before launch." placeholder="[Compliance Review Required]" />
      <Section eyebrow="Policy draft" title="How customer information is handled">
        <div className="prose prose-slate max-w-none rounded-md border border-[#e4e8f4] bg-white p-6 text-sm leading-7 text-[#3f4656]">
          <h2 className="text-2xl font-medium text-[#050505]">Information collected</h2>
          <p>Runda Finance may collect names, phone numbers, email addresses, loan type, requested amount, employment or business status, loan purpose, uploaded documents, consent status, source page, and communication preferences.</p>
          <h2 className="mt-8 text-2xl font-medium text-[#050505]">Why information is collected</h2>
          <p>Information is collected to respond to inquiries, assess loan applications, verify documents, support customer communication, manage complaints, and improve service quality.</p>
          <h2 className="mt-8 text-2xl font-medium text-[#050505]">Who may access it</h2>
          <p>Authorized Runda Finance staff, assigned loan officers, service providers supporting the application workflow, and parties required by law or regulation may access relevant information.</p>
          <h2 className="mt-8 text-2xl font-medium text-[#050505]">Security and retention</h2>
          <p>Runda Finance should use secure storage, access controls, HTTPS, private document storage, and retention rules approved by management and compliance.</p>
          <h2 className="mt-8 text-2xl font-medium text-[#050505]">Privacy contact</h2>
          <p>Contact {siteDetails.email} or {siteDetails.phones[0]} about privacy questions. Replace placeholders with verified official contacts before launch.</p>
        </div>
      </Section>
    </>
  );
}
