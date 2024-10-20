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
  PasswordUpdateDataDto,
  PasswordUpdateErrorDto,
  PasswordUpdateRequestDto,
  RefreshDataDto,
  RefreshErrorDto,
  ResetPasswordDataDto,
  ResetPasswordErrorDto,
  ResetPasswordParamsDto,
  ResetPasswordRequestDto,
  SignupDataDto,
  SignupErrorDto,
  SignUpRequestDto,
  UserDeleteDataDto,
  UserDeleteErrorDto,
  UserDetailDataDto,
  UserDetailDto,
  UserDetailErrorDto,
  UserListDataDto,
  UserListErrorDto,
  UserUpdateDataDto,
  UserUpdateErrorDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Users<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Retrieve a list of all users
   *
   * @tags users
   * @name UserList
   * @summary Get all users
   * @request GET:/users/
   * @secure
   * @response `200` `UserListDataDto` OK
   * @response `500` `ErrorDto` Internal Server Error
   */
  userList = (params: RequestParams = {}) =>
    this.http.request<UserListDataDto, UserListErrorDto>({
      path: `/users/`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Send a password reset link to the user's email
   *
   * @tags users
   * @name ForgotPassword
   * @summary Request password reset
   * @request POST:/users/forgot-password
   * @response `200` `ForgotPasswordDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `404` `ErrorDto` Not Found
   */
  forgotPassword = (email: ForgotPasswordRequestDto, params: RequestParams = {}) =>
    this.http.request<ForgotPasswordDataDto, ForgotPasswordErrorDto>({
      path: `/users/forgot-password`,
      method: 'POST',
      body: email,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Log in a user using email or username and password
   *
   * @tags users
   * @name Login
   * @summary Log in an existing user
   * @request POST:/users/login
   * @response `200` `LoginDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `401` `ErrorDto` Unauthorized
   */
  login = (user: LoginRequestDto, params: RequestParams = {}) =>
    this.http.request<LoginDataDto, LoginErrorDto>({
      path: `/users/login`,
      method: 'POST',
      body: user,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Log out the user by clearing the refresh token
   *
   * @tags users
   * @name Logout
   * @summary Log out the user
   * @request POST:/users/logout
   * @response `200` `LogoutDataDto` OK
   */
  logout = (params: RequestParams = {}) =>
    this.http.request<LogoutDataDto, any>({
      path: `/users/logout`,
      method: 'POST',
      format: 'json',
      ...params,
    });
  /**
   * @description Refresh the access token using the refresh token
   *
   * @tags users
   * @name Refresh
   * @summary Refresh access token
   * @request POST:/users/refresh
   * @response `200` `RefreshDataDto` OK
   * @response `401` `ErrorDto` Unauthorized
   */
  refresh = (params: RequestParams = {}) =>
    this.http.request<RefreshDataDto, RefreshErrorDto>({
      path: `/users/refresh`,
      method: 'POST',
      format: 'json',
      ...params,
    });
  /**
   * @description Reset the user's password using a valid token
   *
   * @tags users
   * @name ResetPassword
   * @summary Reset user password
   * @request POST:/users/reset-password
   * @response `200` `ResetPasswordDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `401` `ErrorDto` Unauthorized
   */
  resetPassword = (query: ResetPasswordParamsDto, password: ResetPasswordRequestDto, params: RequestParams = {}) =>
    this.http.request<ResetPasswordDataDto, ResetPasswordErrorDto>({
      path: `/users/reset-password`,
      method: 'POST',
      query: query,
      body: password,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Register a new user with email, username, and password
   *
   * @tags users
   * @name Signup
   * @summary Register a new user
   * @request POST:/users/signup
   * @response `200` `SignupDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `409` `ErrorDto` Conflict
   */
  signup = (user: SignUpRequestDto, params: RequestParams = {}) =>
    this.http.request<SignupDataDto, SignupErrorDto>({
      path: `/users/signup`,
      method: 'POST',
      body: user,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieve user information by user ID
   *
   * @tags users
   * @name UserDetail
   * @summary Get user by ID
   * @request GET:/users/{user_id}
   * @secure
   * @response `200` `UserDetailDataDto` OK
   * @response `404` `ErrorDto` Not Found
   * @response `500` `ErrorDto` Internal Server Error
   */
  userDetail = (userId: number, params: RequestParams = {}) =>
    this.http.request<UserDetailDataDto, UserDetailErrorDto>({
      path: `/users/${userId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Update user information by user ID
   *
   * @tags users
   * @name UserUpdate
   * @summary Update user information
   * @request PUT:/users/{user_id}
   * @secure
   * @response `200` `UserUpdateDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `500` `ErrorDto` Internal Server Error
   */
  userUpdate = (userId: number, user: UserDetailDto, params: RequestParams = {}) =>
    this.http.request<UserUpdateDataDto, UserUpdateErrorDto>({
      path: `/users/${userId}`,
      method: 'PUT',
      body: user,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Delete a user by user ID
   *
   * @tags users
   * @name UserDelete
   * @summary Delete user
   * @request DELETE:/users/{user_id}
   * @secure
   * @response `200` `UserDeleteDataDto` OK
   * @response `404` `ErrorDto` Not Found
   * @response `500` `ErrorDto` Internal Server Error
   */
  userDelete = (userId: number, params: RequestParams = {}) =>
    this.http.request<UserDeleteDataDto, UserDeleteErrorDto>({
      path: `/users/${userId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Change the user's password
   *
   * @tags users
   * @name PasswordUpdate
   * @summary Change user password
   * @request PUT:/users/{user_id}/password
   * @secure
   * @response `200` `PasswordUpdateDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `401` `ErrorDto` Unauthorized
   * @response `404` `ErrorDto` Not Found
   */
  passwordUpdate = (userId: number, password: PasswordUpdateRequestDto, params: RequestParams = {}) =>
    this.http.request<PasswordUpdateDataDto, PasswordUpdateErrorDto>({
      path: `/users/${userId}/password`,
      method: 'PUT',
      body: password,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
