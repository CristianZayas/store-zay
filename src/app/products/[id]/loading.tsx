import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6">
        <Skeleton className="h-5 w-32" />

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          <Skeleton className="aspect-square w-full rounded-lg" />
          <div className="flex flex-col gap-4">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-8 w-full sm:w-3/4" />
            <Skeleton className="h-5 w-full sm:w-1/2" />
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-4" />
              ))}
              <Skeleton className="ml-2 h-4 w-20" />
            </div>
            <Skeleton className="h-px w-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-px w-full" />
            <Skeleton className="h-10 w-28" />
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-32 rounded-lg" />
              <Skeleton className="h-10 flex-1 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
