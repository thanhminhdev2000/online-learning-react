import { errorMsg } from '@utils/index';
import { z } from 'zod';

export const contactSchema = z.object({
  fullName: z.string().min(1, errorMsg('Họ và tên')),
  email: z.string().min(1, errorMsg('Email')),
  title: z.string().min(1, errorMsg('Tiêu đề')),
  content: z.string().min(1, errorMsg('Nội dung')),
});
