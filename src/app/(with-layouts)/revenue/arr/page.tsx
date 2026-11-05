"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/tailgrids/core/card";
import { ChartContainer } from "@/components/tailgrids/core/chart";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const DATA = [
  { name: "Free", arr: 0 },
  { name: "Pro", arr: 242256 },
  { name: "Team", arr: 155556 },
  { name: "Enterprise", arr: 108588 },
];

export default function Page() {
  return (
    <div className="mt-6 space-y-5">
      <div className="px-2 lg:px-6">
        <h1 className="mb-1 text-[28px] leading-8 font-medium text-text-primary">ARR</h1>
        <p className="text-sm leading-5 text-text-tertiary">Annual recurring revenue by plan.</p>
      </div>
      <div className="space-y-5 px-2 lg:px-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "ARR", v: "$506,400", c: "+4.35%" },
            { t: "Pro ARR", v: "$242,256", c: "+6.2%" },
            { t: "Team ARR", v: "$155,556", c: "+3.1%" },
            { t: "Enterprise ARR", v: "$108,588", c: "+1.4%" },
          ].map((m) => (
            <Card key={m.t} className="flex flex-col p-5">
              <span className="text-xs leading-4 font-medium uppercase tracking-wide text-text-tertiary">{m.t}</span>
              <div className="mt-3 text-2xl leading-8 font-semibold text-text-primary">{m.v}</div>
              <span className="mt-1 text-xs leading-4 text-green-600">{m.c}</span>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader className="mb-6"><CardTitle className="leading-6 font-semibold text-text-primary">ARR by Plan</CardTitle></CardHeader>
          <CardContent className="relative h-72 w-full p-0">
            <ChartContainer className="h-full w-full" height="100%" width="100%">
              <BarChart data={DATA} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "var(--color-text-tertiary)", fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--color-text-tertiary)", fontSize: 12 }} />
                <Tooltip cursor={{ fill: "var(--color-background-gray-secondary_alt)" }} />
                <Bar dataKey="arr" name="ARR" radius={[6, 6, 0, 0]} fill="var(--color-brand-500)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
