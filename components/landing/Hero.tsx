import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import Container from "@/components/layout/Container";
import Section from "@/components/common/Section";
import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    <Section className="overflow-hidden pt-16 md:pt-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm font-medium">
            <Sparkles className="h-4 w-4 text-indigo-500" />

            <span>AI-powered document workspace</span>
          </div>

          {/* Heading */}
          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Your documents,
            <span className="block bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              now intelligent.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            Create, edit, understand and automate documents
            with one intelligent workspace built for modern
            work.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Start Creating
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="#workspace"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-background px-6 text-sm font-semibold transition-colors hover:bg-muted"
            >
              See how it works
            </Link>
          </div>
        </div>

        <HeroPreview />
      </Container>
    </Section>
  );
}