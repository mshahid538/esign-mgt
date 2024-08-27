import {
  ChartAreaIcon,
  HandHeartIcon,
  HomeIcon,
  MapIcon,
  SettingsIcon,
  TextIcon,
  UserCogIcon,
  UsersIcon,
  ImagePlusIcon,
  ListChecksIcon,
  ReceiptIcon,
  SignatureIcon,
  TableIcon,
  TextSelectIcon,
  YoutubeIcon,
  CaseSensitiveIcon,
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

export const blocks = [
  { id: 0, name: "Headings", icon: CaseSensitiveIcon },
  { id: 1, name: "Paragraph", icon: TextSelectIcon },
  { id: 2, name: "Image", icon: ImagePlusIcon },
  { id: 3, name: "Video", icon: YoutubeIcon },
  { id: 4, name: "Table", icon: TableIcon },
  { id: 5, name: "List", icon: ListChecksIcon },
  { id: 6, name: "Quote", icon: ReceiptIcon },
  { id: 7, name: "Signature", icon: SignatureIcon },
];
