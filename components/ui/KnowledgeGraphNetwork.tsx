import { GRAPH_CONCEPTS } from "@/lib/graph-legend";
import { NodeGlyph } from "@/components/ui/NodeGlyph";
import { cn } from "@/lib/cn";

type Pt = { id: (typeof GRAPH_CONCEPTS)[number]["id"]; x: number; y: number };

const LAYOUT: Pt[] = [
  { id: "mastered", x: 200, y: 56 },
  { id: "relationships", x: 72, y: 150 },
  { id: "active", x: 328, y: 150 },
  { id: "gaps", x: 110, y: 268 },
  { id: "goals", x: 290, y: 268 },
];

const EDGES: Array<[Pt["id"], Pt["id"]]> = [
  ["mastered", "relationships"],
  ["mastered", "active"],
  ["relationships", "active"],
  ["relationships", "gaps"],
  ["active", "goals"],
  ["gaps", "goals"],
  ["mastered", "goals"],
  ["gaps", "active"],
];

/**
 * Static SVG knowledge graph — no ParentSize (avoids zero-width collapse).
 * Uses the shared node-state glyphs; labels on the nodes, no separate legend.
 */
export function KnowledgeGraphNetwork({ className }: { className?: string }) {
  const byId = Object.fromEntries(
    GRAPH_CONCEPTS.map((c) => [c.id, c]),
  ) as Record<(typeof GRAPH_CONCEPTS)[number]["id"], (typeof GRAPH_CONCEPTS)[number]>;

  const pos = Object.fromEntries(LAYOUT.map((p) => [p.id, p])) as Record<
    Pt["id"],
    Pt
  >;

  return (
    <svg
      viewBox="0 0 400 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full text-foreground", className)}
      role="img"
      aria-label="Knowledge graph connecting mastered concepts, active exploration, relationships, gaps, and long-term goals"
    >
      <ellipse cx="200" cy="170" rx="178" ry="148" className="fill-surface" />

      {EDGES.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={pos[a].x}
          y1={pos[a].y}
          x2={pos[b].x}
          y2={pos[b].y}
          className="stroke-foreground/25"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
      ))}

      {LAYOUT.map((p) => {
        const concept = byId[p.id];
        const below = p.y > 200;
        const r = p.id === "active" ? 16 : 13;
        return (
          <g key={p.id}>
            <NodeGlyph
              state={concept.state}
              cx={p.x}
              cy={p.y}
              r={r}
              pulse={p.id === "active"}
            />
            <text
              x={p.x}
              y={below ? p.y + 28 : p.y - 22}
              textAnchor="middle"
              className="fill-muted-foreground"
              style={{
                fontSize: 11,
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontWeight: 500,
              }}
            >
              {concept.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
