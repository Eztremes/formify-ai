
import type { HighlightAnnotation } from "@/app/types/annotations";

interface HighlightLayerProps {
  annotations: HighlightAnnotation[];
  pageNumber: number;
}

const colors = {
  yellow: "rgba(250, 204, 21, 0.38)",
  green: "rgba(74, 222, 128, 0.35)",
  pink: "rgba(244, 114, 182, 0.35)",
};

export default function HighlightLayer({
  annotations,
  pageNumber,
}: HighlightLayerProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1]">
      {annotations
        .filter((annotation) => annotation.pageNumber === pageNumber)
        .flatMap((annotation) =>
          annotation.rectangles.map((rect, index) => (
            <div
              key={`${annotation.id}-${index}`}
              className="absolute"
              style={{
                left: `${rect.x * 100}%`,
                top: `${rect.y * 100}%`,
                width: `${rect.width * 100}%`,
                height: `${rect.height * 100}%`,
                backgroundColor: colors[annotation.color],
                mixBlendMode: "multiply",
              }}
            />
          ))
        )}
    </div>
  );
}
