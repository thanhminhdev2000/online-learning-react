import { UserListDataDto, UserListErrorDto } from '@apis/generated/data-contracts';
import httpClient from '@config/httpClient';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Users } from 'apis/generated/Users';

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
