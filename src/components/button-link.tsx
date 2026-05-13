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
        "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f79e26]",
        variant === "primary" && "bg-[#050505] text-white hover:bg-[#263479]",
        variant === "secondary" && "border border-[#f79e26] bg-[#f79e26] text-[#050505] hover:bg-[#ffb755]",
        variant === "ghost" && "border border-white/35 bg-white text-[#050505] hover:bg-[#fff8ef] hover:text-[#050505]",
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
