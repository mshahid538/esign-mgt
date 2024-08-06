"use client";

import { SearchIcon, UploadIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function EditorLeftPanel() {
  const tabs = [
    { name: "pages", component: PagesComponent },
    { name: "sections", component: SectionsComponent },
    { name: "library", component: LibraryComponent },
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

const PagesComponent = () => {
  const pages = ["Front", "Marketing", "Pricing", "Quote"];

  return (
    <section className="p-xs">
      <nav className="flex flex-col gap-xs">
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
    <section className="flex flex-col gap-sm p-xs">
      <search className="relative flex items-center gap-2 rounded-lg">
        <SearchIcon className="absolute ml-2.5 icon-sm" />
        <input placeholder="Search" className="text-sm border border-dark pl-9" />
      </search>
      <div className="flex flex-col gap-xs">
        {sections.map((section, i) => (
          <div
            className="relative group flex justify-center items-center w-full h-60 rounded-lg overflow-hidden border border-dark cursor-pointer"
            key={i}
          >
            <p className="absolute z-30 opacity-0 group-hover:opacity-100 transition-opacity bg-dark/60 text-light text-sm rounded-lg p-2">
              {section.name}
            </p>
            <Image
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
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
    <section className="flex flex-col gap-sm p-xs">
      <button className="flex justify-center gap-xs py-2 w-full text-sm hover:scale-105 transition-all hover:bg-primary/5 rounded-lg border-[1.5px] border-primary text-primary">
        Upload
        <UploadIcon className="icon-sm" />
      </button>
      {images.map((image, i) => (
        <div className="w-full h-52 rounded-lg overflow-hidden cursor-pointer" key={i}>
          <Image
            className="hover:scale-105 transition-transform w-full h-full object-cover"
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
