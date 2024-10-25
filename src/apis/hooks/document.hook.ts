import { DocumentListDataDto, DocumentListErrorDto } from '@apis/generated/data-contracts';
import { Document } from '@apis/generated/Document';
import httpClient from '@config/httpClient';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const documentApi = new Document(httpClient);

const queryKeys = {
  getSubjects: 'getSubjects',
};

export const useGetSubjects = (): UseQueryResult<DocumentListDataDto, DocumentListErrorDto> => {
  return useQuery({
    queryKey: [queryKeys.getSubjects],
    queryFn: () => {
      return documentApi.documentList();
    },
  });
};
