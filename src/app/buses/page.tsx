'use client';

import { BusCard } from '@/components/bus-card/BusCard';
import { BusCardSkeleton } from '@/components/bus-card/BusCardSkeleton';
import { useBuses } from '@/hooks/useBuses';
import { useSearchStore } from '@/store/searchStore';

export default function BusesPage() {
  const { filters, clearFilters } = useSearchStore();
  const { buses, loading, error, refetch } = useBuses({
    source: filters.source,
    destination: filters.destination,
    date: filters.date,
    autoFetch: true,
  });

  const hasActiveSearch = Boolean(filters.source || filters.destination || filters.date);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Buses</h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4 flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => refetch()} className="text-sm font-semibold underline hover:no-underline">
            Retry
          </button>
        </div>
      )}

      {loading && (
        <div className="grid gap-4">
          <BusCardSkeleton />
          <BusCardSkeleton />
          <BusCardSkeleton />
        </div>
      )}

      {!loading && !error && buses.length === 0 && (
        <div className="text-center py-16 text-gray-600 border rounded-lg bg-white">
          <p className="text-lg font-semibold mb-1">
            {hasActiveSearch ? 'No buses match this search' : 'No buses to show yet'}
          </p>
          <p className="text-sm mb-4">
            {hasActiveSearch ? 'Try a different route, or widen your travel date.' : 'Search for a route above to see available buses.'}
          </p>
          {hasActiveSearch && (
            <button onClick={clearFilters} className="text-blue-600 font-semibold hover:underline">
              Clear filters
            </button>
          )}
        </div>
      )}

      {!loading && !error && buses.length > 0 && (
        <div className="grid gap-4">
          {buses.map((bus) => (
            <BusCard key={bus.id} bus={bus} />
          ))}
        </div>
      )}
    </div>
  );
}