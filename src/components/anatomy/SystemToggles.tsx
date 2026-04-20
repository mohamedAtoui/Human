"use client";

import { useTranslations } from "next-intl";
import { useAnatomyStore } from "@/store/anatomyStore";
import { SYSTEM_IDS, SYSTEM_COLORS } from "@/data/systems";
import { ToggleChip } from "@/components/ui/toggle-chip";
import { Button } from "@/components/ui/button";

export function SystemToggles() {
  const t = useTranslations("systems");
  const tAtlas = useTranslations("atlas");
  const visibleSystems = useAnatomyStore((s) => s.visibleSystems);
  const toggleSystem = useAnatomyStore((s) => s.toggleSystem);
  const setAllSystems = useAnatomyStore((s) => s.setAllSystems);

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">{tAtlas("systems")}</h3>
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" onClick={() => setAllSystems(true)} className="h-7 px-2 text-xs">
            {tAtlas("showAll")}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setAllSystems(false)} className="h-7 px-2 text-xs">
            {tAtlas("hideAll")}
          </Button>
        </div>
      </div>
      <div className="scrollbar-thin flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
        {SYSTEM_IDS.map((id) => (
          <ToggleChip
            key={id}
            active={visibleSystems[id]}
            accent={SYSTEM_COLORS[id]}
            onClick={() => toggleSystem(id)}
          >
            {t(id)}
          </ToggleChip>
        ))}
      </div>
    </div>
  );
}
