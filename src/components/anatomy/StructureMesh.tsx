"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { useAnatomyStore } from "@/store/anatomyStore";
import { SYSTEM_COLORS } from "@/data/systems";
import type { AnatomicalStructure } from "@/data/structures";

interface Props {
  structure: AnatomicalStructure;
  layerAlpha: number;
}

export function StructureMesh({ structure, layerAlpha }: Props) {
  const selectedId = useAnatomyStore((s) => s.selectedId);
  const hoveredId = useAnatomyStore((s) => s.hoveredId);
  const visibleSystems = useAnatomyStore((s) => s.visibleSystems);
  const setSelected = useAnatomyStore((s) => s.setSelected);
  const setHovered = useAnatomyStore((s) => s.setHovered);

  const geom = useMemo(() => {
    switch (structure.shape) {
      case "sphere":
        return new THREE.SphereGeometry(0.5, 32, 24);
      case "ellipsoid":
        return new THREE.SphereGeometry(0.5, 32, 24);
      case "cylinder":
        return new THREE.CylinderGeometry(0.5, 0.5, 1, 24);
      case "capsule":
        return new THREE.CapsuleGeometry(0.5, 0.8, 8, 16);
      case "cone":
        return new THREE.ConeGeometry(0.5, 1, 24);
      case "box":
      default:
        return new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);
    }
  }, [structure.shape]);

  const baseColor = SYSTEM_COLORS[structure.system];
  const isSelected = selectedId === structure.id;
  const isHovered = hoveredId === structure.id;
  const systemVisible = visibleSystems[structure.system];

  const isSkin = structure.system === "integumentary";
  const isMuscle = structure.system === "muscular";

  let alpha = 1;
  if (isSkin) alpha = Math.max(0, 1 - layerAlpha) * 0.55;
  else if (isMuscle) alpha = Math.max(0, 1 - Math.max(0, layerAlpha - 1)) * 0.95;

  if (!systemVisible) return null;
  if (alpha <= 0.01) return null;

  return (
    <mesh
      position={structure.position}
      scale={structure.scale}
      geometry={geom}
      onPointerDown={(e) => {
        e.stopPropagation();
        setSelected(structure.id);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(structure.id);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(null);
        document.body.style.cursor = "";
      }}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial
        color={baseColor}
        emissive={isSelected ? "#ff3366" : isHovered ? "#ffaa00" : "#000000"}
        emissiveIntensity={isSelected ? 0.6 : isHovered ? 0.3 : 0}
        roughness={isSkin ? 0.85 : 0.55}
        metalness={structure.system === "skeletal" ? 0.05 : 0.0}
        transparent={alpha < 1}
        opacity={alpha}
        depthWrite={alpha > 0.9}
      />
    </mesh>
  );
}
