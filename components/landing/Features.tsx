import {
  FilePlus2,
  Pencil,
  Sparkles,
  Workflow,
} from "lucide-react";

import Container from "@/components/layout/Container";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const features = [
  {
    number: "01",
    icon: FilePlus2,
    title: "Create",
    description:
      "Generate professional documents from a simple prompt, template, or blank canvas.",
    example: "Create an employment contract",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Edit",
    description:
      "Edit PDFs, add text, annotate pages, fill forms, and organize your documents effortlessly.",
    example: "Edit your document visually",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Understand",
    description:
      "Ask questions about your documents and get useful answers without reading every page.",
    example: "Summarize this contract",
  },
  {
    number: "04",
    icon: Workflow,
    title: "Automate",
    description:
      "Turn repetitive document tasks into intelligent workflows that save time and reduce errors.",
    example: "Extract information automatically",
  },
];

export default function Features() {
  return (
    <Section id="features" className="py-24 md:py-32">
      <Container>
        {/* Section heading */}
        <div className="mx-auto max-w-3xl">
          <Heading
            title="Everything your documents need."
            subtitle="Formify AI combines document creation, editing, intelligence, and automation in one workspace."
          />
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-9"
              >
                {/* Background glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon + number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-muted/40">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-medium text-muted-foreground">
                      {feature.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {feature.title}
                    </h3>

                    <p className="mt-3 max-w-lg leading-7 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>

                  {/* Example */}
                  <div className="mt-8 rounded-2xl border border-border/60 bg-muted/30 p-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <Sparkles className="h-3.5 w-3.5" />
                      Example
                    </div>

                    <p className="mt-2 text-sm font-medium">
  &quot;{feature.example}&quot;
</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}