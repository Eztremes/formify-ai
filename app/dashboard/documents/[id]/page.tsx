import Link from "next/link";
import {
  ArrowLeft,
  Download,
  MoreHorizontal,
  Save,
  Sparkles,
} from "lucide-react";

interface DocumentPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DocumentPage({
  params,
}: DocumentPageProps) {
  const { id } = await params;

  return (
    <div className="flex min-h-screen flex-col bg-muted/20">
      {/* Top bar */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-border/60 bg-background px-4 md:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href="/dashboard/documents"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Back to documents"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">
              Quarterly Report
            </p>

            <p className="text-xs text-muted-foreground">
              PDF · {id}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden h-9 items-center gap-2 rounded-lg border border-border/60 bg-background px-3 text-sm font-medium transition-colors hover:bg-muted sm:flex"
          >
            <Save className="h-4 w-4" />
            Save
          </button>

          <button
            type="button"
            className="hidden h-9 items-center gap-2 rounded-lg border border-border/60 bg-background px-3 text-sm font-medium transition-colors hover:bg-muted sm:flex"
          >
            <Download className="h-4 w-4" />
            Export
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="More options"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Workspace */}
      <main className="flex min-h-0 flex-1">
        {/* Left toolbar */}
        <aside className="hidden w-16 shrink-0 border-r border-border/60 bg-background lg:flex lg:flex-col lg:items-center lg:gap-2 lg:py-4">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-foreground"
            title="Select"
          >
            <span className="text-sm">↖</span>
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            title="Text"
          >
            <span className="text-sm font-semibold">T</span>
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            title="Highlight"
          >
            <span className="h-4 w-4 rounded-sm border border-current" />
          </button>
        </aside>

        {/* PDF canvas area */}
        <section className="min-w-0 flex-1 overflow-auto p-6 md:p-10">
          <div className="mx-auto flex min-h-[700px] max-w-3xl items-center justify-center rounded-2xl border border-dashed border-border/70 bg-background shadow-sm">
            <div className="max-w-sm px-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-muted/40">
                <Download className="h-6 w-6 text-muted-foreground" />
              </div>

              <h2 className="mt-5 text-xl font-semibold tracking-tight">
                PDF workspace
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                The PDF viewer and editing canvas will appear here.
              </p>
            </div>
          </div>
        </section>

        {/* AI panel */}
        <aside className="hidden w-80 shrink-0 border-l border-border/60 bg-background xl:flex xl:flex-col">
          <div className="border-b border-border/60 p-5">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                <Sparkles className="h-4 w-4" />
              </div>

              <div>
                <h2 className="text-sm font-semibold">
                  AI Assistant
                </h2>

                <p className="text-xs text-muted-foreground">
                  Work with this document
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center p-6">
            <div className="text-center">
              <Sparkles className="mx-auto h-6 w-6 text-muted-foreground" />

              <p className="mt-3 text-sm font-medium">
                Ask anything about this document
              </p>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Summarize, extract information, rewrite content, and more.
              </p>
            </div>
          </div>

          <div className="border-t border-border/60 p-4">
            <div className="rounded-xl border border-border/60 bg-muted/20 px-3 py-2">
              <p className="text-xs text-muted-foreground">
                AI chat will be connected later.
              </p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}