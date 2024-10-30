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
  expiresIn?: number;
}

export interface ClassDto {
  count: number;
  id: number;
  name: string;
  subjects: SubjectDto[];
}

export interface ContactDto {
  content: string;
  email: string;
  fullName: string;
  title: string;
}

export interface CourseDto {
  description?: string;
  id?: number;
  instructor?: string;
  price?: number;
  subjectId?: number;
  thumbnailUrl?: string;
  title?: string;
}

export interface CreateUserRequestDto {
  avatar?: string;
  dateOfBirth: string;
  email: string;
  fullName: string;
  gender: UserGenderDto;
  /** @minLength 6 */
  password: string;
  phoneNumber?: string;
  role?: UserRoleDto;
  /**
   * @minLength 3
   * @maxLength 50
   */
  username: string;
}

export interface CreateUserResponseDto {
  message?: string;
  user?: UserDetailDto;
}

export interface DocumentDto {
  author: string;
  category: string;
  classId: number;
  downloads: number;
  fileUrl: string;
  id: number;
  subjectId: number;
  title: string;
  views: number;
}

export interface ErrorDto {
  error?: string;
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
  message?: string;
}

export interface PaginatedResponseDto {
  data?: any;
  meta?: PaginationDto;
}

export interface PaginationDto {
  hasNext?: boolean;
  hasPrevious?: boolean;
  limit?: number;
  page?: number;
  total?: number;
  totalPages?: number;
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

export interface SubjectDto {
  count: number;
  id: number;
  name: string;
}

export interface UpdateUserResponseDto {
  message: string;
  user: UserDetailDto;
}

export interface UserDetailDto {
  avatar?: string;
  dateOfBirth: string;
  email: string;
  fullName: string;
  gender: UserGenderDto;
  id: number;
  phoneNumber?: string;
  role: UserRoleDto;
  username: string;
}

export enum UserGenderDto {
  GenderFemale = 'female',
  GenderMale = 'male',
  GenderOther = 'other',
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

export type LogoutErrorDto = ErrorDto;

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

export interface CoursesListParamsDto {
  /** Page number (default: 1) */
  page?: number;
  /** Items per page (default: 10) */
  limit?: number;
  /** Filter by subject ID */
  subject?: number;
  /** Search in title and description */
  search?: string;
  /** Sort field (title, price) (default: id) */
  sort?: string;
  /** Sort order (asc, desc) (default: asc) */
  order?: string;
}

export type CoursesListDataDto = PaginatedResponseDto;

export type CoursesListErrorDto = ErrorDto;

export type CoursesCreateDataDto = CourseDto;

export type CoursesCreateErrorDto = ErrorDto;

export type CoursesDetailDataDto = CourseDto;

export type CoursesDetailErrorDto = ErrorDto;

export interface CoursesUpdatePayloadDto {
  /** Subject ID */
  subjectId: number;
  /** Course Title */
  title: string;
  /** Course Description */
  description: string;
  /** Course Price */
  price: number;
  /** Instructor Name */
  instructor: string;
  /** Thumbnail Image */
  thumbnail: File;
}

export type CoursesUpdateDataDto = CourseDto;

export type CoursesUpdateErrorDto = ErrorDto;

export type CoursesDeleteDataDto = MessageDto;

export type CoursesDeleteErrorDto = ErrorDto;

export interface DocumentListParamsDto {
  /**
   * Limit the number of documents returned
   * @default 40
   */
  limit?: number;
  /** Subject ID */
  subjectId?: number;
  /** Document title (searched using LIKE) */
  title?: string;
}

export type DocumentListDataDto = DocumentDto[];

export type DocumentListErrorDto = ErrorDto;

export interface DocumentCreatePayloadDto {
  /** Subject ID */
  subjectId: number;
  /** Document title */
  title: string;
  /** Document author */
  author?: string;
  /**
   * File to upload
   * @format binary
   */
  file: File;
}

export type DocumentCreateDataDto = MessageDto;

export type DocumentCreateErrorDto = ErrorDto;

export type SubjectsListDataDto = ClassDto[];

export type SubjectsListErrorDto = ErrorDto;

export interface DocumentUpdatePayloadDto {
  /** Document title */
  title?: string;
  /** Document author */
  author?: string;
  /** Number of views */
  views?: number;
  /** Number of downloads */
  downloads?: number;
  /** File to replace the existing document file */
  file?: File;
}

export type DocumentUpdateDataDto = MessageDto;

export type DocumentUpdateErrorDto = ErrorDto;

export type DocumentDeleteDataDto = MessageDto;

export type DocumentDeleteErrorDto = ErrorDto;

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

export type UserCreateDataDto = CreateUserResponseDto;

export type UserCreateErrorDto = ErrorDto;

export type AdminCreateDataDto = CreateUserResponseDto;

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
