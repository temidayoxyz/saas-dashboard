"use client";

import { Badge } from "@/components/tailgrids/core/badge";
import { Button } from "@/components/tailgrids/core/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/tailgrids/core/card";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from "@/components/tailgrids/core/table";
import { MenuDotsIcon, SearchIcon } from "@/components/common/header/icons";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/tailgrids/core/input-group";

const PLANS = [
  { name: "Free", price: "$0", users: 1284, mrr: "$0", color: "gray" as const },
  { name: "Pro", price: "$49", users: 412, mrr: "$20,188", color: "blue" as const },
  { name: "Team", price: "$149", users: 87, mrr: "$12,963", color: "violet" as const },
  { name: "Enterprise", price: "Custom", users: 12, mrr: "$9,049", color: "primary" as const },
];

const SUBS = [
  { id: "SUB-1001", customer: "Acme Corp", plan: "Enterprise", seats: 42, mrr: "$999", status: "Active", renewed: "Nov 12" },
  { id: "SUB-1002", customer: "Globex", plan: "Pro", seats: 8, mrr: "$392", status: "Active", renewed: "Nov 9" },
  { id: "SUB-1003", customer: "Initech", plan: "Team", seats: 12, mrr: "$1,788", status: "Trial", renewed: "Nov 15" },
  { id: "SUB-1004", customer: "Umbrella Co", plan: "Pro", seats: 5, mrr: "$245", status: "Past due", renewed: "Oct 28" },
  { id: "SUB-1005", customer: "Contoso", plan: "Pro", seats: 3, mrr: "$147", status: "Cancelled", renewed: "—" },
];

export default function Page() {
  return (
    <div className="mt-6 space-y-5">
      <div className="flex flex-col gap-4 px-2 lg:px-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="mb-1 text-[28px] leading-8 font-medium text-text-primary">Subscriptions &amp; Billing</h1>
          <p className="text-sm leading-5 text-text-tertiary">Plans, active subscriptions, trials and lifecycle changes.</p>
        </div>
        <Button variant="primary" size="sm" className="bg-brand-500">+ New subscription</Button>
      </div>
      <div className="space-y-5 px-2 lg:px-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <Card key={p.name} className="p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs leading-4 font-medium uppercase tracking-wide text-text-tertiary">{p.name}</span>
                <Badge color={p.color} size="sm">{p.price}</Badge>
              </div>
              <div className="mt-3 text-2xl leading-8 font-semibold text-text-primary">{p.users}</div>
              <div className="mt-1 text-xs leading-4 text-text-tertiary">{p.mrr} MRR</div>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader className="mb-6">
            <CardTitle className="leading-6 font-semibold text-text-primary">Active subscriptions</CardTitle>
            <div className="flex items-center gap-2">
              <InputGroup className="w-64 py-1.5">
                <InputGroupAddon align="inline-start" className="pr-0 text-icon-tertiary"><SearchIcon className="size-4" /></InputGroupAddon>
                <InputGroupInput placeholder="Search customer" className="py-0 pl-2 text-sm" />
              </InputGroup>
              <Button appearance="outline" size="sm">Filters</Button>
            </div>
          </CardHeader>
          <div>
            <TableRoot className="w-full min-w-[640px] rounded-none border-none">
              <TableHeader>
                <TableRow className="[&_th]:border-t">
                  <TableHead className="px-6 py-2.5 text-xs leading-4 font-semibold text-text-secondary">Subscription</TableHead>
                  <TableHead className="px-6 py-2.5 text-xs leading-4 font-semibold text-text-secondary">Customer</TableHead>
                  <TableHead className="px-6 py-2.5 text-xs leading-4 font-semibold text-text-secondary">Plan</TableHead>
                  <TableHead className="px-6 py-2.5 text-xs leading-4 font-semibold text-text-secondary">Seats</TableHead>
                  <TableHead className="px-6 py-2.5 text-xs leading-4 font-semibold text-text-secondary">MRR</TableHead>
                  <TableHead className="px-6 py-2.5 text-xs leading-4 font-semibold text-text-secondary">Status</TableHead>
                  <TableHead className="px-6 py-2.5 text-xs leading-4 font-semibold text-text-secondary">Renews</TableHead>
                  <TableHead className="px-6 py-2.5 text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {SUBS.map((s) => (
                  <TableRow key={s.id} className="[&_td]:border-none">
                    <TableCell className="px-6 py-3.5 text-sm font-medium text-text-primary">{s.id}</TableCell>
                    <TableCell className="px-6 py-3.5 text-sm text-text-primary">{s.customer}</TableCell>
                    <TableCell className="px-6 py-3.5"><Badge color={s.plan === "Enterprise" ? "primary" : s.plan === "Team" ? "violet" : s.plan === "Pro" ? "blue" : "gray"} size="sm">{s.plan}</Badge></TableCell>
                    <TableCell className="px-6 py-3.5 text-sm text-text-secondary">{s.seats}</TableCell>
                    <TableCell className="px-6 py-3.5 text-sm font-medium text-text-primary">{s.mrr}</TableCell>
                    <TableCell className="px-6 py-3.5"><Badge color={s.status === "Active" ? "success" : s.status === "Trial" ? "blue" : s.status === "Past due" ? "warning" : "gray"} size="sm">{s.status}</Badge></TableCell>
                    <TableCell className="px-6 py-3.5 text-sm text-text-tertiary">{s.renewed}</TableCell>
                    <TableCell className="px-6 py-3.5 text-right"><Button iconOnly size="xs" variant="ghost"><MenuDotsIcon /></Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </TableRoot>
          </div>
        </Card>
      </div>
    </div>
  );
}
