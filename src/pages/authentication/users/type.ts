import { errorMsg } from '@utils/index';
import { z } from 'zod';

export const userProfileSchema = z.object({
  email: z.string().min(1, errorMsg('Email')).min(6, errorMsg('Email ,', 'tối thiếu có 6 kí tự')),
  username: z.string().min(1, errorMsg('Username')).min(6, errorMsg('Username ,', 'tối thiếu có 6 kí tự')),
  fullName: z.string().min(1, errorMsg('Họ và tên')),
  gender: z.string().min(1, errorMsg('Giới tính')),
  dateOfBirth: z.string().min(1, errorMsg('Ngày sinh')),
});
