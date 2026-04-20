"use client";

import { STRUCTURES } from "@/data/structures";
import { useAnatomyStore } from "@/store/anatomyStore";
import { StructureMesh } from "./StructureMesh";

export function HumanModel() {
  const layerPeel = useAnatomyStore((s) => s.layerPeel);
  // Render opaque structures first (by sorting integumentary last), for correct transparency blending.
  const sorted = [...STRUCTURES].sort((a, b) => {
    const order: Record<string, number> = { integumentary: 2, muscular: 1 };
    return (order[a.system] ?? 0) - (order[b.system] ?? 0);
  });
  return (
    <group position={[0, -0.5, 0]}>
      {sorted.map((s) => (
        <StructureMesh key={s.id} structure={s} layerAlpha={layerPeel} />
      ))}
    </group>
  );
}
