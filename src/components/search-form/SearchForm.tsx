'use client';

import { useState } from 'react';
import { useSearchStore } from '@/store/searchStore';
import { ROUTES } from '@/constants/routes';
import { useRouter } from 'next/navigation';

export const SearchForm = () => {
  const router = useRouter();
  const { filters, setFilters } = useSearchStore();
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(localFilters);
    router.push(ROUTES.BUSES);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2">From</label>
          <input
            type="text"
            name="source"
            value={localFilters.source}
            onChange={handleChange}
            placeholder="Departure city"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">To</label>
          <input
            type="text"
            name="destination"
            value={localFilters.destination}
            onChange={handleChange}
            placeholder="Arrival city"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={localFilters.date}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold"
          >
            Search Buses
          </button>
        </div>
      </div>
    </form>
  );
};
