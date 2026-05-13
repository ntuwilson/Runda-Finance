export function FAQAccordion({ items }: { items: { question: string; answer: string; category?: string }[] }) {
  return (
    <div className="divide-y divide-[#e4e8f4] rounded-md border border-[#e4e8f4] bg-white">
      {items.map((item) => (
        <details key={item.question} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-[#050505] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f79e26]">
            <span>{item.question}</span>
            <span aria-hidden="true" className="text-xl text-[#263479] group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-6 text-[#3f4656]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
