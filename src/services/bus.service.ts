import axiosInstance from '@/lib/axios';
import { Bus, BusDetail } from '@/types/bus';

export const busService = {
  getAllBuses: async (
    source?: string,
    destination?: string,
    date?: string
  ): Promise<Bus[]> => {
    const response = await axiosInstance.get('/buses', {
      params: { source, destination, date },
    });
    return response.data;
  },

  getBusById: async (id: string): Promise<BusDetail> => {
    const response = await axiosInstance.get(`/buses/${id}`);
    return response.data;
  },

  searchBuses: async (
    source: string,
    destination: string,
    date: string
  ): Promise<Bus[]> => {
    const response = await axiosInstance.get('/buses/search', {
      params: { source, destination, date },
    });
    return response.data;
  },
};
