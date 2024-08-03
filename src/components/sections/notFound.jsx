import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-col gap-sm items-center justify-center w-full h-screen px py text-primary">
      <h2>Page Not Found</h2>
      <AlertTriangle className="w-20 h-20" />
    </section>
  );
}
