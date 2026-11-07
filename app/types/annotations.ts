
export type AnnotationColor = "yellow" | "green" | "pink";

export interface HighlightAnnotation {
  id: string;
  documentId: string;
  pageNumber: number;
  type: "highlight";
  color: AnnotationColor;
  selectedText: string;
  rectangles: Array<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>;
  createdAt: string;
}
