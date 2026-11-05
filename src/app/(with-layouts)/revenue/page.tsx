"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/tailgrids/core/card";
import { ChartContainer } from "@/components/tailgrids/core/chart";
import { Button } from "@/components/tailgrids/core/button";
import { Badge } from "@/components/tailgrids/core/badge";
import { cn } from "@/utils/cn";
import { ArrowDownIcon, ArrowUpIcon, MenuDotsIcon } from "@/utils/icon";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const METRICS = [
  { id: "mrr", title: "MRR", value: "$42,200", change: "+4.35%", isPositive: true },
  { id: "arr", title: "ARR", value: "$506,400", change: "+4.35%", isPositive: true },
  { id: "churn", title: "Churn Rate", value: "1.8%", change: "-0.4%", isPositive: true },
  { id: "ltv", title: "Avg. LTV", value: "$1,240", change: "+2.1%", isPositive: true },
];

const MRR_SERIES = [
  { name: "Jan", mrr: 32000, newRevenue: 3200 },
  { name: "Feb", mrr: 35200, newRevenue: 3800 },
  { name: "Mar", mrr: 38400, newRevenue: 4200 },
  { name: "Apr", mrr: 40100, newRevenue: 3900 },
  { name: "May", mrr: 41300, newRevenue: 4400 },
  { name: "Jun", mrr: 42200, newRevenue: 4100 },
];

const PLAN_MIX = [
  { name: "Free", value: 18, color: "#e4e4e7" },
  { name: "Pro", value: 54, color: "var(--color-brand-500)" },
  { name: "Team", value: 21, color: "var(--color-text-tertiary)" },
  { name: "Enterprise", value: 7, color: "#a1a1aa" },
];

const INVOICES = [
  { id: "INV-2041", customer: "Acme Corp", amount: "$1,200.00", status: "Paid", date: "Nov 4, 2026" },
  { id: "INV-2040", customer: "Globex", amount: "$249.00", status: "Paid", date: "Nov 3, 2026" },
  { id: "INV-2039", customer: "Initech", amount: "$2,499.00", status: "Failed", date: "Nov 2, 2026" },
  { id: "INV-2038", customer: "Umbrella Co", amount: "$499.00", status: "Paid", date: "Nov 1, 2026" },
];

function MetricCard({ title, value, change, isPositive }: { title: string; value: string; change: string; isPositive: boolean }) {
  return (
    <Card className="flex flex-col p-5">
      <span className="text-xs leading-4 font-medium uppercase tracking-wide text-text-tertiary">{title}</span>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl leading-8 font-semibold text-text-primary">{value}</span>
        <span className={`text-sm font-medium leading-5 ${isPositive ? "text-green-600" : "text-red-600"}`}>{change}</span>
      </div>
      <span className="mt-1 text-xs leading-4 text-text-tertiary">vs. previous period</span>
    </Card>
  );
}

export default function RevenuePage() {
  return (
    <div className="mt-6 space-y-5">
      <div className="px-2 lg:px-6">
        <h1 className="mb-1 text-[28px] leading-8 font-medium text-text-primary">Revenue</h1>
        <p className="text-sm leading-5 text-text-tertiary">MRR, ARR, churn and subscription health across the workspace.</p>
      </div>
      <div className="space-y-5 px-2 lg:px-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m) => <MetricCard key={m.id} {...m} />)}
        </div>

        <Card>
          <CardHeader className="mb-6">
            <CardTitle className="leading-6 font-semibold text-text-primary">MRR Trend</CardTitle>
            <div className="flex items-center gap-3 text-xs font-medium text-text-tertiary">
              <span className="flex items-center gap-1.5"><span className="size-2 rounded-xs bg-brand-500" />MRR</span>
              <span className="flex items-center gap-1.5"><span className="size-2 rounded-xs bg-text-tertiary" />New revenue</span>
            </div>
          </CardHeader>
          <CardContent className="relative h-72 w-full p-0">
            <ChartContainer className="h-full w-full" height="100%" width="100%">
              <AreaChart data={MRR_SERIES} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <defs>
                  <linearGradient id="mrr-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-brand-500)" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="var(--color-brand-500)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "var(--color-text-tertiary)", fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--color-text-tertiary)", fontSize: 12 }} />
                <Tooltip cursor={{ stroke: "#A1A1AA", strokeWidth: 1, strokeDasharray: "4 4" }} />
                <Area type="monotone" dataKey="mrr" name="MRR" stroke="var(--color-brand-500)" strokeWidth={2} fill="url(#mrr-grad)" dot={false} activeDot={{ r: 4, fill: "var(--color-brand-500)", stroke: "var(--color-base-white)", strokeWidth: 2 }} />
                <Area type="monotone" dataKey="newRevenue" name="New revenue" stroke="var(--color-text-tertiary)" strokeWidth={2} fill="transparent" dot={false} activeDot={{ r: 4, fill: "var(--color-text-tertiary)", stroke: "var(--color-base-white)", strokeWidth: 2 }} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr]">
          <Card>
            <CardHeader className="mb-6"><CardTitle className="leading-6 font-semibold text-text-primary">Plan Mix</CardTitle></CardHeader>
            <CardContent className="flex flex-col gap-3 p-0">
              {PLAN_MIX.map((p) => (
                <div key={p.name} className="flex items-center gap-3">
                  <span className="w-20 text-sm font-medium text-text-primary">{p.name}</span>
                  <div className="h-2 flex-1 rounded-full bg-background-gray-secondary_alt overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${p.value}%`, backgroundColor: p.color }} />
                  </div>
                  <span className="w-10 text-right text-sm font-medium text-text-tertiary">{p.value}%</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="mb-6"><CardTitle className="leading-6 font-semibold text-text-primary">Recent Invoices</CardTitle></CardHeader>
            <div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-primary text-text-tertiary">
                    <th className="px-5 py-2.5 text-left text-xs font-semibold">Invoice</th>
                    <th className="px-5 py-2.5 text-left text-xs font-semibold">Customer</th>
                    <th className="px-5 py-2.5 text-right text-xs font-semibold">Amount</th>
                    <th className="px-5 py-2.5 text-right text-xs font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {INVOICES.map((i) => (
                    <tr key={i.id} className="border-b border-border-primary last:border-0">
                      <td className="px-5 py-3.5 font-medium text-text-primary">{i.id}</td>
                      <td className="px-5 py-3.5 text-text-primary">{i.customer}</td>
                      <td className="px-5 py-3.5 text-right text-text-primary">{i.amount}</td>
                      <td className="px-5 py-3.5 text-right">
                        <Badge color={i.status === "Paid" ? "success" : "error"} size="sm">{i.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
