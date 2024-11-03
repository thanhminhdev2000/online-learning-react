import { Course } from '@api-swagger/Course';
import {
  CourseCreateDataDto,
  CourseCreateErrorDto,
  CourseCreatePayloadDto,
  CourseDeleteDataDto,
  CourseDeleteErrorDto,
  CourseDetailDataDto,
  CourseListDataDto,
  CourseListParamsDto,
  CourseUpdateDataDto,
  CourseUpdateErrorDto,
  CourseUpdatePayloadDto,
} from '@api-swagger/data-contracts';
import httpClient from '@config/httpClient';
import { UseMutationResult, UseQueryResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const courseApi = new Course(httpClient);

export const queryKeys = {
  getCourses: 'getCourses',
  getCourse: 'getCourse',
};

export const useGetCourses = (params: CourseListParamsDto): UseQueryResult<CourseListDataDto> => {
  return useQuery({
    queryKey: [queryKeys.getCourses, params],
    queryFn: () => courseApi.courseList(params),
  });
};

export const useGetCourse = (id: number): UseQueryResult<CourseDetailDataDto> => {
  return useQuery({
    queryKey: [queryKeys.getCourse, id],
    queryFn: () => courseApi.courseDetail(id),
  });
};

export const useCreateCourse = (): UseMutationResult<
  CourseCreateDataDto,
  CourseCreateErrorDto,
  CourseCreatePayloadDto
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CourseCreatePayloadDto) => courseApi.courseCreate(data),
    onSuccess() {
      toast.success('Create course successful');

      queryClient.invalidateQueries({
        queryKey: [queryKeys.getCourses],
      });
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};

export const useUpdateCourse = (): UseMutationResult<
  CourseUpdateDataDto,
  CourseUpdateErrorDto,
  { id: number; data: CourseUpdatePayloadDto }
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => courseApi.courseUpdate(id, data),
    onSuccess() {
      toast.success('Update course successful');
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getCourses],
      });
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};

export const useDeleteCourse = (): UseMutationResult<CourseDeleteDataDto, CourseDeleteErrorDto, number> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => courseApi.courseDelete(id),
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getCourses],
      });
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};
