import { LoaderPinwheelIcon } from "lucide-react";

export default function ComingSoon() {
  return (
    <section className="flex flex-col gap-sm justify-center items-center px py w-full h-screen text-primary">
      <h2 className="">Coming Soon</h2>
      <LoaderPinwheelIcon className="animate-spin w-20 h-20" />
    </section>
  );
}
