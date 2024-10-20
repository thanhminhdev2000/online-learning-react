import { errorMsg } from '@utils/index';
import { z } from 'zod';

export const signUpSchema = z
  .object({
    email: z.string().min(1, errorMsg('Email')).min(6, errorMsg('Email tối thiếu có 6 kí tự')),
    username: z.string().min(1, errorMsg('Username')).min(6, errorMsg('Username tối thiếu có 6 kí tự')),
    fullName: z.string().min(1, errorMsg('Họ và tên')),
    password: z.string().min(1, errorMsg('Mật khẩu')).min(6, errorMsg('Mật khẩu tối thiếu có 6 kí tự')),
    retypePassword: z.string().min(1, errorMsg('Mật khẩu')).min(6, errorMsg('Mật khẩu tối thiếu có 6 kí tự')),
  })
  .refine((data) => data.password === data.retypePassword, {
    message: 'Mật khẩu không khớp',
    path: ['retypePassword'],
  });
