import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex justify-center space-y-2">
      <Skeleton className="h-[200px] w-[200px] rounded-xl" />
    </div>
  )
}