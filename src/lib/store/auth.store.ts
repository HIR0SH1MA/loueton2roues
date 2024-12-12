import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import Cookies from 'js-cookie';
import * as authApi from '../api/auth';

interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, remember?: boolean) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  getCurrentUser: () => Promise<void>;
}

interface RegisterData {
  email: string;
  password: string;
  username: string;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: true,

      login: async (email, password, remember = false) => {
        try {
          const { token, user } = await authApi.login(email, password);
          
          if (remember) {
            Cookies.set('auth_token', token, { expires: 30 });
          } else {
            Cookies.set('auth_token', token);
          }
          
          set({ user, isAuthenticated: true });
        } catch (error) {
          throw error;
        }
      },

      register: async (data) => {
        try {
          const { token, user } = await authApi.register(data);
          
          Cookies.set('auth_token', token);
          set({ user, isAuthenticated: true });
        } catch (error) {
          throw error;
        }
      },

      logout: () => {
        Cookies.remove('auth_token');
        set({ user: null, isAuthenticated: false });
        window.location.href = '/';
      },

      getCurrentUser: async () => {
        try {
          const token = Cookies.get('auth_token');
          if (!token) {
            set({ isLoading: false });
            return;
          }

          const user = await authApi.getCurrentUser(token);
          set({ user, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          Cookies.remove('auth_token');
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user }),
    }
  )
);