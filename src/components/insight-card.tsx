export function InsightCard({ insight }: { insight: { title: string; summary: string; slug: string } }) {
  return (
    <article className="rounded-lg border border-[#e4e8f4] bg-white p-6 transition hover:bg-[#eef1ff]">
      <p className="mb-3 text-sm font-medium text-[#263479]">Borrower guide</p>
      <h3 className="text-2xl font-medium leading-tight tracking-[-0.02em] text-[#050505]">{insight.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#3f4656]">{insight.summary}</p>
      <p className="mt-5 text-sm font-medium text-[#263479]">Full article draft: [{insight.slug}]</p>
    </article>
  );
}
