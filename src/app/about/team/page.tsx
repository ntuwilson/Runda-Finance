import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { TeamCard } from "@/components/team-card";
import { teamMembers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team | Runda Finance",
  description: "Meet the Runda Finance team responsible for customer support, loan assessment, operations, and leadership.",
  alternates: { canonical: "/about/team" },
};

export default function TeamPage() {
  return (
    <>
      <Hero title="The people behind the process" body="A financial decision should not feel faceless. Meet the team responsible for guiding customers, assessing applications, and supporting borrowers." primary={{ href: "/contact", label: "Talk to a Loan Officer" }} placeholder="[Team Photo]" />
      <Section eyebrow="Team" title="Leadership and customer support">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </Section>
    </>
  );
}
