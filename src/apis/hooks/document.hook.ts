import {
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
  SubjectsListDataDto,
  SubjectsListErrorDto,
} from '@apis/generated/data-contracts';
import { Document } from '@apis/generated/Document';
import httpClient from '@config/httpClient';
import { useMutation, UseMutationResult, useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const documentApi = new Document(httpClient);

const queryKeys = {
  getSubjects: 'getSubjects',
  getDocuments: 'getDocuments',
};

export const useGetSubjects = (): UseQueryResult<SubjectsListDataDto, SubjectsListErrorDto> => {
  return useQuery({
    queryKey: [queryKeys.getSubjects],
    queryFn: () => {
      return documentApi.subjectsList();
    },
  });
};

export const useGetDocuments = (
  query: DocumentListParamsDto,
): UseQueryResult<DocumentListDataDto, DocumentListErrorDto> => {
  return useQuery({
    queryKey: [queryKeys.getDocuments, query],
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
        queryKey: [queryKeys.getDocuments],
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
        queryKey: [queryKeys.getDocuments],
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
        queryKey: [queryKeys.getDocuments],
      });
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};
