"use client";

import { menus } from "@/constants/data";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-md justify-between h-dvh">
      <h4 className="p-xs select-none">Logo</h4>
      <nav className="flex flex-col gap-xs p-xs overflow-y-scroll scroll-none">
        {menus.dashboard.sidebar.map((item, i) => (
          <Link
            className={`${
              pathname == item.link ? "bg-primary text-light" : "bg-transparent"
            } text-sm btn-p flex gap-xs`}
            href={item.link}
            key={i}
          >
            <item.icon className="icon" />
            {item.name}
          </Link>
        ))}
      </nav>
      <br />
    </section>
  );
}
