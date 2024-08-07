"use client";

import {
  CaseSensitiveIcon,
  ImagePlusIcon,
  ListChecksIcon,
  PanelTopCloseIcon,
  PanelTopOpenIcon,
  ReceiptIcon,
  SignatureIcon,
  TableIcon,
  TextSelectIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function EditorRightPanel() {
  const [panelIsOpen, setPanelIsOpen] = useState(true);

  const tabs = [
    { name: "blocks", component: BlocksComponent },
    { name: "themes", component: ThemesComponent },
    { name: "comments", component: CommentsComponent },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0].name);
  const tab = tabs.find((tab) => tab.name === selectedTab);

  const togglePanel = () => {
    setPanelIsOpen((prev) => !prev);
  };

  console.log(panelIsOpen);

  return (
    <aside
      className={`${
        panelIsOpen ? "h-full shadow-xl" : "absolute right-0 h-9 z-50 overflow-hidden"
      } w-60 2xl:w-72 overflow-scroll`}
    >
      <div className="overflow-hidden rounded-b-lg bg-light">
        <button
          onClick={togglePanel}
          className="group flex w-full items-center justify-center bg-dark/5 p-2 hover:bg-dark/10"
        >
          {panelIsOpen ? (
            <PanelTopCloseIcon className="icon transition-transform group-hover:scale-110" />
          ) : (
            <PanelTopOpenIcon className="icon transition-transform group-hover:scale-110" />
          )}
        </button>
      </div>
      {panelIsOpen ? (
        <>
          <nav className="sticky top-0 z-50 flex justify-evenly border-b-[1.5px] border-dark/20 bg-light">
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
          <tab.component />
        </>
      ) : null}
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
      <nav className="gap-xs grid grid-cols-2">
        {blocks.map((block, i) => (
          <div
            className="gap-xs p-xs flex cursor-grab select-none flex-col items-center justify-center rounded-lg text-sm transition-all hover:scale-105 hover:bg-primary/5"
            key={i}
          >
            <block.icon className="h-6 w-6 text-dark/60" />
            <p className="text-sm">{block.name}</p>
          </div>
        ))}
      </nav>
    </section>
  );
};

const ThemesComponent = () => {
  const themes = [
    {
      name: "",
      typography: {
        headings: { font: "inter", style: "regular", size: 16 },
        text: { font: "inter", style: "regular", size: 16 },
        buttons: { font: "inter", style: "regular", size: 16 },
        links: { font: "inter", style: "regular", size: 16 },
        captions: { font: "inter", style: "regular", size: 16 },
      },
      colors: [],
    },
  ];

  return (
    <section className="gap-sm p-xs flex flex-col">
      <div className="gap-xs flex flex-col"></div>
    </section>
  );
};

const Theme = ({ theme }) => {
  return <div>{theme.name}</div>;
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
    <section className="gap-sm p-xs flex flex-col">
      {comments.map((comment, i) => (
        <div className="gap-xs flex flex-col border-b border-dark/40 pb-3" key={i}>
          <span className="gap-xs flex">
            <Image src={comment.user.img} className="w-6" width={100} height={100} alt="" />
            <p className="text-sm text-dark/60">{comment.user.name}</p>
          </span>
          <p className="text-sm">{comment.text}</p>
        </div>
      ))}
    </section>
  );
};
