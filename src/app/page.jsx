import ComingSoon from "@/components/sections/comingSoon";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px py flex flex-col justify-center items-center h-screen">
      <ComingSoon />
      <Link className="btn-p mx-auto" href={"/dashboard"}>
        Dashboard
      </Link>
    </main>
  );
}
