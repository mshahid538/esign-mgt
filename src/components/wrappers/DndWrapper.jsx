"use client";

import { DndContext } from "@dnd-kit/core";

export default function EditorDndWrapper({ children }) {
  return <DndContext>{children}</DndContext>;
}
