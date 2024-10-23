import {
  AdminCreateDataDto,
  AdminCreateErrorDto,
  AvatarUpdateDataDto,
  AvatarUpdateErrorDto,
  AvatarUpdatePayloadDto,
  CreateUserRequestDto,
  PasswordUpdateDataDto,
  PasswordUpdateErrorDto,
  PasswordUpdateRequestDto,
  UserCreateDataDto,
  UserCreateErrorDto,
  UserDeleteDataDto,
  UserDeleteErrorDto,
  UserDetailDto,
  UserListDataDto,
  UserListErrorDto,
  UserListParamsDto,
  UserUpdateDataDto,
  UserUpdateErrorDto,
} from '@apis/generated/data-contracts';
import { User } from '@apis/generated/User';
import httpClient from '@config/httpClient';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const userApi = new User(httpClient);

const queryKeys = {
  getAll: 'getUsers',
  getDetail: 'getUser',
};

export const useGetUsers = (query?: UserListParamsDto): UseQueryResult<UserListDataDto, UserListErrorDto> => {
  return useQuery({
    queryKey: [queryKeys.getAll, query],
    queryFn: () => {
      console.log(query);
      return userApi.userList(query as UserListParamsDto);
    },
  });
};

export const useGetUser = (userId: number): UseQueryResult<UserListDataDto, UserListErrorDto> => {
  return useQuery({
    queryKey: [queryKeys.getAll, userId],
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
    onSuccess(data) {
      toast.success(data.message);
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};

export const useCreateAdmin = (): UseMutationResult<
  AdminCreateDataDto,
  AdminCreateErrorDto,
  CreateUserRequestDto,
  unknown
> => {
  return useMutation({
    mutationFn: (payload: CreateUserRequestDto) => {
      return userApi.adminCreate(payload);
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    onError(data) {
      toast.error(data.error);
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
    onSuccess(data) {
      toast.success(data.message);
    },
    onError(data) {
      toast.error(data.error);
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
    onSuccess(data) {
      toast.success(data.message);
    },
    onError(data) {
      toast.error(data.error);
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
    onSuccess(data) {
      toast.success(data.message);
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};

export const useDeleteUser = (): UseMutationResult<UserDeleteDataDto, UserDeleteErrorDto, number, unknown> => {
  return useMutation({
    mutationFn: (userId: number) => {
      return userApi.userDelete(userId);
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};
