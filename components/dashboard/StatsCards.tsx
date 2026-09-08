import { FileText, PenLine, Sparkles } from "lucide-react";

const stats = [
  {
    label: "Total documents",
    value: "12",
    description: "All documents in your workspace",
    icon: FileText,
  },
  {
    label: "Edited this month",
    value: "8",
    description: "+3 from last month",
    icon: PenLine,
  },
  {
    label: "AI actions",
    value: "24",
    description: "Summaries, rewrites, and analysis",
    icon: Sparkles,
  },
];

export default function StatsCards() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>

                <p className="mt-3 text-3xl font-semibold tracking-tight">
                  {stat.value}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-muted/40">
                <Icon className="h-5 w-5" />
              </div>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              {stat.description}
            </p>
          </div>
        );
      })}
    </section>
  );
}