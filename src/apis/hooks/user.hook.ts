import {
  CreateUserRequestDto,
  UserCreateDataDto,
  UserCreateErrorDto,
  UserDetailDto,
  UserListDataDto,
  UserListErrorDto,
  UserUpdateDataDto,
  UserUpdateErrorDto,
} from '@apis/generated/data-contracts';
import { User } from '@apis/generated/User';
import httpClient from '@config/httpClient';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export const userApi = new User(httpClient);

const queryKeys = {
  getUsers: 'getUsers',
  getUser: 'getUser',
};

export const useGetUsers = (): UseQueryResult<UserListDataDto, UserListErrorDto> => {
  return useQuery({
    queryKey: [queryKeys.getUsers],
    queryFn: () => {
      return userApi.userList();
    },
  });
};

export const useGetUser = (userId: number): UseQueryResult<UserListDataDto, UserListErrorDto> => {
  return useQuery({
    queryKey: [queryKeys.getUser, userId],
    queryFn: () => {
      return userApi.userDetail(userId);
    },
  });
};

export const useCreateUser = (): UseMutationResult<
  UserCreateDataDto,
  UserCreateErrorDto,
  CreateUserRequestDto,
  unknown
> => {
  return useMutation({
    mutationFn: (payload: CreateUserRequestDto) => {
      return userApi.userCreate(payload);
    },
  });
};

export const useUpdateUser = ({
  userId,
}: {
  userId: number;
}): UseMutationResult<UserUpdateDataDto, UserUpdateErrorDto, UserDetailDto, unknown> => {
  return useMutation({
    mutationFn: (payload: UserDetailDto) => {
      return userApi.userUpdate(userId, payload);
    },
  });
};
