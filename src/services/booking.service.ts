import axiosInstance from '@/lib/axios';
import { Booking } from '@/types/booking';

export const bookingService = {
  createBooking: async (bookingData: Partial<Booking>): Promise<Booking> => {
    const response = await axiosInstance.post('/bookings', bookingData);
    return response.data;
  },

  getBookingById: async (id: string): Promise<Booking> => {
    const response = await axiosInstance.get(`/bookings/${id}`);
    return response.data;
  },

  getUserBookings: async (userId: string): Promise<Booking[]> => {
    const response = await axiosInstance.get(`/bookings/user/${userId}`);
    return response.data;
  },

  cancelBooking: async (id: string): Promise<void> => {
    await axiosInstance.delete(`/bookings/${id}`);
  },

  updateBooking: async (id: string, data: Partial<Booking>): Promise<Booking> => {
    const response = await axiosInstance.put(`/bookings/${id}`, data);
    return response.data;
  },
};
