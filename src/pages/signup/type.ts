import { errorMsg } from '@utils/index';
import { z } from 'zod';

export const signUpSchema = z
  .object({
    email: z.string().min(1, errorMsg('Email')),
    username: z.string().min(1, errorMsg('Username')),
    fullName: z.string().min(1, errorMsg('Họ và tên')),
    password: z.string().min(1, errorMsg('Mật khẩu')),
    retypePassword: z.string().min(1, errorMsg('Mật khẩu')),
  })
  .refine((data) => data.password === data.retypePassword, {
    message: 'Mật khẩu không khớp',
    path: ['retypePassword'],
  });
