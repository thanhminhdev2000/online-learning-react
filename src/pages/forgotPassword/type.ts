import { errorMsg } from '@utils/index';
import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().min(1, errorMsg('Email')),
});
