import { DocumentationsListDataDto, DocumentationsListErrorDto } from '@apis/generated/data-contracts';
import { Documentation } from '@apis/generated/Documentation';
import httpClient from '@config/httpClient';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const documentApi = new Documentation(httpClient);

const queryKeys = {
  getSubjects: 'getSubjects',
};

export const useGetSubjects = (): UseQueryResult<DocumentationsListDataDto, DocumentationsListErrorDto> => {
  return useQuery({
    queryKey: [queryKeys.getSubjects],
    queryFn: () => {
      return documentApi.documentationsList();
    },
  });
};
