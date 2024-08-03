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
      { link: "#/template", name: "Template", icon: TextIcon },
      { link: "#/team", name: "Team", icon: UsersIcon },
      { link: "#/settings", name: "Settings", icon: SettingsIcon },
      { link: "#/support", name: "Support", icon: UserCogIcon },
      { link: "#/analytics", name: "Analytics", icon: ChartAreaIcon },
      { link: "#/roadmap", name: "Roadmap", icon: MapIcon },
      { link: "#/requests", name: "Feature Request", icon: HandHeartIcon },
    ],
  },
};
