import { Button as ShadcnButton } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
}

export default function Button({
  children,
  className,
  icon = false,
}: ButtonProps) {
  return (
    <ShadcnButton
      className={cn(
        "rounded-xl h-11 px-6 font-medium transition-all duration-300 hover:scale-[1.02]",
        className
      )}
    >
      {children}

      {icon && (
        <ArrowRight className="ml-2 h-4 w-4" />
      )}
    </ShadcnButton>
  );
}