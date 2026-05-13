import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { InsightCard } from "@/components/insight-card";
import { Section } from "@/components/section";
import { insights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Financial Insights for Borrowers and SMEs | Runda Finance",
  description: "Read practical guides from Runda Finance on salary loans, SME financing, logbook financing, LPO financing, and responsible borrowing.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <Hero title="Financial insights for borrowers and SMEs" body="Practical borrower education should replace stale news, dummy posts, and generic filler articles." primary={{ href: "/loans", label: "View Loan Products" }} placeholder="[Borrower Education Image]" />
      <Section eyebrow="Starter articles" title="Useful guides to publish">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </Section>
      <CTASection title="Prepare before you apply" body="Read the requirements for your loan product and ask questions before submitting." primaryLabel="Check Loan Requirements" primaryHref="/loans" />
    </>
  );
}
