import { BoxIcon, EyeIcon, MoneyBagIcon, UserGroupIcon } from "./icons";
import type { OverviewStatKey } from "@/services/api/home";

import type { OverviewStatDisplayConfig } from "./types";

export const overviewStatDisplayConfig: Record<OverviewStatKey, OverviewStatDisplayConfig> = {
  views: {
    title: "Total Visitors",
    icon: <EyeIcon />,
    iconBgClass: "bg-[rgba(0,0,0,0.08)]",
    iconColorClass: "text-[#121212]",
  },
  profit: {
    title: "Total Revenue",
    icon: <MoneyBagIcon />,
    iconBgClass: "bg-[rgba(0,0,0,0.08)]",
    iconColorClass: "text-[#121212]",
  },
  orders: {
    title: "Total Subscriptions",
    icon: <BoxIcon />,
    iconBgClass: "bg-[rgba(0,0,0,0.08)]",
    iconColorClass: "text-[#121212]",
  },
  users: {
    title: "Total Users",
    icon: <UserGroupIcon />,
    iconBgClass: "bg-[rgba(0,0,0,0.08)]",
    iconColorClass: "text-[#121212]",
  },
};
