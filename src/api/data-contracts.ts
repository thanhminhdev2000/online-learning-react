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

export interface AccessTokenReponse {
  accessToken?: string;
}

export interface Error {
  error?: string;
}

export interface ForgotPasswordRequest {
  email?: string;
}

export interface LoginRequest {
  identifier?: string;
  password?: string;
}

export interface LoginResponse {
  accessToken?: string;
  message?: string;
  user?: UserDetail;
}

export interface Message {
  message?: string;
}

export interface PasswordUpdateRequest {
  currentPassword?: string;
  newPassword?: string;
}

export interface ResetPasswordRequest {
  password?: string;
}

export interface SignUpRequest {
  email?: string;
  fullName?: string;
  password?: string;
  username?: string;
}

export interface UserDetail {
  email?: string;
  fullName?: string;
  id?: number;
  username?: string;
}
