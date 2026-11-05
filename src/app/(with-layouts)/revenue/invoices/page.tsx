"use client";

import { Badge } from "@/components/tailgrids/core/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/tailgrids/core/card";
import { cn } from "@/utils/cn";

const INVOICES = [
  { id: "INV-2048", customer: "Acme Corp", plan: "Enterprise", amount: "$1,200.00", status: "Paid", issued: "Nov 4, 2026", due: "Nov 11, 2026" },
  { id: "INV-2047", customer: "Globex", plan: "Pro", amount: "$249.00", status: "Paid", issued: "Nov 3, 2026", due: "Nov 10, 2026" },
  { id: "INV-2046", customer: "Initech", plan: "Team", amount: "$2,235.00", status: "Failed", issued: "Nov 2, 2026", due: "Nov 9, 2026" },
  { id: "INV-2045", customer: "Umbrella Co", plan: "Pro", amount: "$499.00", status: "Paid", issued: "Nov 1, 2026", due: "Nov 8, 2026" },
  { id: "INV-2044", customer: "Contoso", plan: "Pro", amount: "$147.00", status: "Refunded", issued: "Oct 30, 2026", due: "Nov 6, 2026" },
];

export default function Page() {
  return (
    <div className="mt-6 space-y-5">
      <div className="px-2 lg:px-6">
        <h1 className="mb-1 text-[28px] leading-8 font-medium text-text-primary">Invoices</h1>
        <p className="text-sm leading-5 text-text-tertiary">Issued, paid, failed and refunded invoices.</p>
      </div>
      <div className="space-y-5 px-2 lg:px-5">
        <Card>
          <div>
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border-primary text-text-tertiary">
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Invoice</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Customer</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Plan</th>
                <th className="px-5 py-2.5 text-right text-xs font-semibold">Amount</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Status</th>
                <th className="px-5 py-2.5 text-right text-xs font-semibold">Issued</th>
                <th className="px-5 py-2.5 text-right text-xs font-semibold">Due</th>
              </tr></thead>
              <tbody>
                {INVOICES.map((i) => (
                  <tr key={i.id} className="border-b border-border-primary last:border-0">
                    <td className="px-5 py-3.5 font-medium text-text-primary">{i.id}</td>
                    <td className="px-5 py-3.5 text-text-primary">{i.customer}</td>
                    <td className="px-5 py-3.5 text-text-secondary">{i.plan}</td>
                    <td className="px-5 py-3.5 text-right font-medium text-text-primary">{i.amount}</td>
                    <td className="px-5 py-3.5"><Badge color={i.status === "Paid" ? "success" : i.status === "Failed" ? "error" : i.status === "Refunded" ? "gray" : "warning"} size="sm">{i.status}</Badge></td>
                    <td className="px-5 py-3.5 text-right text-text-tertiary">{i.issued}</td>
                    <td className="px-5 py-3.5 text-right text-text-tertiary">{i.due}</td>
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
