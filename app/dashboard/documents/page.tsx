import { Search } from "lucide-react";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DocumentsHeader from "@/components/dashboard/DocumentsHeader";

export default function DocumentsPage() {
  return (
    <>
      <DashboardHeader />

      <div className="p-6 md:p-10">
        <div className="mx-auto max-w-7xl space-y-8">
          <DocumentsHeader />

          {/* Search and filters */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <input
                type="text"
                placeholder="Search documents..."
                className="h-10 w-full rounded-xl border border-border/60 bg-background pl-9 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/30"
              />
            </div>

            <button
              type="button"
              className="h-10 rounded-xl border border-border/60 bg-background px-4 text-sm font-medium transition-colors hover:bg-muted"
            >
              Recently updated
            </button>
          </div>

          {/* Empty state */}
          <div className="flex min-h-[360px] items-center justify-center rounded-3xl border border-dashed border-border/70 bg-muted/10">
            <div className="max-w-md px-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-background shadow-sm">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>

              <h2 className="mt-5 text-xl font-semibold tracking-tight">
                No documents yet
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Upload a PDF or create your first document to start building
                your Formify workspace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}