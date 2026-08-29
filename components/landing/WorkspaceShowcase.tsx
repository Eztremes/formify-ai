import {
  FileText,
  MessageSquare,
  MoreHorizontal,
  Search,
  Sparkles,
} from "lucide-react";

import Container from "@/components/layout/Container";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const documents = [
  {
    name: "Quarterly Report.pdf",
    type: "PDF",
  },
  {
    name: "Employment Contract.pdf",
    type: "PDF",
  },
  {
    name: "Project Proposal.pdf",
    type: "PDF",
  },
];

export default function WorkspaceShowcase() {
  return (
    <Section id="workspace" className="py-24 md:py-32">
      <Container>
        {/* Section heading */}
        <div className="mx-auto max-w-3xl">
          <Heading
            title="One workspace. Smarter documents."
            subtitle="Read, edit, organize, and understand your documents with an AI workspace designed around the way you actually work."
          />
        </div>

        {/* Workspace */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-border/60 bg-background shadow-2xl">
          {/* Workspace header */}
          <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted">
                <FileText className="h-4 w-4" />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Formify Workspace
                </p>

                <p className="text-xs text-muted-foreground">
                  3 documents
                </p>
              </div>
            </div>

            <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
          </div>

          {/* Workspace body */}
          <div className="grid min-h-[560px] md:grid-cols-[220px_1fr]">
            {/* Sidebar */}
            <aside className="border-b border-border/60 p-4 md:border-b-0 md:border-r">
              <div className="relative mb-5">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <input
                  type="text"
                  placeholder="Search documents"
                  className="h-10 w-full rounded-xl border border-border/60 bg-muted/30 pl-9 pr-3 text-xs outline-none placeholder:text-muted-foreground"
                />
              </div>

              <p className="mb-3 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Documents
              </p>

              <div className="space-y-1">
                {documents.map((document, index) => (
                  <button
                    key={document.name}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                      index === 0
                        ? "bg-muted"
                        : "hover:bg-muted/60"
                    }`}
                  >
                    <FileText className="h-4 w-4 shrink-0 text-muted-foreground" />

                    <span className="min-w-0">
                      <span className="block truncate text-xs font-medium">
                        {document.name}
                      </span>

                      <span className="text-[10px] text-muted-foreground">
                        {document.type}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Main workspace */}
            <div className="grid lg:grid-cols-[1fr_320px]">
              {/* Document preview */}
              <div className="border-b border-border/60 p-5 lg:border-b-0 lg:border-r md:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">
                      Quarterly Report
                    </p>

                    <p className="text-xs text-muted-foreground">
                      Page 1 of 8
                    </p>
                  </div>

                  <button className="rounded-lg border border-border/60 p-2">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>

                {/* Fake PDF page */}
                <div className="mx-auto min-h-[420px] max-w-2xl rounded-xl border border-border/60 bg-muted/20 p-7 shadow-sm md:p-10">
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <div className="h-5 w-2/3 rounded bg-muted" />
                      <div className="h-3 w-1/3 rounded bg-muted/70" />
                    </div>

                    <div className="h-px w-full bg-border" />

                    <div className="space-y-3">
                      <div className="h-3 w-full rounded bg-muted/70" />
                      <div className="h-3 w-[94%] rounded bg-muted/70" />
                      <div className="h-3 w-[88%] rounded bg-muted/70" />
                      <div className="h-3 w-[96%] rounded bg-muted/70" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-4">
                      <div className="h-24 rounded-lg bg-muted/60" />
                      <div className="h-24 rounded-lg bg-muted/60" />
                    </div>

                    <div className="space-y-3">
                      <div className="h-3 w-full rounded bg-muted/70" />
                      <div className="h-3 w-[92%] rounded bg-muted/70" />
                      <div className="h-3 w-[80%] rounded bg-muted/70" />
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Assistant */}
              <aside className="flex flex-col p-5 md:p-6">
                <div className="flex items-center gap-3 border-b border-border/60 pb-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted">
                    <Sparkles className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      AI Assistant
                    </p>

                    <p className="text-xs text-muted-foreground">
                      Ask anything about this document
                    </p>
                  </div>
                </div>

                {/* Conversation */}
                <div className="flex-1 space-y-5 py-6">
                  <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-md bg-muted p-4">
                    <p className="text-xs leading-5">
                      Summarize the key points from this report.
                    </p>
                  </div>

                  <div className="max-w-[95%] space-y-3">
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <Sparkles className="h-3.5 w-3.5" />
                      Formify AI
                    </div>

                    <div className="rounded-2xl rounded-tl-md border border-border/60 bg-muted/30 p-4">
                      <p className="text-xs leading-6 text-muted-foreground">
                        The report highlights strong quarterly growth,
                        improved operational efficiency, and increased
                        customer retention.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="rounded-2xl border border-border/60 p-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="ml-2 h-4 w-4 text-muted-foreground" />

                    <input
                      type="text"
                      placeholder="Ask about this document..."
                      className="h-9 flex-1 bg-transparent px-1 text-xs outline-none placeholder:text-muted-foreground"
                    />

                    <button className="rounded-xl bg-foreground px-3 py-2 text-xs font-medium text-background">
                      Ask
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}