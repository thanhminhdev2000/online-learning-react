import { Authentication } from '@apis/generated/Authentication';
import {
  ForgotPasswordDataDto,
  ForgotPasswordErrorDto,
  ForgotPasswordRequestDto,
  LoginDataDto,
  LoginErrorDto,
  LoginRequestDto,
  LogoutDataDto,
  ResetPasswordDataDto,
  ResetPasswordErrorDto,
  ResetPasswordParamsDto,
  ResetPasswordRequestDto,
} from '@apis/generated/data-contracts';
import httpClient from '@config/httpClient';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { toast } from 'react-toastify';

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

export const useForgotPassword = (): UseMutationResult<
  ForgotPasswordDataDto,
  ForgotPasswordErrorDto,
  ForgotPasswordRequestDto,
  unknown
> => {
  return useMutation({
    mutationFn: (payload: ForgotPasswordRequestDto) => {
      return authenticationApi.forgotPassword(payload);
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};

export const useResetPassword = (
  token: ResetPasswordParamsDto,
): UseMutationResult<ResetPasswordDataDto, ResetPasswordErrorDto, ResetPasswordRequestDto, unknown> => {
  return useMutation({
    mutationFn: (payload: ResetPasswordRequestDto) => {
      return authenticationApi.resetPassword(token, payload);
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};
