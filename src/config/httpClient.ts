import { HttpClient } from '@api-swagger/http-client';
import useAuthStore from '@store/authStore';
import { cleanObject } from '@utils/index';
import axios from 'axios';

// @ts-expect-error No eslint
const API_URL = import.meta.env.VITE_API_URL + import.meta.env.VITE_API_PREFIX;

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const httpClient = new HttpClient({
  baseURL: API_URL,
  withCredentials: true,
});

httpClient.instance.interceptors.request.use(async (config) => {
  config.paramsSerializer = {
    indexes: null,
  };

  if (config.params) {
    config.params = cleanObject(config.params);
  }

  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

httpClient.instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const { getToken, logout, login } = useAuthStore();

    if (error.response.status === 401 || error.response.status === 403) {
      const reponse = await axiosInstance.post('/auth/refresh-token');
      login(reponse.data.accessToken, reponse.data.expiresIn);

      const accessToken = getToken();
      try {
        httpClient.instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        return httpClient.instance(originalRequest);
      } catch (refreshError) {
        logout();
        return Promise.reject(refreshError);
      }
    }
  },
);

export default httpClient;
