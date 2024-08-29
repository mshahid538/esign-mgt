"use client";

import { BoldIcon, Captions, Trash2Icon, UnderlineIcon } from "lucide-react";
import { CheckboxBtn, Input, Number } from "@/components/ui/input";
import { useEditorStore } from "@/store/store";
import { useState } from "react";
import PanelModal from "@/components/ui/panelModal";
import Image from "next/image";

export default function ImageBlock({ data }) {
  const [settingsMenu, setSettingsMenu] = useState(false);
  const removeBlock = useEditorStore((state) => state.removeBlock);
  const updateBlock = useEditorStore((state) => state.updateBlock);
  const block = useEditorStore((state) => state.blocks.find((b) => b.id === data.id));

  const styles = {
    padding: `${block.settings.paddingX}px ${block.settings.paddingY}px`,
    borderRadius: block.settings.borderRadius,
  };

  function toggleSettingsMenu() {
    setSettingsMenu((prev) => !prev);
  }

  const handleBlockSettingsUpdate = (newSettings) => {
    updateBlock({ ...block, settings: { ...block.settings, ...newSettings } });
  };

  return (
    <>
      {settingsMenu ? (
        <PanelModal label="Image Settings" isOpen={settingsMenu} togglePanel={toggleSettingsMenu}>
          <div className="gap-xs flex w-60 flex-col">
            <Input
              type="text"
              label="Image Url"
              value={block.content.url}
              onChange={(e) => updateBlock({ ...block, content: { ...block.content, url: e.target.value } })}
            />
            <Number
              type="text"
              label="Padding"
              min={0}
              max={100}
              value={parseInt(block.settings.paddingX) || 0}
              onChange={(e) => handleBlockSettingsUpdate({ paddingX: e.target.value })}
              increment={() =>
                handleBlockSettingsUpdate({ paddingX: block.settings.paddingX ? block.settings.paddingX + 1 : 1 })
              }
              decrement={() =>
                handleBlockSettingsUpdate({
                  paddingX: block.settings.paddingX
                    ? block.settings.paddingX > 0
                      ? block.settings.paddingX - 1
                      : block.settings.paddingX
                    : 0,
                })
              }
            />
            <Number
              type="text"
              value={parseInt(block.settings.paddingY) || 0}
              onChange={(e) => handleBlockSettingsUpdate({ paddingY: e.target.value })}
              increment={() =>
                handleBlockSettingsUpdate({ paddingY: block.settings.paddingY ? block.settings.paddingY + 1 : 1 })
              }
              decrement={() =>
                handleBlockSettingsUpdate({
                  paddingY: block.settings.paddingY
                    ? block.settings.paddingY > 0
                      ? block.settings.paddingY - 1
                      : block.settings.paddingY
                    : 0,
                })
              }
            />

            <span className="gap-xs grid grid-cols-6 pt-5">
              {/* <CheckboxBtn
                icon={<UnderlineIcon />}
                checked={styles.textDecoration === "underline"}
                onChange={() =>
                  handleBlockSettingsUpdate({
                    textDecoration: styles.textDecoration === "underline" ? "" : "underline",
                  })
                }
              /> */}
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
      <div onClick={toggleSettingsMenu} className="h-full w-full">
        {block.content.url ? (
          <img style={styles} src={block.content.url} width={100} height={100} alt="" />
        ) : (
          <span>Select an image</span>
        )}
      </div>
    </>
  );
}
