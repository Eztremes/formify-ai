import { Search } from "lucide-react";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DocumentsHeader from "@/components/dashboard/DocumentsHeader";
import DocumentCard from "@/components/dashboard/DocumentCard";
import { documents } from "@/app/data/documents";

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

          {/* Document grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {documents.map((document) => (
              <DocumentCard
                key={document.id}
                {...document}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}