"use client";

import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/cards";

type DashboardDTO = {
  serversOnline: number;
  serversTotal: number;
  playersOnline: number;
  reportsOpen: number;
  bansToday: number;
  mutesToday: number;
  recentAlerts: { id: string; title: string; severity: "low" | "medium" | "high"; ts: number }[];
};

async function fetchDashboard(): Promise<DashboardDTO> {
  const r = await fetch("/api/dashboard", { cache: "no-store" });
  if (!r.ok) throw new Error("Failed to load");
  return r.json();
}

export function Dashboard() {
  const q = useQuery({ queryKey: ["dashboard"], queryFn: fetchDashboard, refetchInterval: 5000 });

  if (q.isLoading) return <div className="text-muted">Loading...</div>;
  if (q.isError) return <div className="text-danger">Error: {(q.error as Error).message}</div>;

  const d = q.data!;
  return (
    <div className="space-y-6">
      <div className="text-xl font-semibold">Dashboard</div>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <div className="text-sm text-muted">Servers</div>
          <div className="text-2xl font-semibold">
            {d.serversOnline}/{d.serversTotal}
          </div>
        </Card>
        <Card>
          <div className="text-sm text-muted">Players online</div>
          <div className="text-2xl font-semibold">{d.playersOnline}</div>
        </Card>
        <Card>
          <div className="text-sm text-muted">Open reports</div>
          <div className="text-2xl font-semibold">{d.reportsOpen}</div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <div className="text-sm text-muted">Today</div>
          <div className="mt-2 flex gap-6">
            <div>
              <div className="text-xs text-muted">Bans</div>
              <div className="text-xl font-semibold">{d.bansToday}</div>
            </div>
            <div>
              <div className="text-xs text-muted">Mutes</div>
              <div className="text-xl font-semibold">{d.mutesToday}</div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="text-sm text-muted">Recent alerts</div>
          <div className="mt-2 space-y-2">
            {d.recentAlerts.length === 0 ? (
              <div className="text-sm text-muted">No alerts</div>
            ) : (
              d.recentAlerts.map((a) => (
                <div key={a.id} className="flex items-center justify-between rounded-md border border-border/70 px-3 py-2">
                  <div>
                    <div className="text-sm">{a.title}</div>
                    <div className="text-xs text-muted">{new Date(a.ts).toLocaleString("ru-RU")}</div>
                  </div>
                  <div className="text-xs text-muted">{a.severity}</div>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
