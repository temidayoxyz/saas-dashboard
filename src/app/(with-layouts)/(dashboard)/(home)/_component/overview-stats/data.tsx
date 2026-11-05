import { BoxIcon, EyeIcon, MoneyBagIcon, UserGroupIcon } from "./icons";
import type { OverviewStatKey } from "@/services/api/home";

import type { OverviewStatDisplayConfig } from "./types";

export const overviewStatDisplayConfig: Record<OverviewStatKey, OverviewStatDisplayConfig> = {
  views: {
    title: "Total Views",
    icon: <EyeIcon />,
    iconBgClass: "bg-[rgba(0,0,0,0.08)]",
    iconColorClass: "text-[#121212]",
  },
  profit: {
    title: "Total profit",
    icon: <MoneyBagIcon />,
    iconBgClass: "bg-[rgba(0,0,0,0.08)]",
    iconColorClass: "text-[#121212]",
  },
  orders: {
    title: "Total Order",
    icon: <BoxIcon />,
    iconBgClass: "bg-[rgba(0,0,0,0.08)]",
    iconColorClass: "text-[#121212]",
  },
  users: {
    title: "Total User",
    icon: <UserGroupIcon />,
    iconBgClass: "bg-[rgba(0,0,0,0.08)]",
    iconColorClass: "text-[#121212]",
  },
};
