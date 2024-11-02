import { queryKeys } from '@hooks/course.hook';

import {
  LessonCreateDataDto,
  LessonCreateErrorDto,
  LessonCreatePayloadDto,
  LessonDeleteDataDto,
  LessonDeleteErrorDto,
  LessonUpdateDataDto,
  LessonUpdateErrorDto,
  LessonUpdatePayloadDto,
} from '@api-swagger/data-contracts';
import { Lesson } from '@api-swagger/Lesson';
import httpClient from '@config/httpClient';
import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const lessonApi = new Lesson(httpClient);

export const useCreateLesson = (): UseMutationResult<
  LessonCreateDataDto,
  LessonCreateErrorDto,
  LessonCreatePayloadDto
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LessonCreatePayloadDto) => lessonApi.lessonCreate(data),
    onSuccess() {
      toast.success('Create lesson successful');

      queryClient.invalidateQueries({
        queryKey: [queryKeys.getCourse],
      });
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};

export const useUpdateLesson = (): UseMutationResult<
  LessonUpdateDataDto,
  LessonUpdateErrorDto,
  { id: number; data: LessonUpdatePayloadDto }
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => lessonApi.lessonUpdate(id, data),
    onSuccess() {
      toast.success('Update lesson successful');
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getCourse],
      });
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};

export const useDeleteLesson = (): UseMutationResult<LessonDeleteDataDto, LessonDeleteErrorDto, number> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => lessonApi.lessonDelete(id),
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getCourse],
      });
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};
