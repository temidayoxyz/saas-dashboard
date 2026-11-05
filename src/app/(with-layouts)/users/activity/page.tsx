"use client";

import { Badge } from "@/components/tailgrids/core/badge";
import { Card, CardHeader, CardTitle } from "@/components/tailgrids/core/card";

const LOG = [
  { when: "Nov 5, 09:42", actor: "Amelia Chen", action: "Updated billing email", target: "Workspace: Acme", type: "settings" },
  { when: "Nov 5, 09:18", actor: "Marcus Bell", action: "Invited user", target: "lee@foo.dev", type: "membership" },
  { when: "Nov 4, 22:07", actor: "System", action: "Payment failed", target: "INV-2046", type: "billing" },
  { when: "Nov 4, 18:12", actor: "Priya Natarajan", action: "Upgraded plan", target: "Free → Pro", type: "billing" },
  { when: "Nov 4, 14:30", actor: "Jonas Weber", action: "Created API key", target: "ksk_live_…", type: "security" },
  { when: "Nov 3, 11:05", actor: "Sofia Rinaldi", action: "Changed role", target: "Member → Admin", type: "access" },
];

function typeColor(t: string) {
  switch (t) {
    case "billing": return "primary";
    case "security": return "error";
    case "access": return "violet";
    case "membership": return "success";
    default: return "gray";
  }
}

export default function Page() {
  return (
    <div className="mt-6 space-y-5">
      <div className="px-2 lg:px-6">
        <h1 className="mb-1 text-[28px] leading-8 font-medium text-text-primary">Activity Log</h1>
        <p className="text-sm leading-5 text-text-tertiary">Audit trail of user and account actions.</p>
      </div>
      <div className="space-y-5 px-2 lg:px-5">
        <Card>
          <div>
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border-primary text-text-tertiary">
                <th className="px-5 py-2.5 text-left text-xs font-semibold">When</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Actor</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Action</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Target</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Type</th>
              </tr></thead>
              <tbody>
                {LOG.map((l, i) => (
                  <tr key={i} className="border-b border-border-primary last:border-0">
                    <td className="px-5 py-3.5 text-text-tertiary">{l.when}</td>
                    <td className="px-5 py-3.5 font-medium text-text-primary">{l.actor}</td>
                    <td className="px-5 py-3.5 text-text-primary">{l.action}</td>
                    <td className="px-5 py-3.5 text-text-secondary">{l.target}</td>
                    <td className="px-5 py-3.5"><Badge color={typeColor(l.type) as any} size="sm">{l.type}</Badge></td>
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
