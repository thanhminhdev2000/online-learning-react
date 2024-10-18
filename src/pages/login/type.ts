import { errorMsg } from '@utils/index';
import { z } from 'zod';

export const loginSchema = z.object({
  identifier: z.string().min(1, errorMsg('Email hoặc Username')),
  password: z.string().min(1, errorMsg('Mật khẩu')),
});
