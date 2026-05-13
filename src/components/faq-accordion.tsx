export function FAQAccordion({ items }: { items: { question: string; answer: string; category?: string }[] }) {
  return (
    <div className="divide-y divide-[#e5e7eb] rounded-xl border border-[#e5e7eb] bg-white">
      {items.map((item) => (
        <details key={item.question} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-[#111827] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f6fed]">
            <span>{item.question}</span>
            <span aria-hidden="true" className="text-xl text-[#667085] group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-6 text-[#475467]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
