import {
  DocumentDeleteDataDto,
  DocumentDeleteErrorDto,
  DocumentListDataDto,
  DocumentListErrorDto,
  DocumentListParamsDto,
  SubjectsListDataDto,
  SubjectsListErrorDto,
  UploadCreateDataDto,
  UploadCreateErrorDto,
  UploadCreatePayloadDto,
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

export const useUploadDocument = (): UseMutationResult<
  UploadCreateDataDto,
  UploadCreateErrorDto,
  UploadCreatePayloadDto,
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UploadCreatePayloadDto) => {
      return documentApi.uploadCreate(payload);
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
