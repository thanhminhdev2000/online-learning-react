import {
  DocumentListDataDto,
  DocumentListErrorDto,
  PopularListDataDto,
  PopularListErrorDto,
} from '@apis/generated/data-contracts';
import { Document } from '@apis/generated/Document';
import httpClient from '@config/httpClient';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const documentApi = new Document(httpClient);

const queryKeys = {
  getSubjects: 'getSubjects',
  getDocPopulars: 'getDocPopulars',
};

export const useGetSubjects = (): UseQueryResult<DocumentListDataDto, DocumentListErrorDto> => {
  return useQuery({
    queryKey: [queryKeys.getSubjects],
    queryFn: () => {
      return documentApi.documentList();
    },
  });
};

export const useGetDocumentsPopular = (): UseQueryResult<PopularListDataDto, PopularListErrorDto> => {
  return useQuery({
    queryKey: [queryKeys.getDocPopulars],
    queryFn: () => {
      return documentApi.popularList({});
    },
  });
};
