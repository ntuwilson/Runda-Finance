import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f6fed]",
        variant === "primary" && "bg-[#111827] text-white hover:bg-[#1f2937]",
        variant === "secondary" && "border border-[#d8a938] bg-[#d8a938] text-[#111827] hover:bg-[#e3bd58]",
        variant === "ghost" && "border border-[#e5e7eb] bg-white text-[#111827] hover:bg-[#f5f5f7]",
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
