'use client';

import { BusCard } from '@/components/bus-card/BusCard';
import { useBuses } from '@/hooks/useBuses';
import { useSearchStore } from '@/store/searchStore';

export default function BusesPage() {
  const { filters } = useSearchStore();
  const { buses, loading, error } = useBuses({
    source: filters.source,
    destination: filters.destination,
    date: filters.date,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Buses</h1>

      {error && <div className="bg-red-100 text-red-700 p-4 rounded mb-4">{error}</div>}

      {loading && <div className="text-center py-8">Loading buses...</div>}

      {!loading && buses.length === 0 && (
        <div className="text-center py-8 text-gray-600">No buses found for your search</div>
      )}

      <div className="grid gap-4">
        {buses.map((bus) => (
          <BusCard key={bus.id} bus={bus} />
        ))}
      </div>
    </div>
  );
}
