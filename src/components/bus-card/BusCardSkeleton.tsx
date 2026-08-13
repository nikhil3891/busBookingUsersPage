export const BusCardSkeleton = () => {
  return (
    <div className="border rounded-lg p-4 animate-pulse">
      <div className="flex justify-between items-start mb-3">
        <div className="space-y-2">
          <div className="h-4 w-40 bg-gray-200 rounded" />
          <div className="h-3 w-24 bg-gray-200 rounded" />
        </div>
        <div className="space-y-2 text-right">
          <div className="h-5 w-16 bg-gray-200 rounded ml-auto" />
          <div className="h-3 w-10 bg-gray-200 rounded ml-auto" />
        </div>
      </div>
      <div className="flex justify-between items-center mb-3">
        <div className="space-y-2">
          <div className="h-5 w-14 bg-gray-200 rounded" />
          <div className="h-3 w-16 bg-gray-200 rounded" />
        </div>
        <div className="h-3 w-16 bg-gray-200 rounded" />
        <div className="space-y-2 text-right">
          <div className="h-5 w-14 bg-gray-200 rounded ml-auto" />
          <div className="h-3 w-16 bg-gray-200 rounded ml-auto" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="h-3 w-32 bg-gray-200 rounded" />
        <div className="h-9 w-24 bg-gray-200 rounded" />
      </div>
    </div>
  );
};