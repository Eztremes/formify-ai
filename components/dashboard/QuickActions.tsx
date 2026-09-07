"use client";

import { FilePlus2, Upload } from "lucide-react";
import { useRef } from "react";

export default function QuickActions() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    console.log("Selected file:", file.name);

    // PDF processing will be connected here later.
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {/* Create document */}
      <button
        type="button"
        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-foreground px-5 text-sm font-medium text-background transition-all hover:opacity-90"
      >
        <FilePlus2 className="h-4 w-4" />
        Create document
      </button>

      {/* Upload PDF */}
      <button
        type="button"
        onClick={handleUploadClick}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border/60 bg-background px-5 text-sm font-medium transition-colors hover:bg-muted"
      >
        <Upload className="h-4 w-4" />
        Upload PDF
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}