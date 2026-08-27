import Link from "next/link";
import { FileText } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 shadow-lg shadow-indigo-500/20">
        <FileText className="h-6 w-6 text-white" />
      </div>

      <div className="leading-tight">
        <h1 className="text-lg font-bold tracking-tight">
          Formify AI
        </h1>

        <p className="text-xs text-muted-foreground">
          AI Document Workspace
        </p>
      </div>
    </Link>
  );
}