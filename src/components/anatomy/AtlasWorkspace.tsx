"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { AnatomyViewer } from "./AnatomyViewer";
import { SystemToggles } from "./SystemToggles";
import { LayerPeel } from "./LayerPeel";
import { OrganInfoPanel } from "./OrganInfoPanel";
import { useAnatomyStore } from "@/store/anatomyStore";
import { cn } from "@/lib/utils";

export function AtlasWorkspace() {
  const selectedId = useAnatomyStore((s) => s.selectedId);
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);

  useEffect(() => {
    if (selectedId) setMobileSheetOpen(true);
  }, [selectedId]);

  return (
    <div className="relative flex h-[calc(100dvh-64px)] w-full flex-col md:flex-row">
      {/* 3D canvas */}
      <div className="relative min-h-0 flex-1">
        <AnatomyViewer />
      </div>

      {/* Desktop side panel */}
      <aside className="hidden w-[360px] shrink-0 border-l bg-background md:flex md:flex-col">
        <div className="flex flex-col gap-5 border-b p-4">
          <SystemToggles />
          <LayerPeel />
        </div>
        <div className="flex-1 overflow-hidden p-4">
          <OrganInfoPanel />
        </div>
      </aside>

      {/* Mobile bottom sheet */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 z-10 transition-transform md:hidden",
          mobileSheetOpen ? "translate-y-0" : "translate-y-[calc(100%-48px)]"
        )}
      >
        <div className="pointer-events-auto rounded-t-2xl border-t bg-background/95 shadow-2xl backdrop-blur">
          <button
            type="button"
            aria-label="Toggle panel"
            onClick={() => setMobileSheetOpen((v) => !v)}
            className="flex h-12 w-full items-center justify-center"
          >
            <span className="h-1 w-10 rounded-full bg-muted-foreground/40" />
            <ChevronUp
              className={cn(
                "absolute right-4 h-4 w-4 text-muted-foreground transition-transform",
                mobileSheetOpen && "rotate-180"
              )}
            />
          </button>
          <div className="max-h-[65dvh] space-y-5 overflow-y-auto px-4 pb-6">
            <SystemToggles />
            <LayerPeel />
            <div className="min-h-[180px]">
              <OrganInfoPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
