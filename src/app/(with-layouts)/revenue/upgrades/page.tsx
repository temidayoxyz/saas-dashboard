"use client";

import { Badge } from "@/components/tailgrids/core/badge";
import { Card, CardHeader, CardTitle } from "@/components/tailgrids/core/card";

const EVENTS = [
  { when: "Nov 4", customer: "Acme Corp", from: "Pro", to: "Enterprise", mrrDelta: "+$749", by: "admin@acme.co" },
  { when: "Nov 3", customer: "Globex", from: "Free", to: "Pro", mrrDelta: "+$49", by: "self-serve" },
  { when: "Nov 2", customer: "Initech", from: "Team", to: "Pro", mrrDelta: "-$140", by: "billing@initech.com" },
  { when: "Nov 1", customer: "Umbrella Co", from: "Pro", to: "Team", mrrDelta: "+$100", by: "self-serve" },
  { when: "Oct 31", customer: "Contoso", from: "Pro", to: "Cancelled", mrrDelta: "-$49", by: "self-serve" },
];

export default function Page() {
  return (
    <div className="mt-6 space-y-5">
      <div className="px-2 lg:px-6">
        <h1 className="mb-1 text-[28px] leading-8 font-medium text-text-primary">Upgrades &amp; Downgrades</h1>
        <p className="text-sm leading-5 text-text-tertiary">Plan change velocity and revenue impact.</p>
      </div>
      <div className="space-y-5 px-2 lg:px-5">
        <Card>
          <div>
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border-primary text-text-tertiary">
                <th className="px-5 py-2.5 text-left text-xs font-semibold">When</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Customer</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">From</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">To</th>
                <th className="px-5 py-2.5 text-right text-xs font-semibold">MRR delta</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">By</th>
              </tr></thead>
              <tbody>
                {EVENTS.map((e) => (
                  <tr key={e.when + e.customer} className="border-b border-border-primary last:border-0">
                    <td className="px-5 py-3.5 text-text-tertiary">{e.when}</td>
                    <td className="px-5 py-3.5 font-medium text-text-primary">{e.customer}</td>
                    <td className="px-5 py-3.5"><Badge color="gray" size="sm">{e.from}</Badge></td>
                    <td className="px-5 py-3.5"><Badge color={e.to === "Cancelled" ? "error" : "success"} size="sm">{e.to}</Badge></td>
                    <td className={`px-5 py-3.5 text-right font-medium ${e.mrrDelta.startsWith("+") ? "text-green-600" : "text-red-600"}`}>{e.mrrDelta}</td>
                    <td className="px-5 py-3.5 text-text-tertiary">{e.by}</td>
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
