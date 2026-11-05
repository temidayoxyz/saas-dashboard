"use client";

import { Button } from "@/components/tailgrids/core/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/tailgrids/core/card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/tailgrids/core/input-group";
import { SearchIcon, MenuDotsIcon } from "@/components/common/header/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/tailgrids/core/avatar";
import { Badge } from "@/components/tailgrids/core/badge";

const USERS = [
  { id: "USR-1041", name: "Amelia Chen", email: "amelia@acme.co", plan: "Pro", status: "Active", mrr: "$49", lastSeen: "2m ago", initials: "AC" },
  { id: "USR-1042", name: "Marcus Bell", email: "marcus@globex.io", plan: "Team", status: "Active", mrr: "$149", lastSeen: "1h ago", initials: "MB" },
  { id: "USR-1043", name: "Priya Natarajan", email: "priya@initech.com", plan: "Free", status: "Trial", mrr: "$0", lastSeen: "3h ago", initials: "PN" },
  { id: "USR-1044", name: "Jonas Weber", email: "jonas@umbrella.co", plan: "Enterprise", status: "Active", mrr: "$999", lastSeen: "5h ago", initials: "JW" },
  { id: "USR-1045", name: "Sofia Rinaldi", email: "sofia@contoso.com", plan: "Pro", status: "Past due", mrr: "$49", lastSeen: "2d ago", initials: "SR" },
  { id: "USR-1046", name: "Lee Tanaka", email: "lee@foo.dev", plan: "Free", status: "Churned", mrr: "$0", lastSeen: "12d ago", initials: "LT" },
];

const KPI = [
  { title: "Total Users", value: "18,920", change: "+5.2%", positive: true },
  { title: "Active (30d)", value: "14,310", change: "+3.1%", positive: true },
  { title: "Trial", value: "1,204", change: "+8.0%", positive: true },
  { title: "Churned (90d)", value: "287", change: "+0.4%", positive: false },
];

function statusColor(s: string) {
  switch (s) {
    case "Active": return "success";
    case "Trial": return "blue";
    case "Past due": return "warning";
    case "Churned": return "error";
    default: return "gray";
  }
}
function planColor(p: string) {
  switch (p) {
    case "Enterprise": return "primary";
    case "Team": return "violet";
    case "Pro": return "blue";
    default: return "gray";
  }
}

export default function UsersPage() {
  return (
    <div className="mt-6 space-y-5">
      <div className="flex flex-col gap-4 px-2 lg:px-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="mb-1 text-[28px] leading-8 font-medium text-text-primary">Users</h1>
          <p className="text-sm leading-5 text-text-tertiary">Accounts, plans, status and activity across the workspace.</p>
        </div>
        <Button variant="primary" size="md" className="bg-brand-500">+ Invite user</Button>
      </div>
      <div className="space-y-5 px-2 lg:px-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {KPI.map((k) => (
            <Card key={k.title} className="flex flex-col p-5">
              <span className="text-xs leading-4 font-medium uppercase tracking-wide text-text-tertiary">{k.title}</span>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl leading-8 font-semibold text-text-primary">{k.value}</span>
                <span className={`text-sm font-medium leading-5 ${k.positive ? "text-green-600" : "text-red-600"}`}>{k.change}</span>
              </div>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader className="mb-6">
            <CardTitle className="leading-6 font-semibold text-text-primary">All users</CardTitle>
            <div className="flex items-center gap-2">
              <InputGroup className="w-64 py-1.5">
                <InputGroupAddon align="inline-start" className="pr-0 text-icon-tertiary">
                  <SearchIcon className="size-4" />
                </InputGroupAddon>
                <InputGroupInput placeholder="Search users" className="py-0 pl-2 text-sm" />
              </InputGroup>
              <Button appearance="outline" size="sm">Filters</Button>
            </div>
          </CardHeader>
          <div>
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-border-primary text-text-tertiary">
                  <th className="px-5 py-2.5 text-left text-xs font-semibold">User</th>
                  <th className="px-5 py-2.5 text-left text-xs font-semibold">Plan</th>
                  <th className="px-5 py-2.5 text-left text-xs font-semibold">Status</th>
                  <th className="px-5 py-2.5 text-right text-xs font-semibold">MRR</th>
                  <th className="px-5 py-2.5 text-right text-xs font-semibold">Last seen</th>
                  <th className="px-5 py-2.5 text-right text-xs font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {USERS.map((u) => (
                  <tr key={u.id} className="border-b border-border-primary last:border-0">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <Avatar size="sm">
                          <AvatarImage src={`/images/user/${u.initials.toLowerCase()}.png`} alt={u.name} className="bg-gray-100" />
                          <AvatarFallback>{u.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-text-primary leading-5">{u.name}</span>
                          <span className="text-xs text-text-tertiary leading-4">{u.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5"><Badge color={planColor(u.plan)} size="sm">{u.plan}</Badge></td>
                    <td className="px-5 py-3.5"><Badge color={statusColor(u.status)} size="sm">{u.status}</Badge></td>
                    <td className="px-5 py-3.5 text-right font-medium text-text-primary">{u.mrr}</td>
                    <td className="px-5 py-3.5 text-right text-text-tertiary">{u.lastSeen}</td>
                    <td className="px-5 py-3.5 text-right">
                      <Button iconOnly size="xs" variant="ghost">
                        <MenuDotsIcon />
                      </Button>
                    </td>
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
