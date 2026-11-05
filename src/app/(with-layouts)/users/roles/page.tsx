"use client";

import { Badge, Card, CardContent, CardHeader, CardTitle } from "@/components/tailgrids/core/card";
import { cn } from "@/utils/cn";

const ROLES = [
  { name: "Owner", count: 1, scope: "Workspace", caps: ["billing", "settings", "delete"] },
  { name: "Admin", count: 4, scope: "Workspace", caps: ["invite", "settings", "manage-users"] },
  { name: "Member", count: 148, scope: "Project", caps: ["read", "write"] },
  { name: "Viewer", count: 37, scope: "Project", caps: ["read"] },
  { name: "Billing", count: 2, scope: "Workspace", caps: ["billing", "view"] },
];

const MATRIX = ["read", "write", "invite", "manage-users", "billing", "settings", "delete"];
function has(role: any, cap: string) { return role.caps.includes(cap) || role.caps.includes("*"); }

export default function Page() {
  return (
    <div className="mt-6 space-y-5">
      <div className="px-2 lg:px-6">
        <h1 className="mb-1 text-[28px] leading-8 font-medium text-text-primary">Roles &amp; Permissions</h1>
        <p className="text-sm leading-5 text-text-tertiary">Roles, scopes and access control across the workspace.</p>
      </div>
      <div className="space-y-5 px-2 lg:px-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.slice(0,4).map((r) => (
            <Card key={r.name} className="flex flex-col p-5">
              <span className="text-xs font-medium uppercase tracking-wide text-text-tertiary">{r.name}</span>
              <div className="mt-3 text-2xl font-semibold text-text-primary">{r.count}</div>
              <span className="mt-1 text-xs text-text-tertiary">{r.scope} scope</span>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader className="mb-6"><CardTitle className="leading-6 font-semibold text-text-primary">Capability matrix</CardTitle></CardHeader>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border-primary text-text-tertiary">
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Role</th>
                {MATRIX.map((c) => (<th key={c} className="px-5 py-2.5 text-center text-xs font-semibold capitalize">{c.replace("-", " ")}</th>))}
              </tr></thead>
              <tbody>
                {ROLES.map((r) => (
                  <tr key={r.name} className="border-b border-border-primary last:border-0">
                    <td className="px-5 py-3.5 font-medium text-text-primary">{r.name}</td>
                    {MATRIX.map((c) => (
                      <td key={c} className="px-5 py-3.5 text-center">
                        {has(r,c) ? <span className="inline-block size-2 rounded-full bg-text-primary" /> : <span className="text-text-tertiary">—</span>}
                      </td>
                    ))}
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
