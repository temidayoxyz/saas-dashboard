"use client";

import { Button } from "@/components/tailgrids/core/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/tailgrids/core/card";
import { getTopProductsData } from "@/services/api/home";
import { cn } from "@/utils/cn";
import { ArrowDownIcon, ArrowUpIcon, MenuDotsIcon } from "@/utils/icon";
import { useQuery } from "@tanstack/react-query";
import TopProductsSkeleton from "./skeleton";
import { mapTopProductsResponse } from "./utils";

export default function TopProducts() {
  const { data, isLoading } = useQuery({
    queryKey: ["top-products"],
    queryFn: getTopProductsData,
  });

  if (isLoading || !data) {
    return <TopProductsSkeleton />;
  }

  const topProducts = mapTopProductsResponse(data);

  return (
    <Card>
      {/* Header */}
      <CardHeader className="mb-6">
        <CardTitle>Plan Subscriptions</CardTitle>

        <Button iconOnly size="xs" variant="ghost">
          <MenuDotsIcon />
        </Button>
      </CardHeader>

      {/* Product list */}
      <CardContent className="flex flex-col p-0">
        {topProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between border-b border-border-primary py-3 first:pt-0 last:border-0 last:pb-0"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background-gray-secondary_alt text-sm font-semibold text-text-primary">
                {product.name.charAt(0)}
              </div>
              <div>
                <p className="mb-1 text-sm leading-5 font-medium text-text-primary">
                  {product.name}
                </p>
                <small className="block text-xs leading-4 text-text-tertiary">
                  {product.sales} subs · #{product.rank}
                </small>
              </div>
            </div>

            <div className="">
              <p className="text-sm leading-5 font-medium text-text-primary">${product.revenue}</p>
              <p
                className={cn(
                  "mt-1 flex items-center justify-end gap-1 text-xs leading-4",
                  product.isPositive ? "text-green-500" : "text-red-500",
                )}
              >
                {product.change}{" "}
                {product.isPositive ? (
                  <ArrowUpIcon className="text-green-600" />
                ) : (
                  <ArrowDownIcon className="text-red-600" />
                )}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
