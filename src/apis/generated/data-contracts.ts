/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AccessTokenResponseDto {
  accessToken?: string;
}

export interface CreateUserRequestDto {
  avatar?: string;
  dateOfBirth?: string;
  email: string;
  fullName: string;
  gender: string;
  /** @minLength 6 */
  password: string;
  username: string;
}

export interface ErrorDto {
  error: string;
}

export interface ForgotPasswordRequestDto {
  email: string;
}

export interface LoginRequestDto {
  identifier: string;
  password: string;
}

export interface LoginResponseDto {
  accessToken: string;
  message: string;
  user: UserDetailDto;
}

export interface MessageDto {
  message: string;
}

export interface PasswordUpdateRequestDto {
  /** @minLength 6 */
  currentPassword: string;
  /** @minLength 6 */
  newPassword: string;
}

export interface ResetPasswordRequestDto {
  /** @minLength 6 */
  password: string;
}

export interface UserDetailDto {
  avatar?: string;
  dateOfBirth?: string;
  email: string;
  fullName: string;
  gender: string;
  id: number;
  username: string;
}

export type ForgotPasswordDataDto = MessageDto;

export type ForgotPasswordErrorDto = ErrorDto;

export type LoginDataDto = LoginResponseDto;

export type LoginErrorDto = ErrorDto;

export type LogoutDataDto = MessageDto;

export type RefreshTokenDataDto = AccessTokenResponseDto;

export type RefreshTokenErrorDto = ErrorDto;

export interface ResetPasswordParamsDto {
  /** Reset token */
  token: string;
}

export type ResetPasswordDataDto = MessageDto;

export type ResetPasswordErrorDto = ErrorDto;

export type UserListDataDto = UserDetailDto[];

export type UserListErrorDto = ErrorDto;

export type UserCreateDataDto = MessageDto;

export type UserCreateErrorDto = ErrorDto;

export type UserDetailDataDto = UserDetailDto;

export type UserDetailErrorDto = ErrorDto;

export type UserUpdateDataDto = MessageDto;

export type UserUpdateErrorDto = ErrorDto;

export type UserDeleteDataDto = MessageDto;

export type UserDeleteErrorDto = ErrorDto;

export type PasswordUpdateDataDto = MessageDto;

export type PasswordUpdateErrorDto = ErrorDto;
