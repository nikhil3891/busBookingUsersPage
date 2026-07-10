'use client';

import { useState, useEffect } from 'react';
import { busService } from '@/services/bus.service';
import { BusDetail } from '@/types/bus';

export default function BusDetailPage({ params }: { params: { id: string } }) {
  const [bus, setBus] = useState<BusDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    busService.getBusById(params.id).then(setBus).finally(() => setLoading(false));
  }, [params.id]);

  if (loading) return <div className="container mx-auto px-4 py-8">Loading...</div>;
  if (!bus) return <div className="container mx-auto px-4 py-8">Bus not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4">{bus.name}</h1>
        <p className="text-gray-600 mb-4">{bus.operatorName}</p>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-2">Departure</h3>
            <p className="text-2xl">{bus.departureTime}</p>
            <p className="text-gray-600">{bus.source}</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Arrival</h3>
            <p className="text-2xl">{bus.arrivalTime}</p>
            <p className="text-gray-600">{bus.destination}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <p className="text-gray-600">Bus Type</p>
            <p className="font-bold">{bus.busType}</p>
          </div>
          <div>
            <p className="text-gray-600">Price</p>
            <p className="font-bold text-2xl">₹{bus.price}</p>
          </div>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded font-bold hover:bg-blue-700">
          Select Seats
        </button>
      </div>
    </div>
  );
}
