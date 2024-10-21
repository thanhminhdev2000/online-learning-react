import { Authentication } from '@apis/generated/Authentication';
import { LoginDataDto, LoginErrorDto, LoginRequestDto, LogoutDataDto } from '@apis/generated/data-contracts';
import httpClient from '@config/httpClient';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const authenticationApi = new Authentication(httpClient);

export const useLogin = (): UseMutationResult<LoginDataDto, LoginErrorDto, LoginRequestDto, unknown> => {
  return useMutation({
    mutationFn: (payload: LoginRequestDto) => {
      return authenticationApi.login(payload);
    },
  });
};

export const useLogout = (): UseMutationResult<LogoutDataDto, unknown, unknown, unknown> => {
  return useMutation({
    mutationFn: () => {
      return authenticationApi.logout();
    },
  });
};
