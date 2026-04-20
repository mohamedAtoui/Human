"use client";

import { useLocale, useTranslations } from "next-intl";
import { X } from "lucide-react";
import { useAnatomyStore } from "@/store/anatomyStore";
import { STRUCTURES_BY_ID } from "@/data/structures";
import { SYSTEM_COLORS } from "@/data/systems";
import { Button } from "@/components/ui/button";
import type { AppLocale } from "@/i18n/routing";

export function OrganInfoPanel() {
  const selectedId = useAnatomyStore((s) => s.selectedId);
  const setSelected = useAnatomyStore((s) => s.setSelected);
  const locale = useLocale() as AppLocale;
  const t = useTranslations("atlas");
  const tSystems = useTranslations("systems");
  const structure = selectedId ? STRUCTURES_BY_ID[selectedId] : null;

  if (!structure) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-card/40 p-6 text-center">
        <div className="text-base font-semibold">{t("noSelection")}</div>
        <p className="text-sm text-muted-foreground">{t("noSelectionBody")}</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm animate-slide-up">
      <div
        className="flex items-start justify-between gap-2 border-b p-4"
        style={{ background: `linear-gradient(135deg, ${SYSTEM_COLORS[structure.system]}22, transparent)` }}
      >
        <div>
          <div className="flex items-center gap-2">
            <span
              className="inline-flex h-2 w-2 rounded-full"
              style={{ backgroundColor: SYSTEM_COLORS[structure.system] }}
            />
            <span className="text-[11px] uppercase tracking-wide text-muted-foreground">
              {tSystems(structure.system)}
            </span>
          </div>
          <h2 className="mt-1 text-xl font-semibold">{structure.name[locale]}</h2>
        </div>
        <Button variant="ghost" size="icon" aria-label={t("close")} onClick={() => setSelected(null)}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 text-sm leading-relaxed">
        <section className="mb-4">
          <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {t("description")}
          </h3>
          <p>{structure.description[locale]}</p>
        </section>
        <section>
          <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {t("function")}
          </h3>
          <p>{structure.function[locale]}</p>
        </section>
      </div>
    </div>
  );
}
