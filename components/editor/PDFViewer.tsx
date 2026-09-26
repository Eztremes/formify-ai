"use client";

import { useEffect, useRef, useState } from "react";
import { FileText, Loader2 } from "lucide-react";

import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface PDFViewerProps {
  file: File | null;
}

export default function PDFViewer({ file }: PDFViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const renderPDF = async () => {
      if (!file || !canvasRef.current) return;

      try {
        setLoading(true);
        setError(null);

        const arrayBuffer = await file.arrayBuffer();

        const loadingTask = pdfjsLib.getDocument({
          data: arrayBuffer,
        });

        const pdf = await loadingTask.promise;

        if (cancelled) return;

        const page = await pdf.getPage(1);

        const viewport = page.getViewport({
          scale: 1.5,
        });

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        if (!context) {
          throw new Error("Unable to access PDF canvas.");
        }

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvas,
          canvasContext: context,
          viewport,
        }).promise;
      } catch (err) {
        console.error("PDF rendering error:", err);

        if (!cancelled) {
          setError("Unable to render this PDF.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    renderPDF();

    return () => {
      cancelled = true;
    };
  }, [file]);

  if (!file) {
    return (
      <div className="flex min-h-[700px] items-center justify-center rounded-2xl border border-dashed border-border/70 bg-background">
        <div className="max-w-sm px-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-muted/40">
            <FileText className="h-6 w-6 text-muted-foreground" />
          </div>

          <h2 className="mt-5 text-xl font-semibold tracking-tight">
            No document loaded
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Upload a PDF to preview it inside your Formify workspace.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[700px] items-start justify-center overflow-auto rounded-2xl border border-border/60 bg-muted/30 p-6">
      {loading && (
        <div className="flex min-h-[600px] items-center justify-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Rendering PDF...
          </div>
        </div>
      )}

      {error && (
        <div className="flex min-h-[600px] items-center justify-center">
          <div className="text-center">
            <p className="font-medium">Something went wrong</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {error}
            </p>
          </div>
        </div>
      )}

      <canvas
        ref={canvasRef}
        className={loading || error ? "hidden" : "block h-auto max-w-full bg-white shadow-lg"}
      />
    </div>
  );
}