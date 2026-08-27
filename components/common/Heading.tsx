import { cn } from "@/utils/cn";

interface HeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function Heading({
  title,
  subtitle,
  centered = true,
}: HeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        centered && "text-center"
      )}
    >
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}