import { create } from 'zustand';
import { Booking, Seat, Passenger } from '@/types/booking';

interface BookingState {
  booking: Partial<Booking> | null;
  selectedSeats: Seat[];
  passengers: Passenger[];
  totalPrice: number;
  setBooking: (booking: Partial<Booking>) => void;
  addSeat: (seat: Seat) => void;
  removeSeat: (seatId: string) => void;
  addPassenger: (passenger: Passenger) => void;
  removePassenger: (passengerId: string) => void;
  clearBooking: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  booking: null,
  selectedSeats: [],
  passengers: [],
  totalPrice: 0,

  setBooking: (booking) => {
    set({ booking });
  },

  addSeat: (seat) => {
    set((state) => {
      const newSeats = [...state.selectedSeats, seat];
      const newPrice = newSeats.reduce((sum, s) => sum + s.price, 0);
      return { selectedSeats: newSeats, totalPrice: newPrice };
    });
  },

  removeSeat: (seatId) => {
    set((state) => {
      const newSeats = state.selectedSeats.filter((s) => s.id !== seatId);
      const newPrice = newSeats.reduce((sum, s) => sum + s.price, 0);
      return { selectedSeats: newSeats, totalPrice: newPrice };
    });
  },

  addPassenger: (passenger) => {
    set((state) => ({ passengers: [...state.passengers, passenger] }));
  },

  removePassenger: (passengerId) => {
    set((state) => ({
      passengers: state.passengers.filter((p) => p.id !== passengerId),
    }));
  },

  clearBooking: () => {
    set({
      booking: null,
      selectedSeats: [],
      passengers: [],
      totalPrice: 0,
    });
  },
}));
