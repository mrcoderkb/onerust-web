"use client";

import { useMemo } from "react";
import { useNow } from "@/lib/use-now";

export function Topbar() {
  const now = useNow(1000);
  const text = useMemo(() => now.toLocaleString("ru-RU"), [now]);

  return (
    <header className="px-6 py-4 border-b border-border bg-panel/30 backdrop-blur flex items-center justify-between">
      <div className="text-sm text-muted">Project: OneRust</div>
      <div className="text-sm text-muted">{text}</div>
    </header>
  );
}
