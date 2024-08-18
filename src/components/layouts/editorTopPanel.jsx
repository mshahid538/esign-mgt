import {
  ChevronDownIcon,
  EyeIcon,
  MessageSquareIcon,
  Redo2Icon,
  SettingsIcon,
  Undo2Icon,
  WrenchIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react";

export default function EditorTopPanel() {
  return (
    <section className="px-xs flex items-center gap-md justify-between border-b-[1.5px] border-dark/30 bg-dark/5">
      <div className="flex flex-1 flex-col py-2 font-semibold">
        <p className="text-sm line-clamp-1">Proxili Marketing doc 2034</p>
        <small className="text-xs text-dark/50">Price $150</small>
      </div>
      <div className="gap-sm flex">
        <span className="gap-xs flex items-center">
          <ZoomOutIcon className="icon-btn" />
          <small>100%</small>
          <ZoomInIcon className="icon-btn" />
        </span>
        <span className="gap-xs flex items-center">
          <Undo2Icon className="icon-btn" />
          <Redo2Icon className="icon-btn" />
        </span>
      </div>
      <Menu />
    </section>
  );
}

const Menu = () => {
  const menuItems = [
    { name: "Preview", icon: <EyeIcon className="icon-sm" /> },
    { name: "Comment", icon: <MessageSquareIcon className="icon-sm" /> },
    { name: "Settings", icon: <SettingsIcon className="icon-sm" /> },
    { name: "Tools", icon: <WrenchIcon className="icon-sm" /> },
  ];
  return (
    <nav className="gap-xs flex justify-end flex-1">
      {menuItems.map((item, i) => (
        <span className="flex cursor-pointer gap-2 rounded-md px-3 py-2 hover:bg-light/50" key={i}>
          {item.icon}
          <small>{item.name}</small>
        </span>
      ))}
      <span className="flex cursor-pointer gap-2 rounded-md px-3 py-2 hover:bg-light/50">
        <ChevronDownIcon className="icon-sm" />
        <small>More</small>
      </span>
    </nav>
  );
};
