'use client';

import { useEffect, useState } from 'react';
import { Bus } from '@/types/bus';
import { busService } from '@/services/bus.service';

interface UseBusesOptions {
  source?: string;
  destination?: string;
  date?: string;
  autoFetch?: boolean;
}

export const useBuses = (options: UseBusesOptions = { autoFetch: true }) => {
  const [buses, setBuses] = useState<Bus[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBuses = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await busService.getAllBuses(
        options.source,
        options.destination,
        options.date
      );
      setBuses(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch buses');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (options.autoFetch) {
      fetchBuses();
    }
  }, [options.source, options.destination, options.date, options.autoFetch]);

  return { buses, loading, error, refetch: fetchBuses };
};
