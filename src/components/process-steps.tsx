import { Stagger, StaggerItem } from "@/components/reveal";

export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <Stagger className="grid gap-3 md:grid-cols-3">
      {steps.map((step, index) => (
        <StaggerItem key={step}>
          <div className="rounded-lg bg-white p-5 shadow-[inset_0_0_0_1px_#e4e8f4]">
            <span className="mb-4 block text-sm font-medium text-[#263479]">{String(index + 1).padStart(2, "0")}</span>
            <p className="text-sm leading-6 text-[#3f4656]">{step}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
