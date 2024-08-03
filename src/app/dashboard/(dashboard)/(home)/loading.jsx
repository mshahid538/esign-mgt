import Skeleton from "@/components/ui/skeleton";

export default function page() {
  return (
    <main className="flex flex-col p-xs gap-sm">
      <section className="">
        <Skeleton className="h-10 w-full" />
      </section>
      <section className="flex gap-sm overflow-scroll scroll-none">
        <Skeleton className="h-20 min-w-20" />
        <Skeleton className="h-20 min-w-20" />
        <Skeleton className="h-20 min-w-20" />
        <Skeleton className="h-20 min-w-20" />
        <Skeleton className="h-20 min-w-20" />
        <Skeleton className="h-20 min-w-20" />
        <Skeleton className="h-20 min-w-20" />
      </section>
      <section className="flex flex-wrap gap-sm">
        <Skeleton className="h-60 w-60 flex-grow" />
        <Skeleton className="h-60 w-60 flex-grow" />
        <Skeleton className="h-60 w-60 flex-grow" />
        <Skeleton className="h-60 w-60 flex-grow" />
        <Skeleton className="h-60 w-60 flex-grow" />
        <Skeleton className="h-60 w-60 flex-grow" />
        <Skeleton className="h-60 w-60 flex-grow" />
        <Skeleton className="h-60 w-60 flex-grow" />
      </section>
    </main>
  );
}
