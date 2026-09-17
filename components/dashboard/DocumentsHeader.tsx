"use client";

import { FilePlus2, Search, Upload } from "lucide-react";
import { useRef } from "react";

export default function DocumentsHeader() {
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

    // PDF upload logic will be connected later.
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-sm font-medium text-muted-foreground">
          Workspace
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Documents
        </h1>

        <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
          Manage your documents, PDFs, and files from one place.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          <FilePlus2 className="h-4 w-4" />
          New document
        </button>

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
    </div>
  );
}