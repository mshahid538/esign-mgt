import { PanelTopCloseIcon, PanelTopOpenIcon } from "lucide-react";

export default function EditorPanelBtn({ onClick, isOpen }) {
  return (
    <div className="overflow-hidden rounded-b-lg bg-light">
      <button
        onClick={onClick}
        className="group flex w-full items-center justify-center bg-dark/5 p-2 transition-colors hover:bg-primary/10 hover:text-primary"
      >
        {isOpen ? (
          <PanelTopCloseIcon className="icon transition-transform group-hover:scale-110" />
        ) : (
          <PanelTopOpenIcon className="icon transition-transform group-hover:scale-110" />
        )}
      </button>
    </div>
  );
}
