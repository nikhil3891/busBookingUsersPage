'use client';

import { SeatLayout } from '@/components/seat-layout/SeatLayout';
import { BookingSummary } from '@/components/booking-summary/BookingSummary';

export default function SeatsPage({ params }: { params: { tripId: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Select Your Seats</h1>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <SeatLayout busId={params.tripId} />
        </div>
        <div>
          <BookingSummary />
        </div>
      </div>
    </div>
  );
}
