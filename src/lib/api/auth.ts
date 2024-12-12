import { mockRegister, mockLogin, mockGetCurrentUser } from './mock';
import { axiosInstance } from './axios';

const USE_MOCK = true; // Switch to false when real backend is ready

export async function register(data: { email: string; password: string; username: string }) {
  if (USE_MOCK) {
    return mockRegister(data);
  }
  const response = await axiosInstance.post('/auth/register', data);
  return response.data;
}

export async function login(email: string, password: string) {
  if (USE_MOCK) {
    return mockLogin(email, password);
  }
  const response = await axiosInstance.post('/auth/login', { email, password });
  return response.data;
}

export async function getCurrentUser(token: string) {
  if (USE_MOCK) {
    return mockGetCurrentUser(token);
  }
  const response = await axiosInstance.get('/auth/me');
  return response.data;
}