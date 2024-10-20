import {
  LoginDataDto,
  LoginErrorDto,
  LoginRequestDto,
  SignupDataDto,
  SignupErrorDto,
  SignUpRequestDto,
  UserListDataDto,
  UserListErrorDto,
} from '@apis/generated/data-contracts';
import { Users } from '@apis/generated/Users';
import httpClient from '@config/httpClient';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export const users = new Users(httpClient);

const queryKeys = {
  getUsers: 'getUsers',
  getUser: 'getUser',
};

export const useGetUsers = (): UseQueryResult<UserListDataDto, UserListErrorDto> => {
  return useQuery({
    queryKey: [queryKeys.getUsers],
    queryFn: () => {
      return users.userList();
    },
  });
};

export const useGetUser = (userId: number): UseQueryResult<UserListDataDto, UserListErrorDto> => {
  return useQuery({
    queryKey: [queryKeys.getUser, userId],
    queryFn: () => {
      return users.userDetail(userId);
    },
  });
};

export const useCreateUser = (): UseMutationResult<SignupDataDto, SignupErrorDto, SignUpRequestDto, unknown> => {
  return useMutation({
    mutationFn: (payload: SignUpRequestDto) => {
      return users.signup(payload);
    },
  });
};

export const useLogin = (): UseMutationResult<LoginDataDto, LoginErrorDto, LoginRequestDto, unknown> => {
  return useMutation({
    mutationFn: (payload: LoginRequestDto) => {
      return users.login(payload);
    },
  });
};
