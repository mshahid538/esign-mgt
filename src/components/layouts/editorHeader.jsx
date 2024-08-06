"use client";

import { SendHorizonalIcon, UserPlusIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import pfp1 from "@/../public/images/pfp-1.png";
import pfp2 from "@/../public/images/pfp-2.png";
import { useState } from "react";

export default function EditorHeader() {
  const [tabs, setTabs] = useState(["Marketing", "Marketing 001", "Marketing 002", "Marketing 003", "Marketing 004"]);

  return (
    <header className="flex items-center justify-between gap-sm w-full p-xs border-b-[1.5px] border-dark/30 bg-dark/5">
      <nav className="flex gap-xs overflow-x-scroll scroll-none">
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
      <div className="flex items-center gap-xs">
        <span className="flex w-20 relative rounded-full overflow-hidden">
          <Image className="w-8 h-8" src={pfp1} alt="" />
          <Image className="absolute left-6 w-8 h-8" src={pfp2} alt="" />
          <UserPlusIcon className="absolute left-12 w-8 h-8 bg-primary border-[1.5px] text-light p-1.5 rounded-full" />
        </span>
        <button className="btn-p bg-primary text-light flex gap-xs">
          Send <SendHorizonalIcon className="icon" />
        </button>
      </div>
    </header>
  );
}
