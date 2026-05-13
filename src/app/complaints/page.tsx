import type { Metadata } from "next";
import { ComplaintForm } from "@/components/complaint-form";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Complaints and Customer Support | Runda Finance",
  description: "Raise a complaint or request customer support from Runda Finance regarding loan applications, service issues, repayment questions, or customer care.",
  alternates: { canonical: "/complaints" },
};

export default function ComplaintsPage() {
  return (
    <>
      <Hero title="Customer support and complaints" body="If you have a concern about our service, loan process, communication, or repayment support, contact us through the official channels below." primary={{ href: "#complaint-form", label: "Raise a Complaint" }} secondary={{ href: "/contact", label: "Contact Runda Finance" }} />
      <Section id="complaint-form" eyebrow="Complaint form" title="Submit your concern">
        <ComplaintForm />
      </Section>
    </>
  );
}
