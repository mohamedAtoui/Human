"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const AnatomyScene = dynamic(
  () => import("./AnatomyScene").then((m) => m.AnatomyScene),
  {
    ssr: false,
    loading: () => <ViewerSkeleton />,
  }
);

function ViewerSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-3 text-muted-foreground">
        <span className="h-3 w-3 animate-pulse rounded-full bg-primary" />
        <span className="text-sm">Loading…</span>
      </div>
    </div>
  );
}

export function AnatomyViewer() {
  const t = useTranslations("atlas");
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <AnatomyScene />
      <div className="pointer-events-none absolute inset-x-0 top-3 flex justify-center">
        <span className="pointer-events-none rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-600 shadow-sm backdrop-blur md:text-xs">
          <span className="hidden md:inline">{t("clickHint")}</span>
          <span className="md:hidden">{t("tapHint")}</span>
        </span>
      </div>
    </div>
  );
}
