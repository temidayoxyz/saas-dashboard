import {
  HomeIcon,
  PieChartIcon,
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
    ],
  },
];