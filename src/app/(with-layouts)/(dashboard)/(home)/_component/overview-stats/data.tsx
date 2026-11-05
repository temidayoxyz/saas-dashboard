import { BoxIcon, EyeIcon, MoneyBagIcon, UserGroupIcon } from "./icons";
import type { OverviewStatKey } from "@/services/api/home";

import type { OverviewStatDisplayConfig } from "./types";

export const overviewStatDisplayConfig: Record<OverviewStatKey, OverviewStatDisplayConfig> = {
  views: {
    title: "Total Visitors",
    icon: <EyeIcon />,
    iconBgClass: "bg-background-gray-secondary_alt",
    iconColorClass: "text-text-primary",
  },
  profit: {
    title: "Total Revenue",
    icon: <MoneyBagIcon />,
    iconBgClass: "bg-background-gray-secondary_alt",
    iconColorClass: "text-text-primary",
  },
  orders: {
    title: "Total Subscriptions",
    icon: <BoxIcon />,
    iconBgClass: "bg-background-gray-secondary_alt",
    iconColorClass: "text-text-primary",
  },
  users: {
    title: "Total Users",
    icon: <UserGroupIcon />,
    iconBgClass: "bg-background-gray-secondary_alt",
    iconColorClass: "text-text-primary",
  },
};
