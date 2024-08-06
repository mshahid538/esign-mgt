import EditorHeader from "@/components/layouts/editorHeader";

export default function layout({ children }) {
  return (
    <div className="h-dvh flex flex-col">
      <EditorHeader />
      {children}
    </div>
  );
}
