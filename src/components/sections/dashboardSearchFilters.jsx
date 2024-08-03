"use client";

import {
  ArrowRightFromLineIcon,
  BadgeCheckIcon,
  BanIcon,
  CheckSquareIcon,
  CircleDollarSignIcon,
  EyeIcon,
  FolderPenIcon,
  HourglassIcon,
  LayoutGridIcon,
  LayoutListIcon,
  PencilLineIcon,
  SearchIcon,
} from "lucide-react";
import { useState } from "react";

export default function DashboardSearchFilters() {
  const [searchValue, setSearchValue] = useState("");
  const [filters, setFilters] = useState({
    teamMembers: ["Adnan"],
    sort: ["Last Month", "Latest", "Oldest"],
    grid: true,
    view: "all",
  });

  const views = [
    { name: "all", icon: LayoutListIcon },
    { name: "draft", icon: FolderPenIcon },
    { name: "approval", icon: CheckSquareIcon },
    { name: "ready", icon: BadgeCheckIcon },
    { name: "sent", icon: ArrowRightFromLineIcon },
    { name: "viewed", icon: EyeIcon },
    { name: "edits", icon: PencilLineIcon },
    { name: "waiting", icon: HourglassIcon },
    { name: "paid", icon: CircleDollarSignIcon },
    { name: "expired", icon: BanIcon },
  ];

  const handleViewClick = (view) => {
    setFilters((prev) => ({
      ...prev,
      view,
    }));
  };

  const onSearch = (e) => {
    e.preventDefault();
    setSearchValue("");
  };

  return (
    <section className="flex flex-col gap-sm">
      <search className="flex gap-sm w-full">
        <form onSubmit={onSearch} className="relative flex-1 flex items-center bg-light rounded-lg">
          <SearchIcon className="absolute left-4 icon-sm" />
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full text-sm bg-transparent border pl-10 py-3"
            placeholder="Search Proposal"
          />
        </form>
        {filters?.teamMembers && filters.teamMembers.length > 0 ? (
          <select className="w-fit max-w-60 truncate">
            {filters.teamMembers.map((teamMember, i) => (
              <option key={i}>{teamMember}</option>
            ))}
          </select>
        ) : null}
        {filters?.sort && filters.sort.length > 0 ? (
          <select className="w-fit">
            {filters.sort.map((sortBy, i) => (
              <option key={i}>{sortBy}</option>
            ))}
          </select>
        ) : null}
        {filters?.grid ? (
          <button className="bg-white rounded-lg p-3">
            <LayoutGridIcon className="icon" />
          </button>
        ) : null}
      </search>
      {filters?.grid ? (
        <ul className="flex gap-xs overflow-x-scroll scroll-none">
          {views.map((item, i) => (
            <li
              onClick={() => handleViewClick(item.name)}
              key={i}
              className={`select-none flex flex-col gap-1 p-2 w-20 justify-center items-center rounded-lg capitalize cursor-pointer ${
                item.name === filters.view ? "border border-primary bg-primary/10" : "hover:bg-primary/10"
              }`}
            >
              <item.icon className="icon" />
              {item.name}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
