'use client';

import { useState } from 'react';
import { useSearchStore } from '@/store/searchStore';
import { ROUTES } from '@/constants/routes';
import { useRouter } from 'next/navigation';
import { CityAutocomplete } from '@/components/city-autocomplete/CityAutocomplete';

export const SearchForm = () => {
  const router = useRouter();
  const { filters, setFilters } = useSearchStore();
  const [localFilters, setLocalFilters] = useState(filters);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalFilters((prev) => ({ ...prev, date: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(localFilters);
    router.push(ROUTES.BUSES);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <CityAutocomplete
          label="From"
          placeholder="Departure city"
          value={localFilters.source}
          onChange={(city) => setLocalFilters((prev) => ({ ...prev, source: city }))}
          excludeCity={localFilters.destination}
        />
        <CityAutocomplete
          label="To"
          placeholder="Arrival city"
          value={localFilters.destination}
          onChange={(city) => setLocalFilters((prev) => ({ ...prev, destination: city }))}
          excludeCity={localFilters.source}
        />
        <div>
          <label className="block text-sm font-semibold mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={localFilters.date}
            onChange={handleDateChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
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