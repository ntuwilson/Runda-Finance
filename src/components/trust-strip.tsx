const items = [
  "Licensed and regulated",
  "Clear document requirements",
  "Human loan support",
  "Assessment before approval",
  "No hidden application confusion",
];

export function TrustStrip() {
  return (
    <section aria-label="Runda Finance trust signals" className="border-y border-[#dfe3ee] bg-[#eef1ff]">
      <div className="mx-auto grid max-w-7xl gap-x-6 gap-y-3 px-4 py-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm font-medium text-[#263479]">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#f79e26]" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
