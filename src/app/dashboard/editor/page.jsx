import EditorLeftPanel from "@/components/layouts/editorLeftPanel";
import EditorRightPanel from "@/components/layouts/editorRightPanel";
import EditorTopPanel from "@/components/layouts/editorTopPanel";
import EditorCanvas from "@/components/sections/editorCanvas";
import EditorDndWrapper from "@/components/wrappers/DndWrapper";

export default function page() {
  return (
    <main className="flex flex-col h-full overflow-hidden">
      <EditorTopPanel />
      <div className="relative flex flex-1 h-full overflow-auto">
        <EditorLeftPanel />
        <EditorDndWrapper>
          <EditorCanvas />
        </EditorDndWrapper>
        <EditorRightPanel />
      </div>
    </main>
  );
}
