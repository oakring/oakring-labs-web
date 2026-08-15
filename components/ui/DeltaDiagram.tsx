import { NodeGlyph } from "@/components/ui/NodeGlyph";
import { cn } from "@/lib/cn";

/** Many sources → one Delta. No legend prose — glyphs are self-explanatory in context. */
export function DeltaDiagram({ className }: { className?: string }) {
  const sources: Array<{ y: number; state: "mastered" | "active" | "gap" }> = [
    { y: 48, state: "mastered" },
    { y: 88, state: "gap" },
    { y: 128, state: "active" },
    { y: 168, state: "gap" },
    { y: 208, state: "mastered" },
  ];

  return (
    <svg
      viewBox="0 0 340 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mx-auto h-auto w-full max-w-md text-foreground", className)}
      role="img"
      aria-label="Many knowledge sources converging into a single Delta"
    >
      <text
        x="48"
        y="22"
        textAnchor="middle"
        className="fill-muted-foreground"
        style={{
          fontSize: 11,
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          fontWeight: 500,
        }}
      >
        Sources
      </text>

      {sources.map(({ y, state }) => (
        <g key={y}>
          <NodeGlyph state={state} cx={48} cy={y} r={9} />
          <line
            x1={60}
            y1={y}
            x2={238}
            y2={128}
            className="stroke-foreground/20"
            strokeWidth="1.15"
            strokeLinecap="round"
          />
        </g>
      ))}

      <circle cx="250" cy="128" r="40" className="fill-muted/70" />
      <circle cx="250" cy="128" r="24" className="fill-foreground" />
      <text
        x="250"
        y="134"
        textAnchor="middle"
        className="fill-background"
        style={{
          fontSize: 16,
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          fontWeight: 500,
        }}
      >
        Δ
      </text>
      <text
        x="250"
        y="178"
        textAnchor="middle"
        className="fill-muted-foreground"
        style={{
          fontSize: 11,
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          fontWeight: 500,
        }}
      >
        One Delta
      </text>
    </svg>
  );
}
