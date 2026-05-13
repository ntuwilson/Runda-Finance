import { Stagger, StaggerItem } from "@/components/reveal";

export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <Stagger className="grid gap-3 md:grid-cols-3">
      {steps.map((step, index) => (
        <StaggerItem key={step}>
          <div className="rounded-xl bg-white p-5 shadow-[inset_0_0_0_1px_#e5e7eb]">
            <span className="mb-4 block text-sm font-medium text-[#667085]">{String(index + 1).padStart(2, "0")}</span>
            <p className="text-sm leading-6 text-[#475467]">{step}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
