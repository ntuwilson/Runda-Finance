import { standardDisclaimer } from "@/lib/content";

export function ComplianceDisclaimer() {
  return (
    <div className="rounded-lg border border-[#ffd8a0] bg-[#fff8ef] p-5 text-sm leading-6 text-[#5d3907]">
      <strong className="font-semibold">Important:</strong> {standardDisclaimer}
    </div>
  );
}
