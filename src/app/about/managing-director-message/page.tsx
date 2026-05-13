import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Message from the Managing Director | Runda Finance",
  description: "A message from Runda Finance leadership on responsible lending, customer service, and clear access to credit in Uganda.",
  alternates: { canonical: "/about/managing-director-message" },
};

export default function ManagingDirectorMessagePage() {
  return (
    <>
      <Hero title="A message from our Managing Director" body="Responsible credit begins with trust, clarity, and service." primary={{ href: "/about", label: "About Runda" }} placeholder="[Managing Director Photo]" />
      <Section eyebrow="Leadership message" title="Responsible lending with clarity">
        <div className="max-w-3xl rounded-md border border-[#e4e8f4] bg-white p-6 text-sm leading-7 text-[#3f4656]">
          <p>
            Customers borrow because of real needs. Runda Finance is committed to supporting workers and businesses with professional service, clear information, and responsible assessment.
          </p>
          <p className="mt-4">
            Borrowers deserve to understand requirements, repayment expectations, and the fact that every application is subject to verification. [Managing Director Name] and the Runda Finance team should review and approve this message before launch.
          </p>
        </div>
      </Section>
      <CTASection title="Need guidance before applying?" body="Speak with a loan officer and understand the requirements first." primaryLabel="Talk to a Loan Officer" primaryHref="/contact" />
    </>
  );
}
