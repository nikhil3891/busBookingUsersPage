import { create } from 'zustand';
import { User, AuthState } from '@/types/user';
import { authService } from '@/services/auth.service';

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, phone: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  token: undefined,

  login: async (email, password) => {
    try {
      const { user, token } = await authService.login({ email, password });
      set({ user, isAuthenticated: true, token });
    } catch (error) {
      throw error;
    }
  },

  register: async (name, email, password, phone) => {
    try {
      const { user, token } = await authService.register({ name, email, password, phone });
      set({ user, isAuthenticated: true, token });
    } catch (error) {
      throw error;
    }
  },

  logout: () => {
    authService.logout();
    set({ user: null, isAuthenticated: false, token: undefined });
  },

  setUser: (user) => {
    set({ user, isAuthenticated: !!user });
  },

  checkAuth: async () => {
    try {
      const user = await authService.getCurrentUser();
      set({ user, isAuthenticated: true });
    } catch {
      set({ user: null, isAuthenticated: false, token: undefined });
    }
  },
}));
