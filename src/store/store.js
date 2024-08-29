import { create } from "zustand";
import { arrayMove } from "@dnd-kit/sortable";

export const useEditorStore = create((set) => ({
  blocks: [],
  addBlock: (newBlock) => set((state) => ({ blocks: [...state.blocks, newBlock] })),
  addBlockAt: (index, newBlock) => set((state) => ({ blocks: [...state.blocks.slice(0, index), newBlock, ...state.blocks.slice(index)] })),
  updateBlock: (updatedBlock) => set((state) => ({ blocks: state.blocks.map(block => block.id === updatedBlock.id ? updatedBlock : block) })),
  reorderBlocks: (oldIndex, newIndex) => set((state) => ({ blocks: arrayMove(state.blocks, oldIndex, newIndex) })),
  removeBlock: (blockId) => set((state) => ({ blocks: state.blocks.filter(block => block.id !== blockId) })),
}));
