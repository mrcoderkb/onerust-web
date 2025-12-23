"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const nav = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/servers", label: "Servers" },
  { href: "/players", label: "Players" },
  { href: "/reports", label: "Reports" },
  { href: "/mutes", label: "Mutes" },
  { href: "/bans", label: "Bans" },
  { href: "/actions", label: "Actions" },
  { href: "/audit", label: "Audit log" },
  { href: "/settings", label: "Settings" }
];

export function Sidebar() {
  const path = usePathname();

  return (
    <aside className="w-[280px] border-r border-border bg-panel/40 backdrop-blur">
      <div className="px-5 py-5 border-b border-border">
        <div className="text-lg font-semibold">OneRust.io</div>
        <div className="text-sm text-muted">Control Panel</div>
      </div>

      <nav className="px-3 py-3 space-y-1">
        {nav.map((i) => {
          const active = path === i.href || (i.href !== "/dashboard" && path?.startsWith(i.href));
          return (
            <Link
              key={i.href}
              href={i.href}
              className={clsx(
                "block px-3 py-2 rounded-md text-sm transition",
                active ? "bg-border/60 text-text" : "text-muted hover:bg-border/30 hover:text-text"
              )}
            >
              {i.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-5 py-4 border-t border-border text-xs text-muted">
        MVP build • UI shell + mock dashboard
      </div>
    </aside>
  );
}
