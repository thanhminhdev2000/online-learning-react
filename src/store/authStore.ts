import { UserDetailDto } from '@api-swagger/data-contracts';
import { userInit } from '@store/constant';
import { create } from 'zustand';
import { authenticationApi } from '../hooks/authentication.hook';

interface AuthState {
  user: UserDetailDto;
  setToken: (accessToken: string, expiresIn: number) => void;
  checkTokenExpiration: () => void;
  login: (user: UserDetailDto, accessToken?: string) => void;
  logout: () => void;
  getUser: () => UserDetailDto;
  getToken: () => string;
}

const useAuthStore = create<AuthState>((set, get) => ({
  user: userInit as UserDetailDto,
  setToken: (accessToken: string, expiresIn: number) => {
    const tokenExpirationTime = Date.now() + expiresIn * 1000;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('tokenExpirationTime', tokenExpirationTime.toString());

    const timeLeft = expiresIn * 1000 - 60000;

    setTimeout(() => {
      get().checkTokenExpiration();
    }, timeLeft);
  },
  checkTokenExpiration: async () => {
    const tokenExpirationTime = JSON.parse(localStorage.getItem('tokenExpirationTime') as string);
    const currentTime = Date.now();

    if (tokenExpirationTime && currentTime >= Number(tokenExpirationTime) - 60000) {
      const { accessToken, expiresIn } = await authenticationApi.refreshToken();
      get().setToken(accessToken as string, expiresIn as number);
    }
  },
  login: (user: UserDetailDto) => {
    set({ user });
    localStorage.setItem('user', JSON.stringify(user));
  },
  logout: () => {
    set({ user: userInit as UserDetailDto });
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('tokenExpirationTime');
  },
  getUser: () => {
    const user: UserDetailDto = JSON.parse(localStorage.getItem('user') as string);
    return user;
  },
  getToken() {
    return JSON.parse(localStorage.getItem('accessToken') as string);
  },
}));

export default useAuthStore;
