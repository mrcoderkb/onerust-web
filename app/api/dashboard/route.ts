import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const now = Date.now();
  return NextResponse.json({
    serversOnline: 1,
    serversTotal: 1,
    playersOnline: 42,
    reportsOpen: 3,
    bansToday: 1,
    mutesToday: 2,
    recentAlerts: [
      { id: "a1", title: "VPN suspected: 7656119...", severity: "medium", ts: now - 2 * 60_000 },
      { id: "a2", title: "Cross-project ban match: 7656119...", severity: "high", ts: now - 15 * 60_000 }
    ]
  });
}
