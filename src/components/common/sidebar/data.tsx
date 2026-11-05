import {
  HomeIcon,
  PieChartIcon,
  Widget4Icon,
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
  {
    label: "OTHERS",
    items: [
      {
        title: "Charts",
        icon: <PieChartIcon />,
        items: [
          {
            title: "Line Charts",
            url: "/charts/line-charts",
          },
          {
            title: "Bar Charts",
            url: "/charts/bar-charts",
          },
          {
            title: "Pie Charts",
            url: "/charts/pie-charts",
          },
        ],
      },
      {
        title: "UI Elements",
        icon: <Widget4Icon />,
        items: [
          {
            title: "Accordion",
            url: "/ui-elements/accordion",
          },
          {
            title: "Avatars",
            url: "/ui-elements/avatars",
          },
          {
            title: "Buttons",
            url: "/ui-elements/buttons",
          },
          {
            title: "Breadcrumbs",
            url: "/ui-elements/breadcrumbs",
          },
          {
            title: "Progress",
            url: "/ui-elements/progress",
          },
          {
            title: "Tooltips",
            url: "/ui-elements/tooltips",
          },
        ],
      },
    ],
  },
];