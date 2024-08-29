import { XIcon } from "lucide-react";

export default function PanelModal({ togglePanel, isOpen, children, label }) {
  if (isOpen)
    return (
      <section className="relative">
        <div onClick={togglePanel} className="fixed left-0 top-0 z-40 h-full w-full cursor-pointer bg-dark/50" />
        <div className="p-xs gap-xs fixed left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col rounded-xl border bg-light shadow-lg">
          {label ? (
            <span className="pt-none pl-none pr-none p-xs flex items-center justify-between border-b">
              <small>{label}</small>
              <XIcon
                onClick={togglePanel}
                className="h-6 w-6 cursor-pointer rounded-full bg-dark/20 p-1 transition-transform hover:scale-110"
              />
            </span>
          ) : null}
          {children}
        </div>
      </section>
    );
  else return null;
}
