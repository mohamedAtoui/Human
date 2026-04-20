"use client";

import { useTranslations } from "next-intl";
import { useAnatomyStore } from "@/store/anatomyStore";
import { Slider } from "@/components/ui/slider";

export function LayerPeel() {
  const t = useTranslations("atlas");
  const layerPeel = useAnatomyStore((s) => s.layerPeel);
  const setLayerPeel = useAnatomyStore((s) => s.setLayerPeel);

  return (
    <div className="flex w-full flex-col gap-2">
      <h3 className="text-sm font-semibold">{t("layers")}</h3>
      <Slider
        value={Math.round(layerPeel * 50)}
        onValueChange={(v) => setLayerPeel(v / 50)}
        min={0}
        max={100}
        step={1}
      />
      <div className="flex justify-between text-[11px] text-muted-foreground">
        <span>{t("opacitySkin")}</span>
        <span>{t("opacityMuscle")}</span>
        <span>{t("opacitySkeleton")}</span>
      </div>
    </div>
  );
}
