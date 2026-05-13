import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { LoanCard } from "@/components/loan-card";
import { Section } from "@/components/section";
import { loanProducts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Loan Products | Salary, SME, Logbook and Business Loans | Runda Finance",
  description:
    "Explore Runda Finance loan products including salary loans, SME loans, business loans, logbook financing, LPO financing, and short-term credit options.",
  alternates: { canonical: "/loans" },
};

export default function LoansPage() {
  return (
    <>
      <Hero
        title="Loan options for different financial needs"
        body="Whether you are employed, running a business, supplying an organization, or using your vehicle as security, Runda Finance offers structured loan products for qualified borrowers."
        primary={{ href: "/start-application", label: "Start Application" }}
        secondary={{ href: "/contact", label: "Talk to a Loan Officer" }}
      />
      <Section eyebrow="Compare loans" title="Find the product that matches your need">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {loanProducts.map((loan) => (
            <LoanCard key={loan.slug} loan={loan} />
          ))}
        </div>
      </Section>
      <Section className="bg-[#f7f8fa]" eyebrow="Before you apply" title="Prepare the basics early">
        <div className="grid gap-4 md:grid-cols-2">
          {["Confirm the right loan product.", "Review the required documents.", "Check whether repayment fits your income or business cash flow.", "Speak to a loan officer if any requirement is unclear."].map((item) => (
            <div key={item} className="rounded-xl bg-white p-5 text-sm leading-6 text-[#475467]">
              {item}
            </div>
          ))}
        </div>
      </Section>
      <CTASection title="Not sure which loan fits?" body="Request a callback and a Runda Finance team member can guide you through the options." primaryLabel="Request Callback" primaryHref="/contact" />
    </>
  );
}
