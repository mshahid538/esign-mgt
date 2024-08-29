"use client";

import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  Trash2Icon,
  UnderlineIcon,
} from "lucide-react";
import { CheckboxBtn, Input, Select } from "@/components/ui/input";
import { useEditorStore } from "@/store/store";
import { useState } from "react";
import PanelModal from "@/components/ui/panelModal";

export default function HeadingBlock({ data }) {
  const [settingsMenu, setSettingsMenu] = useState(false);
  const removeBlock = useEditorStore((state) => state.removeBlock);
  const updateBlock = useEditorStore((state) => state.updateBlock);
  const block = useEditorStore((state) => state.blocks.find((b) => b.id === data.id));

  const styles = {
    color: block.settings.color,
    fontStyle: block.settings.fontStyle,
    textDecoration: block.settings.textDecoration,
    textAlign: block.settings.textAlign || "left",
    fontWeight: block.settings.fontWeight || "normal",
  };

  function toggleSettingsMenu() {
    setSettingsMenu((prev) => !prev);
  }

  const handleBlockSettingsUpdate = (newSettings) => {
    updateBlock({ ...block, settings: { ...block.settings, ...newSettings } });
  };

  const renderHeading = () => {
    switch (block.settings.level) {
      case "h1":
        return (
          <h1 onClick={toggleSettingsMenu} style={styles}>
            {block.content.value}
          </h1>
        );
      case "h2":
        return (
          <h2 onClick={toggleSettingsMenu} style={styles}>
            {block.content.value}
          </h2>
        );
      case "h3":
        return (
          <h3 onClick={toggleSettingsMenu} style={styles}>
            {block.content.value}
          </h3>
        );
      case "h4":
        return (
          <h4 onClick={toggleSettingsMenu} style={styles}>
            {block.content.value}
          </h4>
        );
      case "h5":
        return (
          <h5 onClick={toggleSettingsMenu} style={styles}>
            {block.content.value}
          </h5>
        );
      default:
        return (
          <h6 onClick={toggleSettingsMenu} style={styles}>
            {block.content.value}
          </h6>
        );
    }
  };

  return (
    <>
      {settingsMenu ? (
        <PanelModal label="Heading Settings" isOpen={settingsMenu} togglePanel={toggleSettingsMenu}>
          <div className="gap-xs flex w-60 flex-col">
            <Input
              type="text"
              label="Value"
              value={block.content.value}
              onChange={(e) => updateBlock({ ...block, content: { ...block.content, value: e.target.value } })}
            />
            <div className="gap-xs flex">
              <Select
                className={"flex-1"}
                label="Style"
                value={block.settings.level || "h6"}
                onChange={(e) => handleBlockSettingsUpdate({ level: e.target.value })}
              >
                <option value="h1">H1</option>
                <option value="h2">H2</option>
                <option value="h3">H3</option>
                <option value="h4">H4</option>
                <option value="h5">H5</option>
                <option value="h6">H6</option>
              </Select>
            </div>
            <span className="gap-xs grid grid-cols-6 pt-5">
              <CheckboxBtn
                icon={<BoldIcon />}
                checked={styles.fontWeight === "bold"}
                onChange={() =>
                  handleBlockSettingsUpdate({ fontWeight: styles.fontWeight === "bold" ? "normal" : "bold" })
                }
              />
              <CheckboxBtn
                icon={<UnderlineIcon />}
                checked={styles.textDecoration === "underline"}
                onChange={() =>
                  handleBlockSettingsUpdate({
                    textDecoration: styles.textDecoration === "underline" ? "" : "underline",
                  })
                }
              />
              <CheckboxBtn
                icon={<ItalicIcon />}
                checked={styles.fontStyle === "italic"}
                onChange={() => handleBlockSettingsUpdate({ fontStyle: styles.fontStyle === "italic" ? "" : "italic" })}
              />
              <CheckboxBtn
                icon={<AlignLeftIcon />}
                checked={styles.textAlign === "left"}
                onChange={() => handleBlockSettingsUpdate({ textAlign: "left" })}
              />
              <CheckboxBtn
                icon={<AlignCenterIcon />}
                checked={styles.textAlign === "center"}
                onChange={() => handleBlockSettingsUpdate({ textAlign: "center" })}
              />
              <CheckboxBtn
                icon={<AlignRightIcon />}
                checked={styles.textAlign === "right"}
                onChange={() => handleBlockSettingsUpdate({ textAlign: "right" })}
              />
              <button
                onClick={() => removeBlock(block.id)}
                className="flex h-8 w-8 items-center justify-center rounded bg-dark/10 p-1.5 transition-colors hover:bg-secondary hover:text-light"
              >
                <Trash2Icon />
              </button>
            </span>
          </div>
        </PanelModal>
      ) : null}
      {renderHeading()}
    </>
  );
}
