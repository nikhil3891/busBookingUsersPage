import axiosInstance from '@/lib/axios';
import { Bus, BusDetail } from '@/types/bus';
import { mockGetAllBuses, mockGetBusById } from '@/lib/mockData';

export const busService = {
  getAllBuses: async (source?: string, destination?: string, date?: string): Promise<Bus[]> => {
    try {
      const response = await axiosInstance.get('/buses', { params: { source, destination, date } });
      return response.data;
    } catch {
      return mockGetAllBuses(source, destination, date);
    }
  },

  getBusById: async (id: string): Promise<BusDetail> => {
    try {
      const response = await axiosInstance.get(`/buses/${id}`);
      return response.data;
    } catch {
      const bus = mockGetBusById(id);
      if (!bus) throw new Error('Bus not found');
      return bus;
    }
  },
  // ...keep any other existing methods below unchanged
};