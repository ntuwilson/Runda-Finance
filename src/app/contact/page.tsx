import type { Metadata } from "next";
import { CallbackForm } from "@/components/callback-form";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { siteDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Runda Finance | Speak to a Loan Officer",
  description: "Contact Runda Finance to ask about salary loans, SME loans, business loans, logbook financing, LPO financing, or short-term loan support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Hero title="Talk to Runda Finance" body="Have a question before applying? Contact our team for guidance on loan options, requirements, and the application process." primary={{ href: "#callback", label: "Request Callback" }} secondary={{ href: "/start-application", label: "Start Application" }} placeholder="[Office Location Photo]" />
      <Section eyebrow="Contact details" title="Official contact channels">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-md border border-[#e4e8f4] bg-white p-6 text-sm leading-7 text-[#3f4656]">
            <p><strong className="font-medium text-[#050505]">Office:</strong> {siteDetails.address}</p>
            <p><strong className="font-medium text-[#050505]">Phone:</strong> {siteDetails.phones.join(", ")}</p>
            <p><strong className="font-medium text-[#050505]">Email:</strong> {siteDetails.email}</p>
            <p><strong className="font-medium text-[#050505]">Working hours:</strong> {siteDetails.hours}</p>
            <p><strong className="font-medium text-[#050505]">Social links:</strong> Active verified links only.</p>
          </div>
          <div className="flex min-h-72 items-center justify-center rounded-md border border-dashed border-[#c8cdd5] bg-[#eef1ff] text-sm font-medium text-[#263479]">
            [Map Embed]
          </div>
        </div>
      </Section>
      <Section id="callback" className="bg-[#f4f6f8]" eyebrow="Callback" title="Request a callback">
        <CallbackForm sourcePage="contact" />
      </Section>
    </>
  );
}
