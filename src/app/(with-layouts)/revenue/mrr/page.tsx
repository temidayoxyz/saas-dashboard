"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/tailgrids/core/card";
import { ChartContainer } from "@/components/tailgrids/core/chart";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const SERIES = [
  { name: "Jan", newMrr: 3200, expansion: 1400, contraction: 500, churn: 900 },
  { name: "Feb", newMrr: 3800, expansion: 1600, contraction: 600, churn: 1100 },
  { name: "Mar", newMrr: 4200, expansion: 1800, contraction: 700, churn: 1000 },
  { name: "Apr", newMrr: 3900, expansion: 1700, contraction: 650, churn: 1050 },
  { name: "May", newMrr: 4400, expansion: 2000, contraction: 750, churn: 950 },
  { name: "Jun", newMrr: 4100, expansion: 1900, contraction: 700, churn: 1000 },
];

export default function Page() {
  return (
    <div className="mt-6 space-y-5">
      <div className="px-2 lg:px-6">
        <h1 className="mb-1 text-[28px] leading-8 font-medium text-text-primary">MRR</h1>
        <p className="text-sm leading-5 text-text-tertiary">Monthly recurring revenue decomposition and movement.</p>
      </div>
      <div className="space-y-5 px-2 lg:px-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Current MRR", v: "$42,200", c: "+4.35%" },
            { t: "New MRR", v: "$4,100", c: "+8.2%" },
            { t: "Expansion", v: "$1,900", c: "+3.4%" },
            { t: "Contraction + churn", v: "$1,700", c: "-1.1%" },
          ].map((m) => (
            <Card key={m.t} className="flex flex-col p-5">
              <span className="text-xs leading-4 font-medium uppercase tracking-wide text-text-tertiary">{m.t}</span>
              <div className="mt-3 text-2xl leading-8 font-semibold text-text-primary">{m.v}</div>
              <span className="mt-1 text-xs leading-4 text-green-600">{m.c}</span>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader className="mb-6"><CardTitle className="leading-6 font-semibold text-text-primary">MRR Movement</CardTitle></CardHeader>
          <CardContent className="relative h-80 w-full p-0">
            <ChartContainer className="h-full w-full" height="100%" width="100%">
              <AreaChart data={SERIES} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <defs>
                  <linearGradient id="new" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="var(--color-brand-500)" stopOpacity={0.3} /><stop offset="95%" stopColor="var(--color-brand-500)" stopOpacity={0} /></linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "var(--color-text-tertiary)", fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--color-text-tertiary)", fontSize: 12 }} />
                <Tooltip cursor={{ stroke: "#A1A1AA", strokeWidth: 1, strokeDasharray: "4 4" }} />
                <Area type="monotone" dataKey="newMrr" name="New" stroke="var(--color-brand-500)" strokeWidth={2} fill="url(#new)" dot={false} />
                <Area type="monotone" dataKey="expansion" name="Expansion" stroke="var(--color-text-tertiary)" strokeWidth={2} fill="transparent" dot={false} />
                <Area type="monotone" dataKey="contraction" name="Contraction" stroke="#A1A1AA" strokeWidth={2} fill="transparent" dot={false} />
                <Area type="monotone" dataKey="churn" name="Churn" stroke="#dc2626" strokeWidth={2} fill="transparent" dot={false} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
