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
        "group inline-flex min-h-11 w-full min-w-0 items-center justify-center gap-2 rounded-md px-4 py-3 text-center text-sm font-medium leading-tight shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f79e26] active:translate-y-px sm:w-auto sm:px-5",
        variant === "primary" && "bg-[#263479] text-white hover:-translate-y-0.5 hover:bg-[#121b4d] hover:shadow-md",
        variant === "secondary" && "border border-[#f79e26] bg-[#f79e26] text-[#050505] hover:-translate-y-0.5 hover:bg-[#ffb755] hover:shadow-md",
        variant === "ghost" && "border border-[#dfe3ee] bg-white text-[#050505] hover:-translate-y-0.5 hover:border-[#263479] hover:bg-[#fff8ef] hover:text-[#050505] hover:shadow-md",
        className,
      )}
      href={href}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
        -&gt;
      </span>
    </Link>
  );
}
