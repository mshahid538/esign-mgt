import EditorLeftPanel from "@/components/layouts/editorLeftPanel";
import EditorRightPanel from "@/components/layouts/editorRightPanel";
import EditorTopPanel from "@/components/layouts/editorTopPanel";
import pdfSampleImage from "@/../public/images/pdf-example.png";
import Image from "next/image";

export default function Editor() {
  return (
    <>
      <EditorTopPanel />
      <div className="relative flex flex-1 h-full overflow-auto">
        <EditorLeftPanel />
        <div className="flex-1 p-4 overflow-scroll">
          <h3>Selected PDF document goes here</h3>
          <Image className="w-full" src={pdfSampleImage} alt="" />
        </div>
        <EditorRightPanel />
      </div>
    </>
  );
}
