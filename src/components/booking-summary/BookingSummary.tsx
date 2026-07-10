'use client';

import { useBooking } from '@/hooks/useBooking';

export const BookingSummary = () => {
  const { selectedSeats, passengers, totalPrice } = useBooking();

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h2 className="text-xl font-bold mb-4">Booking Summary</h2>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Selected Seats</h3>
        <p className="text-gray-700">{selectedSeats.length} seat(s) selected</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Passengers</h3>
        <p className="text-gray-700">{passengers.length} passenger(s)</p>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total Price:</span>
          <span className="text-blue-600">₹{totalPrice}</span>
        </div>
      </div>
    </div>
  );
};
