import { Stagger, StaggerItem } from "@/components/reveal";

export function RequirementChecklist({ items }: { items: string[] }) {
  return (
    <Stagger className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <StaggerItem key={item}>
          <div className="flex gap-3 rounded-md border border-[#e4e8f4] bg-white p-4 text-sm leading-6 text-[#3f4656]">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#d8a938]" />
            <span>{item}</span>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
