"use client";

import { Badge } from "@/components/tailgrids/core/badge";
import { Button } from "@/components/tailgrids/core/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/tailgrids/core/card";

const ITEMS = [
  { id: "INV-2046", customer: "Initech", amount: "$2,235.00", attempt: 2, nextRetry: "Nov 5", reason: "Insufficient funds" },
  { id: "INV-2032", customer: "Acme Corp", amount: "$499.00", attempt: 1, nextRetry: "Nov 6", reason: "Card expired" },
  { id: "INV-2029", customer: "Globex", amount: "$99.00", attempt: 3, nextRetry: "Nov 4", reason: "Do not honor" },
];

export default function Page() {
  return (
    <div className="mt-6 space-y-5">
      <div className="px-2 lg:px-6">
        <h1 className="mb-1 text-[28px] leading-8 font-medium text-text-primary">Failed Payments</h1>
        <p className="text-sm leading-5 text-text-tertiary">Dunning queue and recovery actions.</p>
      </div>
      <div className="space-y-5 px-2 lg:px-5">
        <Card>
          <div>
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border-primary text-text-tertiary">
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Invoice</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Customer</th>
                <th className="px-5 py-2.5 text-right text-xs font-semibold">Amount</th>
                <th className="px-5 py-2.5 text-right text-xs font-semibold">Attempts</th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold">Reason</th>
                <th className="px-5 py-2.5 text-right text-xs font-semibold">Next retry</th>
                <th className="px-5 py-2.5 text-right text-xs font-semibold">Action</th>
              </tr></thead>
              <tbody>
                {ITEMS.map((i) => (
                  <tr key={i.id} className="border-b border-border-primary last:border-0">
                    <td className="px-5 py-3.5 font-medium text-text-primary">{i.id}</td>
                    <td className="px-5 py-3.5 text-text-primary">{i.customer}</td>
                    <td className="px-5 py-3.5 text-right font-medium text-text-primary">{i.amount}</td>
                    <td className="px-5 py-3.5 text-right text-text-tertiary">{i.attempt}</td>
                    <td className="px-5 py-3.5 text-text-secondary">{i.reason}</td>
                    <td className="px-5 py-3.5 text-right text-text-tertiary">{i.nextRetry}</td>
                    <td className="px-5 py-3.5 text-right">
                      <div className="flex justify-end gap-1">
                        <Button size="sm" variant="primary" className="bg-brand-500">Retry now</Button>
                        <Button size="sm" appearance="outline">Cancel</Button>
                      </div>
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
