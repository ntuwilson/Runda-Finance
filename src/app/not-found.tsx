import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";

export default function NotFound() {
  return (
    <Section title="Page not found">
      <div className="max-w-2xl">
        <p className="mb-6 text-sm leading-6 text-[#334155]">The page may have moved during the rebuild or may have been removed because it was outdated, thin, or unsafe.</p>
        <ButtonLink href="/loans">View Loan Products</ButtonLink>
      </div>
    </Section>
  );
}
