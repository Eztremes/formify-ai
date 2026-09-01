import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileBarChart,
  FileText,
} from "lucide-react";

import Container from "@/components/layout/Container";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const templates = [
  {
    icon: FileText,
    category: "Career",
    title: "Professional Resume",
    description:
      "Create a clean, structured resume ready for your next opportunity.",
  },
  {
    icon: BriefcaseBusiness,
    category: "Business",
    title: "Employment Contract",
    description:
      "Start with a professional structure for agreements and contracts.",
  },
  {
    icon: FileBarChart,
    category: "Business",
    title: "Quarterly Report",
    description:
      "Present important metrics, insights, and results in a clear format.",
  },
];

export default function Templates() {
  return (
    <Section id="templates" className="py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Heading
            title="Start with a template."
            subtitle="Skip the blank page. Choose a professional starting point and make it your own."
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {templates.map((template) => {
            const Icon = template.icon;

            return (
              <div
                key={template.title}
                className="group overflow-hidden rounded-3xl border border-border/60 bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Document preview */}
                <div className="relative mx-4 mt-4 h-64 overflow-hidden rounded-2xl border border-border/60 bg-muted/20 p-6">
                  <div className="mx-auto h-full max-w-[190px] rounded-lg border border-border/50 bg-background p-5 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-muted">
                        <Icon className="h-3.5 w-3.5" />
                      </div>

                      <div className="h-2 w-20 rounded bg-muted" />
                    </div>

                    <div className="mt-6 space-y-2">
                      <div className="h-2 w-full rounded bg-muted" />
                      <div className="h-2 w-[85%] rounded bg-muted" />
                      <div className="h-2 w-[92%] rounded bg-muted" />
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-2">
                      <div className="h-12 rounded-md bg-muted/70" />
                      <div className="h-12 rounded-md bg-muted/70" />
                    </div>

                    <div className="mt-5 space-y-2">
                      <div className="h-2 w-full rounded bg-muted" />
                      <div className="h-2 w-[90%] rounded bg-muted" />
                      <div className="h-2 w-[75%] rounded bg-muted" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <span className="absolute left-4 top-4 rounded-full border border-border/60 bg-background/90 px-3 py-1 text-[10px] font-medium backdrop-blur">
                    {template.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {template.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {template.description}
                  </p>

                  <button className="mt-6 flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3">
                    Use template
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}