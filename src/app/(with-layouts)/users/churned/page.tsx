"use client";

import { Badge } from "@/components/tailgrids/core/badge";
import { Card, CardHeader, CardTitle } from "@/components/tailgrids/core/card";

const CHURNED = [
  { name: "Lee Tanaka", email: "lee@foo.dev", plan: "Free", reason: "Price", lost: "$0", churnedOn: "Oct 23, 2026" },
  { name: "Sofia Rinaldi", email: "sofia@contoso.com", plan: "Pro", reason: "Missing feature", lost: "$49", churnedOn: "Oct 19, 2026" },
  { name: "Marco Velez", email: "marco@acme.co", plan: "Team", reason: "Switched tool", lost: "$149", churnedOn: "Oct 12, 2026" },
  { name: "Yuki Sato", email: "yuki@globex.io", plan: "Pro", reason: "Support", lost: "$49", churnedOn: "Oct 5, 2026" },
];

export default function Page() {
  return (
    <div className="mt-6 space-y-5">
      <div className="px-2 lg:px-6">
        <h1 className="mb-1 text-[28px] leading-8 font-medium text-text-primary">Churned</h1>
        <p className="text-sm leading-5 text-text-tertiary">Lost accounts, reasons and recovered MRR opportunity.</p>
      </div>
      <div className="space-y-5 px-2 lg:px-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[{ t: "Churned (90d)", v: "287", c: "+9.1%" }, { t: "Lost MRR", v: "$1,042", c: "+4.0%" }, { t: "Top reason", v: "Price", c: "" }, { t: "Win-back rate", v: "12%", c: "+2%" }].map((m) => (
            <Card key={m.t} className="flex flex-col p-5"><span className="text-xs font-medium uppercase tracking-wide text-text-tertiary">{m.t}</span><div className="mt-3 text-2xl font-semibold text-text-primary">{m.v}</div><span className="mt-1 text-xs text-text-tertiary">{m.c}</span></Card>
          ))}
        </div>
        <Card>
          <div>
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border-primary text-text-tertiary">
                <th className="px-5 py-2.5 text-left text-xs font-semibold">User</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Plan</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Reason</th>
                <th className="px-5 py-2.5 text-right text-xs font-semibold">Lost MRR</th>
                <th className="px-5 py-2.5 text-right text-xs font-semibold">Churned on</th>
              </tr></thead>
              <tbody>
                {CHURNED.map((c) => (
                  <tr key={c.email} className="border-b border-border-primary last:border-0">
                    <td className="px-5 py-3.5"><div className="flex flex-col"><span className="font-medium text-text-primary">{c.name}</span><span className="text-xs text-text-tertiary">{c.email}</span></div></td>
                    <td className="px-5 py-3.5"><Badge color="gray" size="sm">{c.plan}</Badge></td>
                    <td className="px-5 py-3.5 text-text-secondary">{c.reason}</td>
                    <td className="px-5 py-3.5 text-right font-medium text-text-primary">{c.lost}</td>
                    <td className="px-5 py-3.5 text-right text-text-tertiary">{c.churnedOn}</td>
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
