'use client';

import { BookingSummary } from '@/components/booking-summary/BookingSummary';

export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Passenger Details</h2>
            <p className="text-gray-600">Enter passenger information here</p>
          </div>
        </div>
        <div>
          <BookingSummary />
        </div>
      </div>
    </div>
  );
}
