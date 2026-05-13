import type { Metadata } from "next";
import { ApplicationForm } from "@/components/application-form";
import { ComplianceDisclaimer } from "@/components/compliance-disclaimer";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { loanProducts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Start Loan Application | Runda Finance",
  description: "Start your Runda Finance loan application by choosing your loan type and submitting the required information for assessment.",
  alternates: { canonical: "/start-application" },
};

export default async function StartApplicationPage({
  searchParams,
}: {
  searchParams: Promise<{ loan?: string }>;
}) {
  const { loan } = await searchParams;
  const initialLoan = loanProducts.some((item) => item.slug === loan) ? loan : "";
  return (
    <>
      <Hero title="Start your loan application" body="Choose the loan product, provide your details, and prepare the required documents. Submission does not guarantee approval. Every application is assessed." primary={{ href: "#application", label: "Start Application" }} secondary={{ href: "/faqs", label: "Read FAQs" }} />
      <Section id="application" eyebrow="Application form" title="Submit your details for assessment">
        <div className="mb-6">
          <ComplianceDisclaimer />
        </div>
        <ApplicationForm initialLoan={initialLoan} />
      </Section>
    </>
  );
}
