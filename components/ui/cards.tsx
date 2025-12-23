import { cn } from "@/lib/cn";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("rounded-xl border border-border bg-panel/50 p-4", className)}>{children}</div>;
}
