/**
 * Canonical node-state visual language for every graph on the site.
 * solid filled = mastered/known
 * ringed outline = active/in progress
 * dashed = gap/not yet explored
 */

export type NodeState = "mastered" | "active" | "gap";

export const NODE_LEGEND = [
  {
    state: "mastered" as const,
    label: "Mastered",
    caption: "Known — solid fill",
  },
  {
    state: "active" as const,
    label: "Active",
    caption: "In progress — ringed",
  },
  {
    state: "gap" as const,
    label: "Gap",
    caption: "Not yet explored — dashed",
  },
] as const;

/** Map product concepts onto the three visual states */
export const GRAPH_CONCEPTS = [
  {
    id: "mastered",
    label: "Mastered concepts",
    state: "mastered" as const,
  },
  {
    id: "active",
    label: "Active exploration",
    state: "active" as const,
  },
  {
    id: "relationships",
    label: "Relationships",
    state: "active" as const,
  },
  {
    id: "gaps",
    label: "Gaps",
    state: "gap" as const,
  },
  {
    id: "goals",
    label: "Long-term goals",
    state: "gap" as const,
  },
] as const;
