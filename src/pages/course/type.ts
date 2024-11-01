import { errorMsg } from '@utils/index';
import { z } from 'zod';

export const createdCourseSchema = z.object({
  title: z.string().min(1, errorMsg('Tiêu đề')),
  classId: z.number().min(1, errorMsg('Tên lớp học')),
  subjectId: z.number().min(1, errorMsg('Tên môn học')),
  instructor: z.string().min(1, errorMsg('Người hướng dẫn')),
  price: z.string().min(1, errorMsg('Gía')),
  description: z.string().min(1, errorMsg('Mô tả')),
  file: z.any().refine((file) => file instanceof File && file.size > 0, errorMsg('File')),
});

export const updatedCourseSchema = createdCourseSchema
  .omit({ file: true })
  .merge(z.object({ file: z.any().optional() }));
