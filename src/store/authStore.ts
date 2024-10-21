import { UserDetailDto } from '@apis/generated/data-contracts';
import { create } from 'zustand';

interface AuthState {
  user: UserDetailDto | undefined;
  login: (user?: UserDetailDto, accessToken?: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: undefined,
  login: (user?: UserDetailDto, accessToken?: string) => {
    set({ user });
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }
  },

  logout: () => {
    set({ user: undefined });
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
  },
}));

export default useAuthStore;
