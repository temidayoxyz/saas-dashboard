"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/tailgrids/core/card";
import { ChartContainer } from "@/components/tailgrids/core/chart";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const SERIES = [
  { name: "Mon", active: 9200, dau: 4100 },
  { name: "Tue", active: 9740, dau: 4380 },
  { name: "Wed", active: 9980, dau: 4420 },
  { name: "Thu", active: 10120, dau: 4580 },
  { name: "Fri", active: 10430, dau: 4700 },
  { name: "Sat", active: 9880, dau: 4220 },
  { name: "Sun", active: 10180, dau: 4310 },
];

export default function Page() {
  return (
    <div className="mt-6 space-y-5">
      <div className="px-2 lg:px-6">
        <h1 className="mb-1 text-[28px] leading-8 font-medium text-text-primary">Active Users</h1>
        <p className="text-sm leading-5 text-text-tertiary">Engaged accounts and daily active users.</p>
      </div>
      <div className="space-y-5 px-2 lg:px-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[{ t: "Active (30d)", v: "14,310" }, { t: "DAU", v: "4,580" }, { t: "WAU", v: "10,120" }, { t: "MAU", v: "18,920" }].map((m) => (
            <Card key={m.t} className="flex flex-col p-5"><span className="text-xs font-medium uppercase tracking-wide text-text-tertiary">{m.t}</span><div className="mt-3 text-2xl font-semibold text-text-primary">{m.v}</div></Card>
          ))}
        </div>
        <Card>
          <CardHeader className="mb-6"><CardTitle className="leading-6 font-semibold text-text-primary">Active vs. Daily Users</CardTitle></CardHeader>
          <CardContent className="relative h-72 w-full p-0">
            <ChartContainer className="h-full w-full" height="100%" width="100%">
              <AreaChart data={SERIES} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <defs>
                  <linearGradient id="active" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="var(--color-brand-500)" stopOpacity={0.25} /><stop offset="95%" stopColor="var(--color-brand-500)" stopOpacity={0} /></linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "var(--color-text-tertiary)", fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--color-text-tertiary)", fontSize: 12 }} />
                <Tooltip cursor={{ stroke: "#A1A1AA", strokeWidth: 1, strokeDasharray: "4 4" }} />
                <Area type="monotone" dataKey="active" name="Active" stroke="var(--color-brand-500)" strokeWidth={2} fill="url(#active)" dot={false} />
                <Area type="monotone" dataKey="dau" name="DAU" stroke="var(--color-text-tertiary)" strokeWidth={2} fill="transparent" dot={false} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
