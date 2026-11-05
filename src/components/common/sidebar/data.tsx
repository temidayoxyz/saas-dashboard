import {
  HomeIcon,
  InvoiceIcon,
  PieChartIcon,
  TaskIcon,
  UserGroupIcon,
  UserIcon,
} from "./icon";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        url: "/",
        icon: <HomeIcon />,
        items: [],
      },
      {
        title: "Analytics",
        url: "/analytics",
        icon: <PieChartIcon />,
        items: [],
      },
      {
        title: "Revenue",
        icon: <InvoiceIcon />,
        items: [
          { title: "Overview", url: "/revenue" },
          { title: "Subscriptions & Billing", url: "/revenue/subscriptions" },
          { title: "MRR", url: "/revenue/mrr" },
          { title: "ARR", url: "/revenue/arr" },
          { title: "Churn & Retention", url: "/revenue/churn" },
          { title: "Invoices", url: "/revenue/invoices" },
          { title: "Failed Payments", url: "/revenue/failed-payments" },
          { title: "Upgrades & Downgrades", url: "/revenue/upgrades" },
        ],
      },
      {
        title: "Users",
        url: "/users",
        icon: <UserIcon />,
        items: [
          { title: "All Users", url: "/users" },
          { title: "Active", url: "/users/active" },
          { title: "Trials", url: "/users/trials" },
          { title: "Churned", url: "/users/churned" },
          { title: "Roles & Permissions", url: "/users/roles" },
          { title: "Teams & Workspaces", url: "/users/teams" },
          { title: "Activity Log", url: "/users/activity" },
        ],
      },
    ],
  },
];