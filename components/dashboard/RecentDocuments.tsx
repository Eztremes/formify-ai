import Link from "next/link";
import {
  FileText,
  FileSpreadsheet,
  FileType2,
  MoreHorizontal,
} from "lucide-react";

const documents = [
  {
    id: "1",
    name: "Quarterly Report",
    type: "PDF",
    updated: "Edited 2 hours ago",
    icon: FileText,
  },
  {
    id: "2",
    name: "Product Strategy",
    type: "Document",
    updated: "Edited yesterday",
    icon: FileType2,
  },
  {
    id: "3",
    name: "Financial Overview",
    type: "Spreadsheet",
    updated: "Edited 3 days ago",
    icon: FileSpreadsheet,
  },
];

export default function RecentDocuments() {
  return (
    <section className="rounded-2xl border border-border/60 bg-card shadow-sm">
      {/* Section header */}
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-4 md:px-6">
        <div>
          <h2 className="font-semibold tracking-tight">
            Recent documents
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Pick up where you left off.
          </p>
        </div>

        <Link
          href="/dashboard/documents"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          View all
        </Link>
      </div>

      {/* Documents */}
      <div className="divide-y divide-border/60">
        {documents.map((document) => {
          const Icon = document.icon;

          return (
            <Link
              key={document.id}
              href={`/dashboard/documents/${document.id}`}
              className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-muted/40 md:px-6"
            >
              {/* File icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted/40">
                <Icon className="h-5 w-5" />
              </div>

              {/* Document info */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  {document.name}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {document.type} · {document.updated}
                </p>
              </div>

              {/* Menu icon */}
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground">
                <MoreHorizontal className="h-4 w-4" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}