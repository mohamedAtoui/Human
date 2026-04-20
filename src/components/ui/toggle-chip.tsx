"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ToggleChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
  accent?: string;
}

export const ToggleChip = React.forwardRef<HTMLButtonElement, ToggleChipProps>(
  ({ className, active, accent, children, style, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      aria-pressed={active}
      className={cn(
        "inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-transparent bg-primary text-primary-foreground shadow-sm"
          : "border-border bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        className
      )}
      style={active && accent ? { backgroundColor: accent, color: "#fff", borderColor: accent } : style}
      {...props}
    >
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: active ? "#fff" : accent ?? "currentColor" }}
      />
      {children}
    </button>
  )
);
ToggleChip.displayName = "ToggleChip";
