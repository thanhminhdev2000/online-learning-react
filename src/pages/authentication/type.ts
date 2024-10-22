import { MIN_LENGTH_6 } from '@common/message';
import { errorMsg } from '@utils/index';
import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().min(1, errorMsg('Email')),
});

export const loginSchema = z.object({
  identifier: z.string().min(1, errorMsg('Email hoặc Username')).min(6, errorMsg('Email hoặc Username', MIN_LENGTH_6)),
  password: z.string().min(1, errorMsg('Mật khẩu')).min(6, errorMsg('Mật khẩu', MIN_LENGTH_6)),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(1, errorMsg('Mật khẩu')).min(6, errorMsg('Mật khẩu', MIN_LENGTH_6)),
    confirmPassword: z.string().min(1, errorMsg('Mật khẩu')).min(6, errorMsg('Mật khẩu', MIN_LENGTH_6)),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Mật khẩu không khớp',
    path: ['confirmPassword'],
  });

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

export const userProfileSchema = z.object({
  email: z.string().min(1, errorMsg('Email')).min(6, errorMsg('Email', MIN_LENGTH_6)),
  username: z.string().min(1, errorMsg('Username')).min(6, errorMsg('Username', MIN_LENGTH_6)),
  fullName: z.string().min(1, errorMsg('Họ và tên')),
  gender: z.string().min(1, errorMsg('Giới tính')),
  dateOfBirth: z.string().min(1, errorMsg('Ngày sinh')),
});

export const userPasswordSchema = z
  .object({
    currentPassword: z.string().min(1, errorMsg('Mật khẩu')).min(6, errorMsg('Mật khẩu', MIN_LENGTH_6)),
    newPassword: z.string().min(1, errorMsg('Mật khẩu')).min(6, errorMsg('Mật khẩu', MIN_LENGTH_6)),
    confirmNewPassword: z.string().min(1, errorMsg('Mật khẩu')).min(6, errorMsg('Mật khẩu', MIN_LENGTH_6)),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Mật khẩu không khớp',
    path: ['confirmNewPassword'],
  });
