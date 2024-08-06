"use client";

import { BellIcon, PlusIcon, XIcon } from "lucide-react";
import { useState } from "react";
import pfp from "@/../public/images/pfp.png";
import Image from "next/image";
import Link from "next/link";

export default function DashboardHeader() {
  const [tabs, setTabs] = useState(["Marketing", "Marketing 001", "Marketing 002", "Marketing 003", "Marketing 004"]);

  return (
    <header className="flex items-center justify-between w-full">
      <nav className="flex gap-xs p-xs overflow-x-scroll scroll-none">
        <Link href={"/dashboard"} className="btn-light flex gap-xs text-xs">
          Dashboard
        </Link>
        {tabs.map((tab, i) => (
          <Link href={"#"} className="btn-light flex gap-xs text-xs" key={i}>
            {tab}
            <XIcon onClick={() => setTabs(tabs.filter((t) => t !== tab))} className="icon-sm hover:text-primary" />
          </Link>
        ))}
      </nav>
      <span className="flex items-center gap-xs p-xs">
        <Link className="flex gap-xs btn-p text-sm bg-primary text-light" href={"/dashboard/editor"}>
          <PlusIcon className="icon" />
          Create New Doc
        </Link>
        <Link className="h-9 w-9 rounded-full overflow-hidden" href={"#"}>
          <Image src={pfp} className="object-cover" alt="" />
        </Link>
        <button className="p-2 bg-light rounded-lg">
          <BellIcon className="icon" />
        </button>
      </span>
    </header>
  );
}
