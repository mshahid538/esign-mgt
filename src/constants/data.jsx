import {
  ChartAreaIcon,
  HandHeartIcon,
  HomeIcon,
  MapIcon,
  SettingsIcon,
  TextIcon,
  UserCogIcon,
  UsersIcon,
} from "lucide-react";

export const menus = {
  dashboard: {
    sidebar: [
      { link: "/dashboard", name: "Home", icon: HomeIcon },
      { link: "/dashboard/templates", name: "Templates", icon: TextIcon },
      { link: "/dashboard/team", name: "Team", icon: UsersIcon },
      { link: "/dashboard/settings", name: "Settings", icon: SettingsIcon },
      { link: "/dashboard/support", name: "Support", icon: UserCogIcon },
      { link: "/dashboard/analytics", name: "Analytics", icon: ChartAreaIcon },
      { link: "/dashboard/roadmap", name: "Roadmap", icon: MapIcon },
      { link: "/dashboard/requests", name: "Feature Request", icon: HandHeartIcon },
    ],
  },
};
