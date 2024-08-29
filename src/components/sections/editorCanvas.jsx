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
import PanelModal from "../ui/panelModal";
import HeadingBlock from "@/components/sections/blocks/headingBlock";
import ParagraphBlock from "./blocks/paragraphBlock";
import ListBlock from "./blocks/listBlock";
import ImageBlock from "./blocks/imageBlock";

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
      <div className="h-auto flex-1">
        <RenderBlock block={data} />
      </div>
    </div>
  );
};

const Divider = ({ index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const addBlockAt = useEditorStore((state) => state.addBlockAt);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  const handleAddBlock = (newBlock) => {
    addBlockAt(index, newBlock);
    toggleMenu();
  };

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
      <PanelModal togglePanel={toggleMenu} isOpen={isOpen}>
        <nav className="gap-xs grid grid-cols-2">
          {blockTypes.map((block, i) => (
            <div
              key={i}
              onClick={() =>
                handleAddBlock({
                  id: uuidv4(),
                  type: block.name,
                  content: { value: block.name },
                  settings: {},
                })
              }
              className="gap-xs p-xs flex cursor-pointer select-none flex-col items-center justify-center rounded-lg text-sm transition-all hover:scale-105 hover:bg-primary/5 active:bg-primary/20"
            >
              <block.icon className="h-6 w-6 text-dark/60" />
              <p className="text-sm">{block.name}</p>
            </div>
          ))}
        </nav>
      </PanelModal>
    </div>
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
    case "List":
      return <ListBlock data={block} />;
    default:
      return <DefaultBlock data={block} />;
  }
};

const DefaultBlock = ({ data }) => {
  return <h3>{data.type}</h3>;
};
