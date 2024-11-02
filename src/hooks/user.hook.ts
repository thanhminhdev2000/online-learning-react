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
} from '@api-swagger/data-contracts';
import { User } from '@api-swagger/User';
import httpClient from '@config/httpClient';
import { useMutation, UseMutationResult, useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query';
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
      return userApi.userList(query as UserListParamsDto);
    },
  });
};

export const useGetUser = (id: number): UseQueryResult<UserListDataDto, UserListErrorDto> => {
  return useQuery({
    queryKey: [queryKeys.getAll, id],
    queryFn: () => {
      return userApi.userDetail(id);
    },
  });
};

export const useCreateUser = (): UseMutationResult<
  UserCreateDataDto,
  UserCreateErrorDto,
  CreateUserRequestDto,
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateUserRequestDto) => {
      return userApi.userCreate(payload);
    },
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getAll],
      });
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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateUserRequestDto) => {
      return userApi.adminCreate(payload);
    },
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getAll],
      });
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};

export const useUpdateUser = ({
  id,
}: {
  id: number;
}): UseMutationResult<UserUpdateDataDto, UserUpdateErrorDto, UserDetailDto, unknown> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UserDetailDto) => {
      return userApi.userUpdate(id, payload);
    },
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getAll],
      });
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};

export const useUpdateUserAvatar = ({
  id,
}: {
  id: number;
}): UseMutationResult<AvatarUpdateDataDto, AvatarUpdateErrorDto, AvatarUpdatePayloadDto, unknown> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AvatarUpdatePayloadDto) => {
      return userApi.avatarUpdate(id, payload);
    },
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getDetail],
      });
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};

export const useUpdateUserPassword = ({
  id,
}: {
  id: number;
}): UseMutationResult<PasswordUpdateDataDto, PasswordUpdateErrorDto, PasswordUpdateRequestDto, unknown> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: PasswordUpdateRequestDto) => {
      return userApi.passwordUpdate(id, payload);
    },
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getDetail],
      });
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};

export const useDeleteUser = (): UseMutationResult<UserDeleteDataDto, UserDeleteErrorDto, number, unknown> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => {
      return userApi.userDelete(id);
    },
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getAll],
      });
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};
