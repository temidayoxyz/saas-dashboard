"use client";

import { Badge } from "@/components/tailgrids/core/badge";
import { Card, CardHeader, CardTitle } from "@/components/tailgrids/core/card";
import { Button } from "@/components/tailgrids/core/button";

const TRIALS = [
  { name: "Priya Natarajan", email: "priya@initech.com", plan: "Team", daysLeft: 3, usage: "High", started: "Nov 1" },
  { name: "Lee Tanaka", email: "lee@foo.dev", plan: "Pro", daysLeft: 7, usage: "Medium", started: "Oct 29" },
  { name: "Chris Oduya", email: "chris@contoso.com", plan: "Pro", daysLeft: 11, usage: "Low", started: "Oct 25" },
  { name: "Marta Silva", email: "marta@globex.io", plan: "Team", daysLeft: 14, usage: "High", started: "Oct 22" },
];

export default function Page() {
  return (
    <div className="mt-6 space-y-5">
      <div className="px-2 lg:px-6">
        <h1 className="mb-1 text-[28px] leading-8 font-medium text-text-primary">Trials</h1>
        <p className="text-sm leading-5 text-text-tertiary">Active trials, conversion countdown and usage.</p>
      </div>
      <div className="space-y-5 px-2 lg:px-5">
        <Card>
          <div>
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border-primary text-text-tertiary">
                <th className="px-5 py-2.5 text-left text-xs font-semibold">User</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Plan</th>
                <th className="px-5 py-2.5 text-right text-xs font-semibold">Days left</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Usage</th>
                <th className="px-5 py-2.5 text-right text-xs font-semibold">Started</th>
                <th className="px-5 py-2.5 text-right"></th>
              </tr></thead>
              <tbody>
                {TRIALS.map((t) => (
                  <tr key={t.email} className="border-b border-border-primary last:border-0">
                    <td className="px-5 py-3.5">
                      <div className="flex flex-col"><span className="font-medium text-text-primary">{t.name}</span><span className="text-xs text-text-tertiary">{t.email}</span></div>
                    </td>
                    <td className="px-5 py-3.5"><Badge color={t.plan === "Team" ? "violet" : "blue"} size="sm">{t.plan}</Badge></td>
                    <td className="px-5 py-3.5 text-right font-medium text-text-primary">{t.daysLeft}d</td>
                    <td className="px-5 py-3.5"><Badge color={t.usage === "High" ? "success" : t.usage === "Medium" ? "warning" : "gray"} size="sm">{t.usage}</Badge></td>
                    <td className="px-5 py-3.5 text-right text-text-tertiary">{t.started}</td>
                    <td className="px-5 py-3.5 text-right"><Button size="sm" variant="primary" className="bg-brand-500">Convert</Button></td>
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
