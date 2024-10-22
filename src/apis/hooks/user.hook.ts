import {
  AvatarUpdateDataDto,
  AvatarUpdateErrorDto,
  AvatarUpdatePayloadDto,
  CreateUserRequestDto,
  PasswordUpdateDataDto,
  PasswordUpdateErrorDto,
  PasswordUpdateRequestDto,
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

export const useUpdateUserAvatar = ({
  userId,
}: {
  userId: number;
}): UseMutationResult<AvatarUpdateDataDto, AvatarUpdateErrorDto, AvatarUpdatePayloadDto, unknown> => {
  return useMutation({
    mutationFn: (payload: AvatarUpdatePayloadDto) => {
      return userApi.avatarUpdate(userId, payload);
    },
  });
};

export const useUpdateUserPassword = ({
  userId,
}: {
  userId: number;
}): UseMutationResult<PasswordUpdateDataDto, PasswordUpdateErrorDto, PasswordUpdateRequestDto, unknown> => {
  return useMutation({
    mutationFn: (payload: PasswordUpdateRequestDto) => {
      return userApi.passwordUpdate(userId, payload);
    },
  });
};
