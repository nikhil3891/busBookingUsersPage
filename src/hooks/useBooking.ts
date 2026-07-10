'use client';

import { useBookingStore } from '@/store/bookingStore';
import { bookingService } from '@/services/booking.service';
import { useState } from 'react';

export const useBooking = () => {
  const { booking, selectedSeats, passengers, totalPrice, clearBooking, ...actions } =
    useBookingStore();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitBooking = async () => {
    setSubmitting(true);
    setError(null);
    try {
      if (!booking || selectedSeats.length === 0 || passengers.length === 0) {
        throw new Error('Incomplete booking data');
      }

      const response = await bookingService.createBooking({
        ...booking,
        seats: selectedSeats,
        passengers,
        totalPrice,
      });

      clearBooking();
      return response;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Booking failed';
      setError(message);
      throw err;
    } finally {
      setSubmitting(false);
    }
  };

  return {
    booking,
    selectedSeats,
    passengers,
    totalPrice,
    submitting,
    error,
    submitBooking,
    clearBooking,
    ...actions,
  };
};
