import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Loan Questions and Answers | Runda Finance FAQs",
  description: "Find answers to common questions about Runda Finance loan applications, requirements, approval, repayment, and customer support.",
  alternates: { canonical: "/faqs" },
};

export default function FAQsPage() {
  return (
    <>
      <Hero title="Loan questions and answers" body="Understand requirements, assessment, repayment, support, and complaints before you submit your application." primary={{ href: "/loans", label: "View Loan Products" }} secondary={{ href: "/contact", label: "Talk to a Loan Officer" }} />
      <Section eyebrow="FAQs" title="Common borrower questions">
        <FAQAccordion items={faqs} />
      </Section>
      <CTASection title="Still have a question?" body="Request a callback and speak with a Runda Finance team member." primaryLabel="Request Callback" primaryHref="/contact" />
    </>
  );
}
