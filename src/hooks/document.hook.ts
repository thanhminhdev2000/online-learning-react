import {
  ClassesListDataDto,
  ClassesListErrorDto,
  DocumentCreateDataDto,
  DocumentCreateErrorDto,
  DocumentCreatePayloadDto,
  DocumentDeleteDataDto,
  DocumentDeleteErrorDto,
  DocumentListDataDto,
  DocumentListErrorDto,
  DocumentListParamsDto,
  DocumentUpdateDataDto,
  DocumentUpdateErrorDto,
  DocumentUpdatePayloadDto,
} from '@api-swagger/data-contracts';
import { Document } from '@api-swagger/Document';
import httpClient from '@config/httpClient';
import { useMutation, UseMutationResult, useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const documentApi = new Document(httpClient);

const queryKeys = {
  getClasses: 'getClasses',
  getDocuments: 'getDocuments',
};

export const useGetClasses = (): UseQueryResult<ClassesListDataDto, ClassesListErrorDto> => {
  return useQuery({
    queryKey: [queryKeys.getClasses],
    queryFn: () => {
      return documentApi.classesList();
    },
  });
};

export const useGetDocuments = (
  query: DocumentListParamsDto,
): UseQueryResult<DocumentListDataDto, DocumentListErrorDto> => {
  return useQuery({
    queryKey: [queryKeys.getClasses, queryKeys.getDocuments, query],
    queryFn: () => {
      return documentApi.documentList(query);
    },
  });
};

export const useCreateDocument = (): UseMutationResult<
  DocumentCreateDataDto,
  DocumentCreateErrorDto,
  DocumentCreatePayloadDto,
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: DocumentCreatePayloadDto) => {
      return documentApi.documentCreate(payload);
    },
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getClasses, queryKeys.getDocuments],
      });
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};

export const useUpdateDocument = (): UseMutationResult<
  DocumentUpdateDataDto,
  DocumentUpdateErrorDto,
  { documentId: number; payload: DocumentUpdatePayloadDto },
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ documentId, payload }) => {
      return documentApi.documentUpdate(documentId, payload);
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getClasses, queryKeys.getDocuments],
      });
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};

export const useDeleteDocument = (): UseMutationResult<
  DocumentDeleteDataDto,
  DocumentDeleteErrorDto,
  number,
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: number) => {
      return documentApi.documentDelete(payload);
    },
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getClasses, queryKeys.getDocuments],
      });
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};
