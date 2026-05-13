import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import type { LoanProduct } from "@/lib/content";

export function LoanCard({ loan }: { loan: LoanProduct }) {
  return (
    <Reveal className="h-full">
      <article className="flex h-full flex-col rounded-xl border border-[#e5e7eb] bg-white p-5 transition hover:bg-[#f5f5f7]">
        <h3 className="text-2xl font-medium tracking-[-0.02em] text-[#111827]">{loan.name}</h3>
        <p className="mt-3 text-sm font-medium text-[#667085]">Best for: {loan.bestFor}</p>
        <p className="mt-4 flex-1 text-sm leading-6 text-[#475467]">{loan.requirementSummary}</p>
        <div className="mt-5">
          <ButtonLink href={`/loans/${loan.slug}`} variant="ghost" className="w-full">
            Check Requirements
          </ButtonLink>
        </div>
      </article>
    </Reveal>
  );
}
