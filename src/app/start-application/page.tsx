import type { Metadata } from "next";
import { ApplicationForm } from "@/components/application-form";
import { ComplianceDisclaimer } from "@/components/compliance-disclaimer";
import { Hero } from "@/components/hero";
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
      <section id="application" className="bg-[#fafbff] py-12 text-[#050505] sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-4xl">
            <p className="mb-3 text-sm font-medium text-[#263479]">Application form</p>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.03em] text-[#050505] sm:text-4xl">
              Submit details for assessment
            </h2>
          </div>
          <div className="mx-auto mb-6 max-w-4xl">
            <ComplianceDisclaimer />
          </div>
          <ApplicationForm initialLoan={initialLoan} />
        </div>
      </section>
    </>
  );
}
