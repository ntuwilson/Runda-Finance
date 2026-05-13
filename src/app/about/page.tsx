import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { siteDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Runda Finance | Regulated Credit Solutions in Uganda",
  description: "Runda Finance provides regulated credit solutions for salaried workers, SMEs, contractors, and vehicle owners in Uganda.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Hero title="Credit solutions built around clarity and responsible access" body="Runda Finance provides practical loan products for individuals and businesses that need structured financial support." primary={{ href: "/loans", label: "View Loan Products" }} secondary={{ href: "/about/team", label: "Meet the Team" }} />
      <Section eyebrow="Who we are" title="A finance partner for workers and businesses">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 text-sm leading-6 text-[#475467]">
            Runda Finance provides salary loans, SME loans, business loans, logbook financing, LPO financing, and short-term credit support for qualified borrowers in Uganda.
          </div>
          <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 text-sm leading-6 text-[#475467]">
            Regulation and trust proof must be verified before launch. License: {siteDetails.license}. Office: {siteDetails.address}.
          </div>
        </div>
      </Section>
      <Section className="bg-[#f4f6f8]" eyebrow="Purpose" title="Mission, vision, and values">
        <div className="grid gap-5 md:grid-cols-3">
          {["Mission: [Verified mission statement]", "Vision: [Verified vision statement]", "Values: Clarity, responsibility, respect, trust, and practical support."].map((item) => (
            <div key={item} className="rounded-xl bg-white p-6 text-sm leading-6 text-[#475467]">
              {item}
            </div>
          ))}
        </div>
      </Section>
      <CTASection title="Speak with Runda Finance" body="Contact the team for product guidance, requirements, and application next steps." primaryLabel="Talk to a Loan Officer" primaryHref="/contact" />
    </>
  );
}
