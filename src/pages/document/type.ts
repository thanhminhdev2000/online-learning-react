import { errorMsg } from '@utils/index';
import { z } from 'zod';

export const uploadDocumentSchema = z.object({
  title: z.string().min(1, errorMsg('Tiêu đề')),
  classId: z.number().min(1, errorMsg('Tên lớp học')),
  subjectId: z.number().min(1, errorMsg('Tên môn học')),
  author: z.string().min(1, errorMsg('Tên tác giả')),
  file: z.any().refine((file) => file instanceof File && file.size > 0, errorMsg('File')),
});
