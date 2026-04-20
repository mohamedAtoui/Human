"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Html } from "@react-three/drei";
import { Suspense } from "react";
import { HumanModel } from "./HumanModel";
import { useAnatomyStore } from "@/store/anatomyStore";
import { STRUCTURES_BY_ID } from "@/data/structures";
import { useLocale, useTranslations } from "next-intl";
import type { AppLocale } from "@/i18n/routing";

function HoveredLabel() {
  const hoveredId = useAnatomyStore((s) => s.hoveredId);
  const locale = useLocale() as AppLocale;
  if (!hoveredId) return null;
  const s = STRUCTURES_BY_ID[hoveredId];
  if (!s) return null;
  return (
    <Html
      position={[s.position[0], s.position[1] + (s.scale[1] / 2) + 0.15, s.position[2]]}
      center
      wrapperClass="pointer-events-none"
      style={{ pointerEvents: "none" }}
    >
      <div className="pointer-events-none rounded-md bg-slate-900/90 px-2.5 py-1 text-xs font-medium text-white shadow-lg backdrop-blur">
        {s.name[locale]}
      </div>
    </Html>
  );
}

function Loader() {
  const t = useTranslations("atlas");
  return (
    <Html center>
      <div className="flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 text-sm text-white shadow-xl backdrop-blur">
        <span className="h-3 w-3 animate-pulse rounded-full bg-primary" />
        {t("loading")}
      </div>
    </Html>
  );
}

export function AnatomyScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.2, 5.5], fov: 35, near: 0.1, far: 100 }}
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      className="touch-none"
    >
      <color attach="background" args={["#f5f7fa"]} />
      <fog attach="fog" args={["#f5f7fa", 8, 18]} />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-4, 3, -2]} intensity={0.35} />

      <Suspense fallback={<Loader />}>
        <HumanModel />
        <HoveredLabel />
        <Environment preset="city" />
      </Suspense>

      <ContactShadows
        position={[0, -2.3, 0]}
        opacity={0.45}
        scale={10}
        blur={2.5}
        far={6}
      />

      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.08}
        minDistance={2}
        maxDistance={10}
        target={[0, 0.6, 0]}
      />
    </Canvas>
  );
}
