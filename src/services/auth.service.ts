import axiosInstance from '@/lib/axios';
import { User, AuthState } from '@/types/user';

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export const authService = {
  login: async (payload: LoginPayload): Promise<{ token: string; user: User }> => {
    const response = await axiosInstance.post('/auth/login', payload);
    const { token } = response.data;
    if (token) {
      localStorage.setItem('token', token);
    }
    return response.data;
  },

  register: async (payload: RegisterPayload): Promise<{ token: string; user: User }> => {
    const response = await axiosInstance.post('/auth/register', payload);
    const { token } = response.data;
    if (token) {
      localStorage.setItem('token', token);
    }
    return response.data;
  },

  logout: (): void => {
    localStorage.removeItem('token');
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await axiosInstance.get('/auth/me');
    return response.data;
  },

  updateProfile: async (userId: string, data: Partial<User>): Promise<User> => {
    const response = await axiosInstance.put(`/users/${userId}`, data);
    return response.data;
  },
};
