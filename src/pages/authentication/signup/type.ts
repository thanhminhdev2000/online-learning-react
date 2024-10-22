import { MIN_LENGTH_6 } from '@common/message';
import { errorMsg } from '@utils/index';
import { z } from 'zod';

export const signUpSchema = z
  .object({
    email: z.string().min(1, errorMsg('Email')).min(6, errorMsg('Email ,', MIN_LENGTH_6)),
    username: z.string().min(1, errorMsg('Username')).min(6, errorMsg('Username ,', MIN_LENGTH_6)),
    fullName: z.string().min(1, errorMsg('Họ và tên')),
    password: z.string().min(1, errorMsg('Mật khẩu')).min(6, errorMsg('Mật khẩu ,', MIN_LENGTH_6)),
    confirmPassword: z.string().min(1, errorMsg('Mật khẩu')).min(6, errorMsg('Mật khẩu ,', MIN_LENGTH_6)),
    gender: z.string().min(1, errorMsg('Giới tính')),
    dateOfBirth: z.string().min(1, errorMsg('Ngày sinh')),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Mật khẩu không khớp',
    path: ['confirmPassword'],
  });
