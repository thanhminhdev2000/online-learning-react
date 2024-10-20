import { HttpClient } from '@apis/generated/http-client';

const httpClient = new HttpClient({
  baseURL: 'http://localhost:8080/api/v1',
});

export default httpClient;
