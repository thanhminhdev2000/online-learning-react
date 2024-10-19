import { errorMsg } from '@utils/index';
import { z } from 'zod';

export const resetPasswordSchema = z
  .object({
    password: z.string().min(1, errorMsg('Mật khẩu')),
    retypePassword: z.string().min(1, errorMsg('Mật khẩu')),
  })
  .refine((data) => data.password === data.retypePassword, {
    message: 'Mật khẩu không khớp',
    path: ['retypePassword'],
  });
