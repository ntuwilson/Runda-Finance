import type { Metadata } from "next";
import { ComplianceDisclaimer } from "@/components/compliance-disclaimer";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { ProcessSteps } from "@/components/process-steps";
import { Section } from "@/components/section";
import { processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "How Loan Applications Work | Runda Finance",
  description:
    "Understand how to apply for a loan with Runda Finance, from choosing a product to document submission, assessment, approval, and disbursement.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <Hero title="Understand the process before you apply" body="A good loan process should be clear from the beginning. Here is how Runda Finance handles loan applications." primary={{ href: "/loans", label: "Check Loan Requirements" }} secondary={{ href: "/contact", label: "Talk to a Loan Officer" }} />
      <Section eyebrow="Process" title="From product choice to repayment">
        <ProcessSteps steps={processSteps} />
        <div className="mt-8">
          <ComplianceDisclaimer />
        </div>
      </Section>
      <CTASection title="Start with the right product" body="Choose the loan page that matches your situation, then submit your details when you are ready." primaryLabel="View Loan Products" primaryHref="/loans" />
    </>
  );
}
