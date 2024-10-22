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

import {
  ForgotPasswordDataDto,
  ForgotPasswordErrorDto,
  ForgotPasswordRequestDto,
  LoginDataDto,
  LoginErrorDto,
  LoginRequestDto,
  LogoutDataDto,
  RefreshTokenDataDto,
  RefreshTokenErrorDto,
  ResetPasswordDataDto,
  ResetPasswordErrorDto,
  ResetPasswordParamsDto,
  ResetPasswordRequestDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Authentication<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Send a password reset link to the user's email
   *
   * @tags Authentication
   * @name ForgotPassword
   * @summary Request password reset
   * @request POST:/auth/forgot-password
   * @response `200` `ForgotPasswordDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `404` `ErrorDto` Not Found
   */
  forgotPassword = (email: ForgotPasswordRequestDto, params: RequestParams = {}) =>
    this.http.request<ForgotPasswordDataDto, ForgotPasswordErrorDto>({
      path: `/auth/forgot-password`,
      method: 'POST',
      body: email,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Log in using email or username and password
   *
   * @tags Authentication
   * @name Login
   * @summary Log in
   * @request POST:/auth/login
   * @response `200` `LoginDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `401` `ErrorDto` Unauthorized
   */
  login = (user: LoginRequestDto, params: RequestParams = {}) =>
    this.http.request<LoginDataDto, LoginErrorDto>({
      path: `/auth/login`,
      method: 'POST',
      body: user,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Log out by clearing the refresh token
   *
   * @tags Authentication
   * @name Logout
   * @summary Log out
   * @request POST:/auth/logout
   * @response `200` `LogoutDataDto` OK
   */
  logout = (params: RequestParams = {}) =>
    this.http.request<LogoutDataDto, any>({
      path: `/auth/logout`,
      method: 'POST',
      format: 'json',
      ...params,
    });
  /**
   * @description Refresh the access token using the refresh token
   *
   * @tags Authentication
   * @name RefreshToken
   * @summary Refresh access token
   * @request POST:/auth/refresh-token
   * @response `200` `RefreshTokenDataDto` OK
   * @response `401` `ErrorDto` Unauthorized
   */
  refreshToken = (params: RequestParams = {}) =>
    this.http.request<RefreshTokenDataDto, RefreshTokenErrorDto>({
      path: `/auth/refresh-token`,
      method: 'POST',
      format: 'json',
      ...params,
    });
  /**
   * @description Reset the user's password using a valid token
   *
   * @tags Authentication
   * @name ResetPassword
   * @summary Reset user password
   * @request POST:/auth/reset-password
   * @response `200` `ResetPasswordDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `401` `ErrorDto` Unauthorized
   */
  resetPassword = (query: ResetPasswordParamsDto, password: ResetPasswordRequestDto, params: RequestParams = {}) =>
    this.http.request<ResetPasswordDataDto, ResetPasswordErrorDto>({
      path: `/auth/reset-password`,
      method: 'POST',
      query: query,
      body: password,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
