import type { Metadata } from "next";
import { ComplianceDisclaimer } from "@/components/compliance-disclaimer";
import { CTASection } from "@/components/cta-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { HomeHero } from "@/components/home-hero";
import { ProcessSteps } from "@/components/process-steps";
import { SchemaScript } from "@/components/schema-script";
import { Section } from "@/components/section";
import { TrustStrip } from "@/components/trust-strip";
import { faqs, processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Runda Finance | Regulated Loans for Workers and SMEs in Uganda",
  description:
    "Runda Finance provides salary loans, SME loans, business loans, logbook financing, LPO financing, and short-term credit solutions for qualified borrowers in Uganda.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Runda Finance | Regulated Loans for Workers and SMEs in Uganda",
    description:
      "Clear credit solutions for salary needs, business growth, LPO financing, logbook financing, SME support, and short-term emergencies.",
  },
};

export default function Home() {
  return (
    <>
      <SchemaScript type="FinancialService" />
      <HomeHero />
      <TrustStrip />
      <Section className="bg-[#eef1ff]" eyebrow="How it works" title="Understand the process before you apply">
        <ProcessSteps steps={processSteps.slice(0, 6)} />
      </Section>
      <Section eyebrow="Why borrowers choose Runda" title="Built for clarity, not confusion">
        <div className="grid gap-4 md:grid-cols-3">
          {["Requirements are shown before applying.", "A loan officer can guide you through the product.", "Every approval is subject to verification and assessment."].map((item) => (
            <div key={item} className="rounded-md border border-[#e4e8f4] bg-white p-6 text-xl font-medium leading-snug tracking-[-0.02em] text-[#050505]">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <ComplianceDisclaimer />
        </div>
      </Section>
      <Section className="bg-[#eef1ff]" eyebrow="Who we serve" title="Practical credit for real borrower needs">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Salaried workers", "Small business owners", "Established businesses", "Suppliers and contractors", "Vehicle owners", "Customers with urgent short-term needs"].map((item) => (
            <div key={item} className="rounded-md bg-white px-5 py-4 font-medium text-[#050505]">
              {item}
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Questions" title="Common questions before applying">
        <FAQAccordion items={faqs.slice(0, 4)} />
      </Section>
      <CTASection title="Ready to understand your options?" body="Start with the requirements, then apply or request a callback from a loan officer." primaryLabel="Start Application" />
    </>
  );
}
