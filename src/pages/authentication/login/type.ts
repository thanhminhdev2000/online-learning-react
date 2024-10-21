import { errorMsg } from '@utils/index';
import { z } from 'zod';

export const loginSchema = z.object({
  identifier: z
    .string()
    .min(1, errorMsg('Email hoặc Username'))
    .min(6, errorMsg('Email hoặc Username', 'tối thiếu có 6 kí tự')),
  password: z.string().min(1, errorMsg('Mật khẩu')).min(6, errorMsg('Mật khẩu', 'tối thiếu có 6 kí tự')),
});
