import { HttpClient } from '@apis/generated/http-client';

const httpClient = new HttpClient({
  baseURL: 'http://localhost:8080/api/v1',
});

httpClient.instance.interceptors.request.use(async (config) => {
  config.paramsSerializer = {
    indexes: null,
  };

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
  (error) => {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  },
);

export default httpClient;
