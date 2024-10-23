import { HttpClient } from '@apis/generated/http-client';
import { cleanObject } from '@utils/index';

const httpClient = new HttpClient({
  // @ts-expect-error 'env' does not exist on type 'ImportMeta'
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

httpClient.instance.interceptors.request.use(async (config) => {
  config.paramsSerializer = {
    indexes: null,
  };
  console.log(config.params);
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
    if (error.response) {
      return Promise.reject(error.response.data);
    }

    return Promise.reject(error.message);
  },
);

export default httpClient;
