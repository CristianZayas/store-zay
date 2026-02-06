import { Skeleton } from "@/components/ui/skeleton";

export default function HomeLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-9 w-48 sm:h-10 sm:w-64" />
              <Skeleton className="h-5 w-64 sm:w-80" />
            </div>
            <Skeleton className="h-10 w-full max-w-md rounded-full" />
          </div>
          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-9 w-20 flex-shrink-0 rounded-full sm:w-24" />
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-3 rounded-lg border border-border bg-card p-4">
              <Skeleton className="aspect-square w-full rounded-lg" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-4 w-full sm:w-3/4" />
              <div className="flex items-center justify-between pt-2">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-9 w-20 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
