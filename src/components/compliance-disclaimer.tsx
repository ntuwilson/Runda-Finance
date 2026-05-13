import { standardDisclaimer } from "@/lib/content";

export function ComplianceDisclaimer() {
  return (
    <div className="rounded-xl border border-[#efe4c4] bg-[#fffbeb] p-5 text-sm leading-6 text-[#59430f]">
      <strong className="font-semibold">Important:</strong> {standardDisclaimer}
    </div>
  );
}
