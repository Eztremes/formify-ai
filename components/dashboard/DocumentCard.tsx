import Link from "next/link";
import { FileText, MoreHorizontal } from "lucide-react";

interface DocumentCardProps {
  id: string;
  name: string;
  type: string;
  size: string;
  updatedAt: string;
}

export default function DocumentCard({
  id,
  name,
  type,
  size,
  updatedAt,
}: DocumentCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      {/* Preview */}
      <Link
        href={`/dashboard/documents/${id}`}
        className="block"
      >
        <div className="flex h-48 items-center justify-center border-b border-border/60 bg-muted/20">
          <div className="flex h-24 w-20 items-center justify-center rounded-lg border border-border/60 bg-background shadow-sm transition-transform duration-200 group-hover:-translate-y-1">
            <FileText className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>
      </Link>

      {/* Information */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          <Link
            href={`/dashboard/documents/${id}`}
            className="min-w-0 flex-1"
          >
            <h3 className="truncate text-sm font-semibold">
              {name}
            </h3>

            <p className="mt-1 text-xs text-muted-foreground">
              {type} · {size}
            </p>

            <p className="mt-2 text-xs text-muted-foreground">
              {updatedAt}
            </p>
          </Link>

          <button
            type="button"
            aria-label={`More options for ${name}`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}