"use client";

import { Badge } from "@/components/tailgrids/core/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/tailgrids/core/card";

const COHORTS = [
  { cohort: "Jul 2026", size: 240, retained: 88, churned: 12 },
  { cohort: "Aug 2026", size: 280, retained: 84, churned: 16 },
  { cohort: "Sep 2026", size: 310, retained: 79, churned: 21 },
  { cohort: "Oct 2026", size: 340, retained: 86, churned: 14 },
  { cohort: "Nov 2026", size: 360, retained: 91, churned: 9 },
];

export default function Page() {
  return (
    <div className="mt-6 space-y-5">
      <div className="px-2 lg:px-6">
        <h1 className="mb-1 text-[28px] leading-8 font-medium text-text-primary">Churn &amp; Retention</h1>
        <p className="text-sm leading-5 text-text-tertiary">Cohort retention, churn reasons and at-risk accounts.</p>
      </div>
      <div className="space-y-5 px-2 lg:px-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[{ t: "Churn Rate", v: "1.8%", c: "-0.4%" }, { t: "NRR", v: "108.4%", c: "+2.1%" }, { t: "Gross Retention", v: "94.2%", c: "+0.3%" }, { t: "At risk accounts", v: "14", c: "+2" }].map((m) => (
            <Card key={m.t} className="flex flex-col p-5">
              <span className="text-xs font-medium uppercase tracking-wide text-text-tertiary">{m.t}</span>
              <div className="mt-3 text-2xl font-semibold text-text-primary">{m.v}</div>
              <span className="mt-1 text-xs text-green-600">{m.c}</span>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader className="mb-6"><CardTitle className="leading-6 font-semibold text-text-primary">Cohort Retention</CardTitle></CardHeader>
          <div>
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border-primary text-text-tertiary"><th className="px-5 py-2.5 text-left text-xs font-semibold">Cohort</th><th className="px-5 py-2.5 text-right text-xs font-semibold">Size</th><th className="px-5 py-2.5 text-right text-xs font-semibold">Retained</th><th className="px-5 py-2.5 text-right text-xs font-semibold">Churned</th></tr></thead>
              <tbody>
                {COHORTS.map((c) => (
                  <tr key={c.cohort} className="border-b border-border-primary last:border-0">
                    <td className="px-5 py-3.5 font-medium text-text-primary">{c.cohort}</td>
                    <td className="px-5 py-3.5 text-right text-text-primary">{c.size}</td>
                    <td className="px-5 py-3.5 text-right"><Badge color="success" size="sm">{c.retained}%</Badge></td>
                    <td className="px-5 py-3.5 text-right"><Badge color="error" size="sm">{c.churned}%</Badge></td>
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
