import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComplianceDisclaimer } from "@/components/compliance-disclaimer";
import { CTASection } from "@/components/cta-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { Hero } from "@/components/hero";
import { ProcessSteps } from "@/components/process-steps";
import { RequirementChecklist } from "@/components/requirement-checklist";
import { Section } from "@/components/section";
import { faqs, loanProducts } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return loanProducts.map((loan) => ({ slug: loan.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loan = loanProducts.find((item) => item.slug === slug);
  if (!loan) return {};
  return {
    title: loan.seoTitle,
    description: loan.metaDescription,
    alternates: { canonical: `/loans/${loan.slug}` },
    openGraph: { title: loan.seoTitle, description: loan.metaDescription },
  };
}

export default async function LoanProductPage({ params }: Props) {
  const { slug } = await params;
  const loan = loanProducts.find((item) => item.slug === slug);
  if (!loan) notFound();

  return (
    <>
      <Hero
        title={loan.headline}
        body={loan.subheadline}
        primary={{ href: `/start-application?loan=${loan.slug}`, label: loan.primaryCta }}
        secondary={{ href: "/contact", label: loan.secondaryCta }}
        placeholder="[Product or customer service photo]"
      />
      <Section eyebrow="Who this loan is for" title={loan.bestFor}>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-md border border-[#e4e8f4] bg-white p-6">
            <h2 className="text-2xl font-medium text-[#050505]">Common uses</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#3f4656]">
              {loan.uses.map((use) => (
                <li key={use}>{use}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-[#e4e8f4] bg-white p-6">
            <h2 className="text-2xl font-medium text-[#050505]">Verified product terms</h2>
            <p className="mt-4 text-sm leading-6 text-[#3f4656]">{loan.range}</p>
          </div>
        </div>
      </Section>
      <Section className="bg-[#f7f8fa]" eyebrow="Requirements" title="Basic documents to prepare">
        <RequirementChecklist items={loan.requirements} />
      </Section>
      <Section eyebrow="Assessment" title="How Runda Finance reviews this request">
        <ProcessSteps steps={loan.assessment} />
        <div className="mt-8">
          <ComplianceDisclaimer />
        </div>
      </Section>
      <Section className="bg-[#f7f8fa]" eyebrow="FAQs" title={`${loan.name} questions`}>
        <FAQAccordion
          items={[
            { question: `Who can apply for a ${loan.name}?`, answer: loan.bestFor },
            { question: "What documents should I prepare?", answer: loan.requirementSummary },
            { question: "Does submitting this application guarantee approval?", answer: "No. Approval, amount, repayment period, and terms are subject to assessment and verification." },
            ...faqs.slice(1, 3),
          ]}
        />
      </Section>
      <CTASection title={`Start your ${loan.name.toLowerCase()} request`} body="Review the requirements, prepare your documents, and submit your details for assessment." primaryLabel={loan.primaryCta} primaryHref={`/start-application?loan=${loan.slug}`} />
    </>
  );
}
