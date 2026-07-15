import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ContentCardSkeleton() {
  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-lg p-0">
      <Skeleton className="aspect-[16/10] w-full rounded-none" />
      <CardContent className="flex flex-1 flex-col gap-3 p-6">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-6 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="mt-4 h-3 w-1/3" />
      </CardContent>
    </Card>
  );
}