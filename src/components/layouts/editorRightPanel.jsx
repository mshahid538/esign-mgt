"use client";

import {
  ArrowLeftIcon,
  CaseSensitiveIcon,
  GalleryVerticalIcon,
  ImagePlusIcon,
  ListChecksIcon,
  PaletteIcon,
  PanelTopCloseIcon,
  PanelTopOpenIcon,
  PenLineIcon,
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
  const [selectedTheme, setSelectedTheme] = useState(null);

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
      {selectedTheme ? (
        <Theme theme={selectedTheme} setSelectedTheme={setSelectedTheme} />
      ) : (
        themes.map((theme, i) => (
          <div
            key={i}
            className="p-xs gap-md group relative flex select-none items-center justify-center rounded-md border border-dark/50"
          >
            <button
              onClick={() => setSelectedTheme(theme)}
              className="absolute right-0 top-0 m-3 scale-0 transition-transform group-hover:scale-100"
            >
              <PenLineIcon className="icon-sm hover:scale-110" />
            </button>
            <h1 className="text-amber-300">Aa</h1>
            <div className="gap-xs flex flex-col">
              <div className="color-swatch bg-amber-300" />
              <div className="color-swatch bg-teal-300" />
              <div className="color-swatch bg-pink-300" />
            </div>
          </div>
        ))
      )}
    </section>
  );
};

const Theme = ({ theme, setSelectedTheme }) => {
  const [selectedSetting, setSelectedSetting] = useState(null);

  const BackBtn = () => {
    return (
      <button
        onClick={() => setSelectedSetting(null)}
        className="flex w-fit transition-transform gap-2 hover:scale-105"
      >
        <ArrowLeftIcon className="icon-sm" />
        <small>Back</small>
      </button>
    );
  };

  const Colors = (
    <div className="gap-md flex flex-col">
      <BackBtn />
      <h4>Colors</h4>
    </div>
  );

  const Typography = (
    <div className="gap-md flex flex-col">
      <BackBtn />
      <h4>Typography</h4>
    </div>
  );

  const Layout = (
    <div className="gap-md flex flex-col">
      <BackBtn />
      <h4>Layout</h4>
    </div>
  );

  const settings = [
    { name: "Typography", component: Typography, icon: <CaseSensitiveIcon className="icon-sm" /> },
    { name: "Colors", component: Colors, icon: <PaletteIcon className="icon-sm" /> },
    { name: "Layout", component: Layout, icon: <GalleryVerticalIcon className="icon-sm" /> },
  ];

  if (selectedSetting) return selectedSetting.component;

  return (
    <div className="gap-md flex flex-col">
      <button onClick={() => setSelectedTheme(null)} className="flex w-fit transition-transform gap-2 hover:scale-105">
        <ArrowLeftIcon className="icon-sm" />
        <small>Back</small>
      </button>
      <div className="p-xs gap-md relative flex select-none items-center justify-center border">
        <h1 className="text-amber-300">Aa</h1>
        <div className="gap-xs flex flex-col">
          <div className="color-swatch bg-amber-300" />
          <div className="color-swatch bg-teal-300" />
          <div className="color-swatch bg-pink-300" />
        </div>
      </div>
      <div className="gap-xs flex flex-col items-start">
        {settings.map((setting, i) => (
          <button
            className="flex w-full items-center gap-2 rounded-md p-2 transition-transform hover:scale-105 hover:bg-dark/5"
            onClick={() => setSelectedSetting(setting)}
            key={i}
          >
            {setting.icon}
            <small>{setting.name}</small>
          </button>
        ))}
      </div>
    </div>
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
