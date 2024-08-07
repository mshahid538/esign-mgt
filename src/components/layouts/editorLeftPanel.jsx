"use client";

import { PanelTopCloseIcon, PanelTopOpenIcon, SearchIcon, UploadIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function EditorLeftPanel() {
  const [panelIsOpen, setPanelIsOpen] = useState(true);

  const tabs = [
    { name: "pages", component: PagesComponent },
    { name: "sections", component: SectionsComponent },
    { name: "library", component: LibraryComponent },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0].name);
  const tab = tabs.find((tab) => tab.name === selectedTab);

  const togglePanel = () => {
    setPanelIsOpen((prev) => !prev);
  };

  return (
    <aside
      className={`${
        panelIsOpen ? "h-full shadow-xl" : "absolute h-9 z-50 overflow-hidden"
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

const PagesComponent = () => {
  const pages = ["Front", "Marketing", "Pricing", "Quote"];

  return (
    <section className="p-xs">
      <nav className="gap-xs flex flex-col">
        {pages.map((page, i) => (
          <button className="btn-p-light text-start text-sm" key={i}>
            {page}
          </button>
        ))}
      </nav>
    </section>
  );
};

const SectionsComponent = () => {
  const sections = [
    { name: "Section 1", image: "section-1.png" },
    { name: "Section 2", image: "section-2.png" },
    { name: "Section 3", image: "section-3.png" },
    { name: "Section 4", image: "section-4.png" },
  ];

  return (
    <section className="gap-sm p-xs flex flex-col">
      <search className="relative flex items-center gap-2 rounded-lg">
        <SearchIcon className="icon-sm absolute ml-2.5" />
        <input placeholder="Search" className="border border-dark pl-9 text-sm" />
      </search>
      <div className="gap-xs flex flex-col">
        {sections.map((section, i) => (
          <div
            className="group relative flex h-60 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-dark"
            key={i}
          >
            <p className="absolute z-30 rounded-lg bg-dark/60 p-2 text-sm text-light opacity-0 transition-opacity group-hover:opacity-100">
              {section.name}
            </p>
            <Image
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
              src={"/images/sections/" + section.image}
              width={600}
              height={600}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const LibraryComponent = () => {
  const images = ["library-1.png", "library-2.png", "library-3.png"];

  return (
    <section className="gap-sm p-xs flex flex-col">
      <button className="gap-xs flex w-full justify-center rounded-lg border-[1.5px] border-primary py-2 text-sm text-primary transition-all hover:scale-105 hover:bg-primary/5">
        Upload
        <UploadIcon className="icon-sm" />
      </button>
      {images.map((image, i) => (
        <div className="h-52 w-full cursor-pointer overflow-hidden rounded-lg" key={i}>
          <Image
            className="h-full w-full object-cover transition-transform hover:scale-105"
            src={"/images/library/" + image}
            width={600}
            height={600}
            alt=""
          />
        </div>
      ))}
    </section>
  );
};
