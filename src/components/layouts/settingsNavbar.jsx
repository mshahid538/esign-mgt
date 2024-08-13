"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingsNavbar() {
  const pathname = usePathname();

  const tabs = [
    { name: "Profile", link: "" },
    { name: "Notification", link: "/notification" },
    { name: "Brand", link: "/brand" },
    { name: "Proposal", link: "/proposal" },
    { name: "Integration", link: "/integration" },
    { name: "Clients", link: "/clients" },
    { name: "Billing", link: "/billing" },
  ];

  return (
    <section className="px-xs">
      <nav className="gap-xs px-xs scroll-none flex justify-between overflow-scroll rounded bg-light text-dark/50">
        {tabs.map((tab, i) => {
          console.log(pathname, "/dashboard/settings" + tab.link);

          const isActive = pathname === "/dashboard/settings" + tab.link;
          return (
            <Link
              className={`${isActive ? "border-b-2 border-primary/80 text-primary" : ""} p-xs`}
              href={"/dashboard/settings/" + tab.link}
              key={i}
            >
              {tab.name}
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
