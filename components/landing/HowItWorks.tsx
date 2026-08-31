import {
  FileUp,
  MessageSquareText,
  WandSparkles,
} from "lucide-react";

import Container from "@/components/layout/Container";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const steps = [
  {
    number: "01",
    icon: FileUp,
    title: "Upload your document",
    description:
      "Drop a PDF into your Formify workspace and keep everything organized in one place.",
  },
  {
    number: "02",
    icon: WandSparkles,
    title: "Let AI understand it",
    description:
      "Formify AI analyzes your document so you can find information, summarize content, and understand it faster.",
  },
  {
    number: "03",
    icon: MessageSquareText,
    title: "Take action",
    description:
      "Ask questions, edit the document, extract information, or turn your insights into useful actions.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="py-24 md:py-32">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl">
          <Heading
            title="From document to action."
            subtitle="A simple workflow that turns static files into useful, intelligent workspaces."
          />
        </div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-[calc(16.666%-1px)] right-[calc(16.666%-1px)] top-12 hidden h-px bg-border md:block" />

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative text-center"
                >
                  {/* Number / Icon */}
                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-border/70 bg-background shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <Icon className="h-7 w-7" />

                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border border-border/70 bg-muted text-[10px] font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="mx-auto mt-7 max-w-sm">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-20 max-w-2xl rounded-3xl border border-border/60 bg-muted/20 p-8 text-center md:p-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-background">
            <WandSparkles className="h-5 w-5" />
          </div>

          <h3 className="mt-5 text-2xl font-semibold tracking-tight">
            Your documents are more useful than you think.
          </h3>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
            Formify AI helps you spend less time searching through files and
            more time actually working with the information inside them.
          </p>
        </div>
      </Container>
    </Section>
  );
}