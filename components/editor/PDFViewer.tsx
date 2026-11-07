"use client";

import { useEffect, useRef, useState } from "react";
import "pdfjs-dist/web/pdf_viewer.css";
import HighlightLayer from "@/components/editor/HighlightLayer";
import HighlightToolbar from "@/components/editor/HighlightToolbar";

import type {
  AnnotationColor,
  HighlightAnnotation,
} from "@/app/types/annotations";

import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Loader2,
  Minus,
  Plus,
} from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";
import { TextLayer } from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

interface PDFViewerProps {
  file: File | null;
}

export default function PDFViewer({ file }: PDFViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);

  const pageContainerRef = useRef<HTMLDivElement>(null);

  const [annotations, setAnnotations] = useState<HighlightAnnotation[]>([]);

  const [hasSelection, setHasSelection] = useState(false);

  const [pdfDocument, setPdfDocument] =
    useState<pdfjsLib.PDFDocumentProxy | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1.25);
  const [loading, setLoading] = useState(false);
  const [rendering, setRendering] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load PDF
  useEffect(() => {
    let cancelled = false;

    const loadPDF = async () => {
      if (!file) {
        setPdfDocument(null);
        setCurrentPage(1);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        setCurrentPage(1);

        const arrayBuffer = await file.arrayBuffer();

        const loadingTask = pdfjsLib.getDocument({
          data: arrayBuffer,
        });

        const pdf = await loadingTask.promise;

        if (cancelled) {
          return;
        }

        setPdfDocument(pdf);
      } catch (err) {
        console.error("PDF loading error:", err);

        if (!cancelled) {
          setError("Unable to load this PDF.");
          setPdfDocument(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadPDF();

    return () => {
      cancelled = true;
    };
  }, [file]);

  // Render current page
  useEffect(() => {
    let cancelled = false;
    let textLayer: TextLayer | null = null;

    const renderPage = async () => {
      if (!pdfDocument || !canvasRef.current || !textLayerRef.current) {
        return;
      }

      try {
        setRendering(true);
        setError(null);

        const page = await pdfDocument.getPage(currentPage);

        if (cancelled) return;

        const viewport = page.getViewport({
          scale,
        });

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        if (!context) {
          throw new Error("Unable to access PDF canvas.");
        }

        /*
         * -------------------------
         * Canvas layer
         * -------------------------
         */

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        context.clearRect(0, 0, canvas.width, canvas.height);

        await page.render({
          canvas,
          canvasContext: context,
          viewport,
        }).promise;

        if (cancelled) return;

        /*
         * -------------------------
         * Text layer
         * -------------------------
         */

        const textLayerContainer = textLayerRef.current;

        textLayerContainer.replaceChildren();

        textLayerContainer.style.width = `${viewport.width}px`;
        textLayerContainer.style.height = `${viewport.height}px`;

        textLayerContainer.style.setProperty(
          "--total-scale-factor",
          String(viewport.scale),
        );

        const textContentSource = await page.getTextContent();

        if (cancelled) return;

        textLayer = new TextLayer({
          textContentSource,
          container: textLayerContainer,
          viewport,
        });

        await textLayer.render();
      } catch (err) {
        console.error("PDF rendering error:", err);

        if (!cancelled) {
          setError("Unable to render this page.");
        }
      } finally {
        if (!cancelled) {
          setRendering(false);
        }
      }
    };

    renderPage();

    return () => {
      cancelled = true;

      if (textLayer) {
        textLayer.cancel();
        textLayer = null;
      }
    };
  }, [pdfDocument, currentPage, scale]);

  const checkSelection = () => {
    const selection = window.getSelection();
    const container = textLayerRef.current;

    if (!selection || !container || selection.isCollapsed) {
      setHasSelection(false);
      return;
    }

    const range = selection.getRangeAt(0);

    const valid =
      container.contains(range.startContainer) &&
      container.contains(range.endContainer) &&
      selection.toString().trim().length > 0;

    setHasSelection(valid);
  };

  const handleHighlight = (color: AnnotationColor) => {
    const selection = window.getSelection();
    const container = textLayerRef.current;
    const pageContainer = pageContainerRef.current;

    if (!selection || selection.isCollapsed || !container || !pageContainer) {
      return;
    }

    const range = selection.getRangeAt(0);

    if (
      !container.contains(range.startContainer) ||
      !container.contains(range.endContainer)
    ) {
      return;
    }

    const pageBounds = pageContainer.getBoundingClientRect();

    const rectangles = Array.from(range.getClientRects())
      .filter((rect) => rect.width > 0 && rect.height > 0)
      .map((rect) => ({
        x: (rect.left - pageBounds.left) / pageBounds.width,
        y: (rect.top - pageBounds.top) / pageBounds.height,
        width: rect.width / pageBounds.width,
        height: rect.height / pageBounds.height,
      }))
      .filter(
        (rect) =>
          rect.x >= 0 &&
          rect.y >= 0 &&
          rect.x + rect.width <= 1.001 &&
          rect.y + rect.height <= 1.001,
      );

    if (rectangles.length === 0) return;

    const annotation: HighlightAnnotation = {
      id: crypto.randomUUID(),
      documentId: file?.name ?? "unknown",
      pageNumber: currentPage,
      type: "highlight",
      color,
      selectedText: selection.toString(),
      rectangles,
      createdAt: new Date().toISOString(),
    };

    setAnnotations((previous) => [...previous, annotation]);

    selection.removeAllRanges();
    setHasSelection(false);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(1, page - 1));
  };

  const goToNextPage = () => {
    if (!pdfDocument) return;

    setCurrentPage((page) => Math.min(pdfDocument.numPages, page + 1));
  };

  const zoomOut = () => {
    setScale((value) => Math.max(0.5, value - 0.1));
  };

  const zoomIn = () => {
    setScale((value) => Math.min(2.5, value + 0.1));
  };

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

  if (loading) {
    return (
      <div className="flex min-h-[700px] items-center justify-center rounded-2xl border border-border/60 bg-muted/30">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading PDF...
        </div>
      </div>
    );
  }

  if (error || !pdfDocument) {
    return (
      <div className="flex min-h-[700px] items-center justify-center rounded-2xl border border-border/60 bg-muted/30">
        <div className="text-center">
          <p className="font-medium">Something went wrong</p>

          <p className="mt-2 text-sm text-muted-foreground">
            {error ?? "Unable to load the document."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[700px] flex-col overflow-hidden rounded-2xl border border-border/60 bg-muted/30">
      {/* Viewer toolbar */}
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-border/60 bg-background px-3">
        {/* Page controls */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <span className="min-w-20 text-center text-xs font-medium">
            {currentPage} / {pdfDocument.numPages}
          </span>

          <button
            type="button"
            onClick={goToNextPage}
            disabled={currentPage === pdfDocument.numPages}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Highlight and zoom controls */}
        <div className="flex items-center gap-3">
          <HighlightToolbar
            onHighlight={handleHighlight}
            disabled={!hasSelection || rendering}
          />

          <div className="h-5 w-px bg-border" />

          {/* Zoom controls */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={zoomOut}
              disabled={scale <= 0.5}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
              aria-label="Zoom out"
            >
              <Minus className="h-4 w-4" />
            </button>

            <span className="w-14 text-center text-xs font-medium">
              {Math.round(scale * 100)}%
            </span>

            <button
              type="button"
              onClick={zoomIn}
              disabled={scale >= 2.5}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
              aria-label="Zoom in"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* PDF canvas, highlight layer and text layer */}
      <div className="flex flex-1 items-start justify-center overflow-auto p-6">
        <div
          ref={pageContainerRef}
          className="relative shrink-0"
          onMouseUp={checkSelection}
          onKeyUp={checkSelection}
        >
          {rendering && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/60 backdrop-blur-[1px]">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          )}

          <canvas
            ref={canvasRef}
            className="block h-auto max-w-none bg-white shadow-xl"
          />

          <HighlightLayer annotations={annotations} pageNumber={currentPage} />

          <div ref={textLayerRef} className="textLayer absolute left-0 top-0" />
        </div>
      </div>
    </div>
  );
}
