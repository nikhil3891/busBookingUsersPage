import { create } from 'zustand';

interface SearchFilters {
  source: string;
  destination: string;
  date: string;
  busType?: string;
  priceRange?: { min: number; max: number };
  rating?: number;
}

interface SearchState {
  filters: SearchFilters;
  setFilters: (filters: Partial<SearchFilters>) => void;
  clearFilters: () => void;
}

const defaultFilters: SearchFilters = {
  source: '',
  destination: '',
  date: '',
};

export const useSearchStore = create<SearchState>((set) => ({
  filters: defaultFilters,

  setFilters: (newFilters) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    }));
  },

  clearFilters: () => {
    set({ filters: defaultFilters });
  },
}));
