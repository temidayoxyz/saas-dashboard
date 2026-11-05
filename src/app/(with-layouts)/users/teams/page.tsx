"use client";

import { Button } from "@/components/tailgrids/core/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/tailgrids/core/card";
import { Badge } from "@/components/tailgrids/core/badge";

const TEAMS = [
  { name: "Acme Corp", members: 42, plan: "Enterprise", region: "US", created: "Sep 2, 2026" },
  { name: "Globex", members: 8, plan: "Pro", region: "EU", created: "Sep 28, 2026" },
  { name: "Initech", members: 12, plan: "Team", region: "IN", created: "Oct 10, 2026" },
  { name: "Umbrella Co", members: 5, plan: "Pro", region: "US", created: "Nov 1, 2026" },
];

export default function Page() {
  return (
    <div className="mt-6 space-y-5">
      <div className="flex flex-col gap-4 px-2 lg:px-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="mb-1 text-[28px] leading-8 font-medium text-text-primary">Teams &amp; Workspaces</h1>
          <p className="text-sm leading-5 text-text-tertiary">Multi-tenant organisations and membership.</p>
        </div>
        <Button variant="primary" size="sm" className="bg-brand-500">+ New workspace</Button>
      </div>
      <div className="space-y-5 px-2 lg:px-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[{ t: "Workspaces", v: "38" }, { t: "Members", v: "1,204" }, { t: "Pending invites", v: "12" }, { t: "Avg members", v: "32" }].map((m) => (
            <Card key={m.t} className="flex flex-col p-5"><span className="text-xs font-medium uppercase tracking-wide text-text-tertiary">{m.t}</span><div className="mt-3 text-2xl font-semibold text-text-primary">{m.v}</div></Card>
          ))}
        </div>
        <Card>
          <div>
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border-primary text-text-tertiary">
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Workspace</th>
                <th className="px-5 py-2.5 text-right text-xs font-semibold">Members</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Plan</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Region</th>
                <th className="px-5 py-2.5 text-right text-xs font-semibold">Created</th>
              </tr></thead>
              <tbody>
                {TEAMS.map((t) => (
                  <tr key={t.name} className="border-b border-border-primary last:border-0">
                    <td className="px-5 py-3.5 font-medium text-text-primary">{t.name}</td>
                    <td className="px-5 py-3.5 text-right text-text-primary">{t.members}</td>
                    <td className="px-5 py-3.5"><Badge color={t.plan === "Enterprise" ? "primary" : t.plan === "Team" ? "violet" : "blue"} size="sm">{t.plan}</Badge></td>
                    <td className="px-5 py-3.5 text-text-secondary">{t.region}</td>
                    <td className="px-5 py-3.5 text-right text-text-tertiary">{t.created}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
