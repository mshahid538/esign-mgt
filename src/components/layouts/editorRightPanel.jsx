"use client";

import {
  CaseSensitiveIcon,
  ImagePlusIcon,
  ListChecksIcon,
  ReceiptIcon,
  SignatureIcon,
  TableIcon,
  TextSelectIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function EditorRightPanel() {
  const tabs = [
    { name: "blocks", component: BlocksComponent },
    { name: "themes", component: ThemesComponent },
    { name: "comments", component: CommentsComponent },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0].name);
  const tab = tabs.find((tab) => tab.name === selectedTab);

  return (
    <aside className="w-60 h-full overflow-scroll shadow-xl">
      <nav className="sticky z-50 top-0 flex justify-evenly border-b-[1.5px] bg-light border-dark/20">
        {tabs.map((tab, i) => (
          <span
            className={`relative cursor-pointer group hover:scale-110 transition-all py-3 select-none text-sm ${
              selectedTab === tab.name ? "text-dark" : "text-dark/40"
            }`}
            key={i}
            onClick={() => setSelectedTab(tab.name)}
          >
            {tab.name}
          </span>
        ))}
      </nav>
      {<tab.component />}
    </aside>
  );
}

const BlocksComponent = () => {
  const blocks = [
    { name: "Headings", icon: CaseSensitiveIcon },
    { name: "Paragraph", icon: TextSelectIcon },
    { name: "Image", icon: ImagePlusIcon },
    { name: "Video", icon: YoutubeIcon },
    { name: "Table", icon: TableIcon },
    { name: "List", icon: ListChecksIcon },
    { name: "Quote", icon: ReceiptIcon },
    { name: "Signature", icon: SignatureIcon },
  ];

  return (
    <section className="p-xs">
      <nav className="grid grid-cols-2 gap-xs">
        {blocks.map((block, i) => (
          <div
            className="flex flex-col justify-center items-center gap-xs text-sm p-xs cursor-grab rounded-lg hover:scale-105 transition-all hover:bg-primary/5 select-none"
            key={i}
          >
            <block.icon className="w-6 h-6 text-dark/60" />
            <p className="text-sm">{block.name}</p>
          </div>
        ))}
      </nav>
    </section>
  );
};

const ThemesComponent = () => {
  const themes = [];

  return (
    <section className="flex flex-col gap-sm p-xs">
      <div className="flex flex-col gap-xs"></div>
    </section>
  );
};

const CommentsComponent = () => {
  const comments = [
    {
      user: { name: "Adnan Edi", img: "/images/pfp.png" },
      text: "Change the price of the this page. it should be $100.",
    },
    {
      user: { name: "Adnan Edi", img: "/images/pfp.png" },
      text: "Change the price of the this page. it should be $100.",
    },
    { user: { name: "Shahid", img: "/images/pfp.png" }, text: "Ok i have changes the price." },
    {
      user: { name: "Adnan Edi", img: "/images/pfp.png" },
      text: "Change the price of the this page. it should be $100.",
    },
  ];

  return (
    <section className="flex flex-col gap-sm p-xs">
      {comments.map((comment, i) => (
        <div className="flex flex-col gap-xs pb-3 border-b border-dark/40" key={i}>
          <span className="flex gap-xs">
            <Image src={comment.user.img} className="w-6" width={100} height={100} alt="" />
            <p className="text-sm text-dark/60">{comment.user.name}</p>
          </span>
          <p className="text-sm">{comment.text}</p>
        </div>
      ))}
    </section>
  );
};
