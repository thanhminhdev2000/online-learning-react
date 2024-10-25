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
  accessToken: string;
  expiresIn: number;
}

export interface ClassWithSubjectsDto {
  classId: number;
  className: string;
  count: number;
  subjects: SubjectIdDto[];
}

export interface ContactDto {
  content: string;
  email: string;
  fullName: string;
  title: string;
}

export interface CreateUserRequestDto {
  avatar: string;
  dateOfBirth: string;
  email: string;
  fullName: string;
  gender: UserGenderDto;
  /** @minLength 6 */
  password: string;
  role?: UserRoleDto;
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
  expiresIn: number;
  message: string;
  user: UserDetailDto;
}

export interface MessageDto {
  message: string;
}

export interface PagingInfoDto {
  limit: number;
  page: number;
  totalCount: number;
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

export interface SubjectIdDto {
  count: number;
  subjectId: number;
  subjectName: string;
}

export interface UpdateUserResponseDto {
  message: string;
  user: UserDetailDto;
}

export interface UserDetailDto {
  avatar: string;
  createdAt: string;
  dateOfBirth: string;
  email: string;
  fullName: string;
  gender: UserGenderDto;
  id: number;
  role: UserRoleDto;
  username: string;
}

export enum UserGenderDto {
  GenderFemale = 'female',
  GenderMale = 'male',
}

export interface UserResponseDto {
  data: UserDetailDto[];
  paging: PagingInfoDto;
}

export enum UserRoleDto {
  RoleUser = 'user',
  RoleAdmin = 'admin',
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

export type ContactCreateDataDto = MessageDto;

export type ContactCreateErrorDto = ErrorDto;

export type DocumentListDataDto = ClassWithSubjectsDto[];

export type DocumentListErrorDto = ErrorDto;

export interface UploadCreatePayloadDto {
  /** Subject ID */
  subjectId: number;
  /** Document title */
  title: string;
  /**
   * File to upload
   * @format binary
   */
  file: File;
}

export type UploadCreateDataDto = ClassWithSubjectsDto[];

export type UploadCreateErrorDto = ErrorDto;

export interface UserListParamsDto {
  dateOfBirth?: string;
  email?: string;
  fullName?: string;
  /**
   * @min 1
   * @max 100
   */
  limit?: number;
  /** @min 1 */
  page?: number;
  role?: string;
  username?: string;
}

export type UserListDataDto = UserResponseDto;

export type UserListErrorDto = ErrorDto;

export type UserCreateDataDto = MessageDto;

export type UserCreateErrorDto = ErrorDto;

export type AdminCreateDataDto = MessageDto;

export type AdminCreateErrorDto = ErrorDto;

export type UserDetailDataDto = UserDetailDto;

export type UserDetailErrorDto = ErrorDto;

export type UserUpdateDataDto = UpdateUserResponseDto;

export type UserUpdateErrorDto = ErrorDto;

export type UserDeleteDataDto = MessageDto;

export type UserDeleteErrorDto = ErrorDto;

export interface AvatarUpdatePayloadDto {
  /** User Avatar */
  avatar: File;
}

export type AvatarUpdateDataDto = UpdateUserResponseDto;

export type AvatarUpdateErrorDto = ErrorDto;

export type PasswordUpdateDataDto = MessageDto;

export type PasswordUpdateErrorDto = ErrorDto;
