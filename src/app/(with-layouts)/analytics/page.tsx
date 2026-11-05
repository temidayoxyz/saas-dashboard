"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/tailgrids/core/card";
import { ChartContainer } from "@/components/tailgrids/core/chart";
import { Badge } from "@/components/tailgrids/core/badge";
import { cn } from "@/utils/cn";
import { ArrowDownIcon, ArrowUpIcon, MenuDotsIcon } from "@/utils/icon";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ---- mock analytics data ----------------------------------------------------
const METRICS = [
  { id: "sessions", title: "Sessions", value: "128,430", change: "+12.4%", isPositive: true },
  { id: "active-users", title: "Active Users", value: "18,920", change: "+5.2%", isPositive: true },
  { id: "bounce-rate", title: "Bounce Rate", value: "32.6%", change: "-1.8%", isPositive: true },
  { id: "avg-session", title: "Avg. Session", value: "4m 12s", change: "+0.6%", isPositive: true },
];

const TRAFFIC_OVER_TIME = [
  { name: "Mon", newUsers: 420, activeUsers: 2840 },
  { name: "Tue", newUsers: 480, activeUsers: 3120 },
  { name: "Wed", newUsers: 510, activeUsers: 3280 },
  { name: "Thu", newUsers: 540, activeUsers: 3410 },
  { name: "Fri", newUsers: 590, activeUsers: 3580 },
  { name: "Sat", newUsers: 430, activeUsers: 3200 },
  { name: "Sun", newUsers: 460, activeUsers: 3290 },
];

const ENGAGEMENT = [
  { name: "Sign-ups", value: 1240 },
  { name: "Activations", value: 876 },
  { name: "Upgrades", value: 312 },
  { name: "Churned", value: 98 },
];

const TOP_PAGES = [
  { path: "/dashboard", views: "12,430", avgTime: "3m 42s", bounce: "28%" },
  { path: "/onboarding", views: "8,210", avgTime: "4m 51s", bounce: "21%" },
  { path: "/pricing", views: "6,120", avgTime: "2m 18s", bounce: "54%" },
  { path: "/settings", views: "4,890", avgTime: "1m 52s", bounce: "31%" },
  { path: "/billing", views: "3,450", avgTime: "3m 05s", bounce: "27%" },
];

const DEVICES = [
  { name: "Desktop", value: 64, color: "var(--color-brand-500)" },
  { name: "Mobile", value: 28, color: "var(--color-text-tertiary)" },
  { name: "Tablet", value: 8, color: "#e4e4e7" },
];

function MetricCard({ title, value, change, isPositive }: { title: string; value: string; change: string; isPositive: boolean }) {
  return (
    <Card className="flex flex-col p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs leading-4 font-medium uppercase tracking-wide text-text-tertiary">{title}</span>
        <MenuDotsIcon className="size-4 text-icon-tertiary" />
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl leading-8 font-semibold text-text-primary">{value}</span>
        <span className={`text-sm font-medium leading-5 ${isPositive ? "text-green-600" : "text-red-600"}`}>
          {isPositive ? <ArrowUpIcon className="inline size-3" /> : <ArrowDownIcon className="inline size-3" />}
          {" "}{change}
        </span>
      </div>
      <span className="mt-1 text-xs leading-4 text-text-tertiary">vs. previous period</span>
    </Card>
  );
}

export default function AnalyticsPage() {
  const [range, setRange] = useState<"7d" | "30d">("7d");

  return (
    <div className="mt-6 space-y-5">
      {/* Header */}
      <div className="flex flex-col gap-4 px-2 lg:px-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="mb-1 text-[28px] leading-8 font-medium text-text-primary">Analytics</h1>
          <p className="text-sm leading-5 text-text-tertiary">
            Product usage, acquisition and engagement metrics across all workspaces.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setRange("7d")}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              range === "7d"
                ? "bg-background-gray-secondary_alt text-text-primary"
                : "text-text-tertiary hover:text-text-primary"
            }`}
          >
            Last 7 days
          </button>
          <button
            onClick={() => setRange("30d")}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              range === "30d"
                ? "bg-background-gray-secondary_alt text-text-primary"
                : "text-text-tertiary hover:text-text-primary"
            }`}
          >
            Last 30 days
          </button>
        </div>
      </div>

      <div className="space-y-5 px-2 lg:px-5">
        {/* KPI strip */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m) => (
            <MetricCard key={m.id} title={m.title} value={m.value} change={m.change} isPositive={m.isPositive} />
          ))}
        </div>

        {/* Main chart */}
        <Card>
          <CardHeader className="mb-6">
            <CardTitle className="leading-6 font-semibold text-text-primary">User Acquisition</CardTitle>
            <div className="flex items-center gap-3 text-xs font-medium text-text-tertiary">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-xs bg-[color:var(--color-brand-500)]" />
                New users
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-xs bg-text-tertiary" />
                Active users
              </span>
            </div>
          </CardHeader>
          <CardContent className="relative h-72 w-full p-0">
            <ChartContainer className="h-full w-full" height="100%" width="100%">
              <AreaChart data={TRAFFIC_OVER_TIME} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <defs>
                  <linearGradient id="users-new" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-brand-500)" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="var(--color-brand-500)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "var(--color-text-tertiary)", fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "var(--color-text-tertiary)", fontSize: 12 }}
                />
                <Tooltip
                  cursor={{ stroke: "#A1A1AA", strokeWidth: 1, strokeDasharray: "4 4" }}
                />
                <Area
                  type="monotone"
                  dataKey="newUsers"
                  name="New users"
                  stroke="var(--color-brand-500)"
                  strokeWidth={2}
                  fill="url(#users-new)"
                  dot={false}
                  activeDot={{ r: 4, fill: "var(--color-brand-500)", stroke: "var(--color-base-white)", strokeWidth: 2 }}
                />
                <Area
                  type="monotone"
                  dataKey="activeUsers"
                  name="Active users"
                  stroke="var(--color-text-tertiary)"
                  strokeWidth={2}
                  fill="transparent"
                  dot={false}
                  activeDot={{ r: 4, fill: "var(--color-text-tertiary)", stroke: "var(--color-base-white)", strokeWidth: 2 }}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Mid row: engagement + device split */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[2fr_1fr]">
          <Card>
            <CardHeader className="mb-6">
              <CardTitle className="leading-6 font-semibold text-text-primary">Engagement Funnel</CardTitle>
            </CardHeader>
            <CardContent className="relative h-64 w-full p-0">
              <ChartContainer className="h-full w-full" height="100%" width="100%">
                <BarChart data={ENGAGEMENT} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "var(--color-text-tertiary)", fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "var(--color-text-tertiary)", fontSize: 12 }}
                  />
                  <Tooltip
                    cursor={{ fill: "var(--color-background-gray-secondary_alt)" }}
                  />
                  <Bar dataKey="value" name="Count" radius={[6, 6, 0, 0]} fill="var(--color-brand-500)" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="mb-6">
              <CardTitle className="leading-6 font-semibold text-text-primary">Devices</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 p-0">
              {DEVICES.map((d) => (
                <div key={d.name} className="flex items-center gap-3">
                  <span className="size-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="flex-1 text-sm font-medium text-text-primary">{d.name}</span>
                  <span className="text-sm font-medium text-text-tertiary">{d.value}%</span>
                  <div className="h-1.5 w-24 rounded-full bg-background-gray-secondary_alt overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${d.value}%`, backgroundColor: d.color }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Top pages */}
        <Card>
          <CardHeader className="mb-6">
            <CardTitle className="leading-6 font-semibold text-text-primary">Top Pages</CardTitle>
          </CardHeader>
          <div>
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="border-b border-border-primary text-text-tertiary">
                  <th className="px-5 py-2.5 text-left text-xs font-semibold">Page</th>
                  <th className="px-5 py-2.5 text-right text-xs font-semibold">Views</th>
                  <th className="px-5 py-2.5 text-right text-xs font-semibold">Avg. time</th>
                  <th className="px-5 py-2.5 text-right text-xs font-semibold">Bounce</th>
                </tr>
              </thead>
              <tbody>
                {TOP_PAGES.map((p) => (
                  <tr key={p.path} className="border-b border-border-primary last:border-0">
                    <td className="px-5 py-3.5 font-medium text-text-primary">{p.path}</td>
                    <td className="px-5 py-3.5 text-right text-text-primary">{p.views}</td>
                    <td className="px-5 py-3.5 text-right text-text-tertiary">{p.avgTime}</td>
                    <td className="px-5 py-3.5 text-right text-text-tertiary">{p.bounce}</td>
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
