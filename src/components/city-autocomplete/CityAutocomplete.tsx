'use client';

import { useEffect, useRef, useState } from 'react';
import { INDIAN_CITIES } from '@/data/cities';

interface CityAutocompleteProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (city: string) => void;
  excludeCity?: string;
}

export const CityAutocomplete = ({
  label,
  placeholder,
  value,
  onChange,
  excludeCity,
}: CityAutocompleteProps) => {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filtered =
    query.trim().length > 0
      ? INDIAN_CITIES.filter(
          (city) =>
            city.toLowerCase().includes(query.trim().toLowerCase()) && city !== excludeCity
        ).slice(0, 8)
      : [];

  const selectCity = (city: string) => {
    setQuery(city);
    onChange(city);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || filtered.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((i) => (i + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((i) => (i - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      selectCity(filtered[highlightedIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onChange(e.target.value);
          setIsOpen(true);
          setHighlightedIndex(0);
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      {isOpen && filtered.length > 0 && (
        <ul className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg max-h-56 overflow-auto">
          {filtered.map((city, index) => (
            <li key={city}>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => selectCity(city)}
                className={`w-full text-left px-3 py-2 text-sm ${
                  index === highlightedIndex ? 'bg-blue-50 text-blue-700' : 'text-gray-800'
                } hover:bg-blue-50 hover:text-blue-700`}
              >
                {city}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};