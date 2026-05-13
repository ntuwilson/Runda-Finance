export function InsightCard({ insight }: { insight: { title: string; summary: string; slug: string } }) {
  return (
    <article className="rounded-xl border border-[#e5e7eb] bg-white p-6 transition hover:bg-[#f5f5f7]">
      <p className="mb-3 text-sm font-medium text-[#667085]">Borrower guide</p>
      <h3 className="text-2xl font-medium leading-tight tracking-[-0.02em] text-[#111827]">{insight.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#475467]">{insight.summary}</p>
      <p className="mt-5 text-sm font-medium text-[#667085]">Full article draft: [{insight.slug}]</p>
    </article>
  );
}
