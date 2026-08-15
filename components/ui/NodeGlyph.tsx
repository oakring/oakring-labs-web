import type { NodeState } from "@/lib/graph-legend";
import { cn } from "@/lib/cn";

type NodeGlyphProps = {
  state: NodeState;
  cx?: number;
  cy?: number;
  r?: number;
  className?: string;
  pulse?: boolean;
};

/** SVG circle treatment for a node state (use inside an <svg>). */
export function NodeGlyph({
  state,
  cx = 0,
  cy = 0,
  r = 12,
  className,
  pulse = false,
}: NodeGlyphProps) {
  if (state === "mastered") {
    return (
      <g className={className}>
        <circle cx={cx} cy={cy} r={r} className="fill-foreground" />
        <circle cx={cx} cy={cy} r={r * 0.32} className="fill-background" />
      </g>
    );
  }

  if (state === "active") {
    return (
      <g className={className}>
        {pulse ? (
          <circle
            cx={cx}
            cy={cy}
            r={r + 6}
            className="fill-transparent stroke-foreground/20 kg-pulse-ring"
            strokeWidth={1.25}
          />
        ) : null}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          className={cn(
            "fill-surface stroke-foreground",
            pulse && "kg-pulse",
          )}
          strokeWidth={2}
        />
        <circle cx={cx} cy={cy} r={r * 0.28} className="fill-foreground" />
      </g>
    );
  }

  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      className={cn("fill-transparent stroke-foreground/65", className)}
      strokeWidth={1.5}
      strokeDasharray="3.5 3"
    />
  );
}
