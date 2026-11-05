import { Card, CardContent, CardHeader, CardTitle } from "@/components/tailgrids/core/card";
import { Button } from "@/components/tailgrids/core/button";

export default function Page() {
  return (
    <div className="mt-6 space-y-5">
      <div className="px-2 lg:px-6">
        <h1 className="mb-1 text-[28px] leading-8 font-medium text-text-primary">Subscriptions & Billing</h1>
        <p className="text-sm leading-5 text-text-tertiary">Plan management, trials, upgrades and failed payments.</p>
      </div>
      <div className="space-y-5 px-2 lg:px-5">
        <Card>
          <CardHeader className="mb-2">
            <CardTitle className="leading-6 font-semibold text-text-primary">Coming soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-5 text-text-tertiary">
              This module is scaffolded and ready for real data. Wire it up to the same data layer as the rest
              of the dashboard; the shell, theme and primitives are already wired.
            </p>
            <div className="mt-4">
              <Button appearance="outline" size="sm">Back to overview</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
