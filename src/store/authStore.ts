import { UserDetailDto } from '@apis/generated/data-contracts';
import { userInit } from '@store/constant';
import { create } from 'zustand';

interface AuthState {
  user: UserDetailDto;
  login: (user: UserDetailDto, accessToken?: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: userInit,
  login: (user: UserDetailDto, accessToken?: string) => {
    set({ user });
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }
  },

  logout: () => {
    set({ user: userInit });
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
  },
}));

export default useAuthStore;
