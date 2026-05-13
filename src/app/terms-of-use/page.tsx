import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Terms of Use | Runda Finance",
  description: "Read the terms governing use of the Runda Finance website, loan inquiry forms, application tools, and customer communication channels.",
  alternates: { canonical: "/terms-of-use" },
};

export default function TermsOfUsePage() {
  return (
    <>
      <Hero title="Terms of Use" body="These terms govern use of the Runda Finance website, inquiry forms, application tools, and communication channels. This draft must be reviewed by legal or compliance before launch." placeholder="[Compliance Review Required]" />
      <Section eyebrow="Terms draft" title="Website usage terms">
        <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 text-sm leading-7 text-[#475467]">
          <h2 className="text-2xl font-medium text-[#111827]">General information</h2>
          <p className="mt-3">Website content is provided for general guidance and may be updated. It is not a guarantee of loan approval, loan amount, repayment period, or final terms.</p>
          <h2 className="mt-8 text-2xl font-medium text-[#111827]">Applications</h2>
          <p className="mt-3">Applicants must provide accurate information. Inaccurate, incomplete, or unverifiable information may delay or affect assessment.</p>
          <h2 className="mt-8 text-2xl font-medium text-[#111827]">Approval</h2>
          <p className="mt-3">Submitting an application does not guarantee approval. Loan approval, amount, repayment period, and terms are subject to assessment, verification, and product requirements.</p>
          <h2 className="mt-8 text-2xl font-medium text-[#111827]">Website misuse</h2>
          <p className="mt-3">Users must not misuse the website, submit false information, attempt unauthorized access, or interfere with website security.</p>
        </div>
      </Section>
    </>
  );
}
