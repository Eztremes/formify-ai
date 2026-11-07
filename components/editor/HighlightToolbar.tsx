
"use client";

import { Highlighter } from "lucide-react";
import type { AnnotationColor } from "@/app/types/annotations";

interface HighlightToolbarProps {
  onHighlight: (color: AnnotationColor) => void;
  disabled: boolean;
}

const colors: Array<{
  name: AnnotationColor;
  background: string;
}> = [
  { name: "yellow", background: "#facc15" },
  { name: "green", background: "#4ade80" },
  { name: "pink", background: "#f472b6" },
];

export default function HighlightToolbar({
  onHighlight,
  disabled,
}: HighlightToolbarProps) {
  return (
    <div className="flex items-center gap-2">
      <Highlighter className="h-4 w-4 text-muted-foreground" />

      {colors.map((color) => (
        <button
          key={color.name}
          type="button"
          disabled={disabled}
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => onHighlight(color.name)}
          aria-label={`Highlight ${color.name}`}
          title={`Highlight ${color.name}`}
          className="h-6 w-6 rounded-full border border-black/10 transition-transform hover:scale-110 disabled:cursor-not-allowed disabled:opacity-40"
          style={{ backgroundColor: color.background }}
        />
      ))}
    </div>
  );
}
