"use client";

import { v4 as uuidv4 } from "uuid";
import { Fragment, useState } from "react";
import { useEditorStore } from "@/store/store";
import { styles } from "@/components/ui/pdfStyles";
import { GripVerticalIcon, PlusCircleIcon } from "lucide-react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { blocks as blockTypes } from "@/constants/data";

export default function EditorCanvas() {
  const blocks = useEditorStore((state) => state.blocks);
  const reorderBlocks = useEditorStore((state) => state.reorderBlocks);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      const oldIndex = blocks.findIndex((block) => block.id === active.id);
      const newIndex = blocks.findIndex((block) => block.id === over.id);

      reorderBlocks(oldIndex, newIndex);
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={blocks} strategy={verticalListSortingStrategy}>
        <section className="p-md flex-1 overflow-scroll bg-dark/10" style={{ boxShadow: "" }}>
          <div style={styles.page}>
            {blocks.map((block, i) => (
              <Fragment key={block.id}>
                <Divider index={i} />
                <BlockWrapper id={block.id} data={block} />
              </Fragment>
            ))}
            <Divider index={blocks.length} />
          </div>
          <br />
          <div style={styles.page} />
        </section>
      </SortableContext>
    </DndContext>
  );
}

const BlockWrapper = ({ id, data }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="py-sm group flex items-center">
      <GripVerticalIcon
        className="w-0 cursor-grab text-dark/50 transition-all active:cursor-grabbing group-hover:w-6"
        {...attributes}
        {...listeners}
      />
      <RenderBlock block={data} />
    </div>
  );
};

const Divider = ({ index }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="relative">
      <div className="group absolute top-1/2 flex h-6 w-full -translate-y-1/2 items-center justify-center transition-all">
        <div className="relative flex h-0.5 w-full items-center justify-center rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100">
          <PlusCircleIcon
            onClick={toggleMenu}
            className="absolute h-5 w-5 cursor-pointer rounded-full bg-primary text-light transition-transform hover:scale-150"
          />
        </div>
      </div>
      {isOpen ? <CreateBlock toggleMenu={toggleMenu} index={index} /> : null}
    </div>
  );
};

const CreateBlock = ({ toggleMenu, index }) => {
  const addBlockAt = useEditorStore((state) => state.addBlockAt);

  const handleAddBlock = (newBlock) => {
    addBlockAt(index, newBlock);
    toggleMenu();
  };

  return (
    <section className="relative">
      <div onClick={toggleMenu} className="fixed left-0 top-0 z-40 h-full w-full cursor-pointer bg-dark/50" />
      <nav className="p-xs gap-xs fixed left-1/2 top-1/2 z-50 grid -translate-x-1/2 -translate-y-1/2 grid-cols-2 rounded-xl border bg-light shadow-lg">
        {blockTypes.map((block, i) => (
          <div
            key={i}
            onClick={() =>
              handleAddBlock({
                id: uuidv4(),
                type: block.name,
                content: { value: "This is heading" },
                settings: { level: "h2" },
              })
            }
            className="gap-xs p-xs flex cursor-pointer select-none flex-col items-center justify-center rounded-lg text-sm transition-all hover:scale-105 hover:bg-primary/5 active:bg-primary/20"
          >
            <block.icon className="h-6 w-6 text-dark/60" />
            <p className="text-sm">{block.name}</p>
          </div>
        ))}
      </nav>
    </section>
  );
};

const RenderBlock = ({ block }) => {
  switch (block.type) {
    case "Headings":
      return <HeadingBlock data={block} />;
    case "Paragraph":
      return <ParagraphBlock data={block} />;
    case "Image":
      return <ImageBlock data={block} />;
    default:
      return null;
  }
};

const HeadingBlock = ({ data }) => {
  const [settingsMenu, setSettingsMenu] = useState(false);
  const [block, setBlock] = useState(data);

  const styles = {
    color: block.settings.color,
    fontStyle: block.settings.fontStyle,
  };

  function toggleSettingsMenu() {
    setSettingsMenu((prev) => !prev);
  }

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

  function toggleItalic() {
    if (block.settings.fontStyle === "italic") setBlock({ ...block, settings: { ...block.settings, fontStyle: "" } });
    else setBlock({ ...block, settings: { ...block.settings, fontStyle: "italic" } });
  }

  return (
    <>
      {settingsMenu ? (
        <section className="relative">
          <div
            onClick={toggleSettingsMenu}
            className="fixed left-0 top-0 z-40 h-full w-full cursor-pointer bg-dark/50"
          />
          <div className="p-xs gap-xs fixed left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-sm rounded-xl border bg-light shadow-lg">
            <span className="border-b-2 p-xs">Heading Settings</span>
            <select
              value={block.settings.level}
              onChange={(e) => setBlock({ ...block, settings: { ...block.settings, level: e.target.value } })}
            >
              <option value="h1">H1</option>
              <option value="h2">H2</option>
              <option value="h3">H3</option>
              <option value="h4">H4</option>
              <option value="h5">H5</option>
              <option value="h5">H6</option>
            </select>
            <span className="flex gap-xs">
              <input
                id="fontStyleId"
                className="w-fit"
                onChange={toggleItalic}
                checked={block.settings.fontStyle === "italic"}
                type="checkbox"
              />
              <label htmlFor="fontStyleId">Italic</label>
            </span>
          </div>
        </section>
      ) : null}
      {renderHeading()}
    </>
  );
};

const ParagraphBlock = () => {
  return renderHeading();
};

const ImageBlock = () => {
  return <h1></h1>;
};
