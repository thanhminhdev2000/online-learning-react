import { errorMsg } from '@utils/index';
import { z } from 'zod';

export const createdCourseSchema = z.object({
  title: z.string().min(1, errorMsg('Tiêu đề')),
  classId: z.number().min(1, errorMsg('Tên lớp học')),
  subjectId: z.number().min(1, errorMsg('Tên môn học')),
  instructor: z.string().min(1, errorMsg('Người hướng dẫn')),
  price: z.string().min(1, errorMsg('Gía')),
  description: z.string().min(1, errorMsg('Mô tả')),
  thumbnail: z.any().refine((thumbnail) => thumbnail instanceof File && thumbnail.size > 0, errorMsg('Thumbnail')),
});

export const updatedCourseSchema = createdCourseSchema
  .omit({ thumbnail: true })
  .merge(z.object({ file: z.any().optional() }));

export const createdLessonSchema = z.object({
  title: z.string().min(1, errorMsg('Tên bài học')),
  position: z.string().min(1, errorMsg('Vị trí')),
  video: z.any().refine((video) => video instanceof File && video.size > 0, errorMsg('Video')),
});

export const updatedLessonSchema = createdLessonSchema
  .omit({ video: true })
  .merge(z.object({ video: z.any().optional() }));

export const activeCourseForUserSchema = z.object({
  email: z.string().min(1, errorMsg('Email')),
});
