import { FileText, FolderOpen, MessageSquare, Sparkles } from "lucide-react";

export default function HeroPreview() {
  return (
    <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-border/70 bg-card text-left shadow-2xl shadow-indigo-500/10">
      <div className="flex items-center justify-between border-b border-border/70 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <FileText className="h-4 w-4 text-indigo-500" />
          Quarterly report
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
          AI ready
        </div>
      </div>
      <div className="grid min-h-64 md:grid-cols-[180px_1fr_220px]">
        <aside className="hidden border-r border-border/70 p-4 md:block">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Workspace</p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 font-medium"><FileText className="h-4 w-4" /> Documents</div>
            <div className="flex items-center gap-2 text-muted-foreground"><FolderOpen className="h-4 w-4" /> Templates</div>
          </div>
        </aside>
        <article className="p-6 sm:p-8">
          <div className="mb-6 h-3 w-2/5 rounded bg-muted" />
          <div className="space-y-3">
            <div className="h-2 w-full rounded bg-muted" />
            <div className="h-2 w-11/12 rounded bg-muted" />
            <div className="h-2 w-4/5 rounded bg-muted" />
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <div className="h-20 rounded-lg border border-border/70 bg-muted/40" />
            <div className="h-20 rounded-lg border border-border/70 bg-muted/40" />
          </div>
        </article>
        <aside className="border-t border-border/70 bg-muted/20 p-5 md:border-l md:border-t-0">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold"><MessageSquare className="h-4 w-4 text-indigo-500" /> AI assistant</div>
          <p className="text-sm leading-6 text-muted-foreground">Summarize this report and highlight the changes from last quarter.</p>
        </aside>
      </div>
    </div>
  );
}