import { cn } from "@/utils/cn";
import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </section>
  );
}