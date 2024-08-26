"use client";

import { Fragment } from "react";
import { useEditorStore } from "@/store/store";
import { styles } from "@/components/ui/pdfStyles";
import { GripVerticalIcon, PlusCircleIcon } from "lucide-react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function EditorCanvas() {
  const blocks = useEditorStore((state) => state.blocks);
  const reorderBlocks = useEditorStore((state) => state.reorderBlocks);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
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
            {blocks.map((block) => (
              <Fragment key={block.id}>
                <Divider />
                <SortableBlock id={block.id} data={block} />
              </Fragment>
            ))}
            <Divider />
          </div>
          <br />
          <div style={styles.page} />
        </section>
      </SortableContext>
    </DndContext>
  );
}

const Divider = () => {
  return (
    <div className="relative">
      <div className="group absolute top-1/2 flex h-6 w-full -translate-y-1/2 items-center justify-center transition-all">
        <div className="relative flex h-0.5 w-full items-center justify-center rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100">
          <PlusCircleIcon className="absolute h-5 w-5 cursor-pointer rounded-full bg-primary text-light transition-transform hover:scale-125" />
        </div>
      </div>
    </div>
  );
};

const SortableBlock = ({ id, data }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="py-sm flex items-center">
      <GripVerticalIcon className="text-dark/50 cursor-grab active:cursor-grabbing" {...attributes} {...listeners} />
      <h6>{data.name}</h6>
    </div>
  );
};
