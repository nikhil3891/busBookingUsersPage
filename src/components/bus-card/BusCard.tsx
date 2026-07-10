'use client';

import { Bus } from '@/types/bus';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { formatTime, calculateDuration } from '@/lib/helpers';

interface BusCardProps {
  bus: Bus;
}

export const BusCard = ({ bus }: BusCardProps) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-bold">{bus.name}</h3>
          <p className="text-sm text-gray-600">{bus.operatorName}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">₹{bus.price}</p>
          <p className="text-sm text-yellow-500">⭐ {bus.rating}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-3">
        <div>
          <p className="text-xl font-semibold">{formatTime(bus.departureTime)}</p>
          <p className="text-xs text-gray-600">{bus.source}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-600">{calculateDuration(bus.departureTime, bus.arrivalTime)}</p>
          <p className="text-xs">━━━━━</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold">{formatTime(bus.arrivalTime)}</p>
          <p className="text-xs text-gray-600">{bus.destination}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm">
          {bus.availableSeats} seats available | {bus.busType}
        </p>
        <Link
          href={ROUTES.BUS_DETAIL(bus.id)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};
