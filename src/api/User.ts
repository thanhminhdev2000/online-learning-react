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
  AccessTokenReponse,
  Error,
  ForgotPasswordRequest,
  LoginRequest,
  LoginResponse,
  Message,
  PasswordUpdateRequest,
  ResetPasswordRequest,
  SignUpRequest,
  UserDetail,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieve a list of all users
   *
   * @tags users
   * @name UserList
   * @summary Get all users
   * @request GET:/user/
   * @secure
   */
  userList = (params: RequestParams = {}) =>
    this.request<UserDetail[], Error>({
      path: `/user/`,
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
   * @request POST:/user/forgot-password
   */
  forgotPassword = (email: ForgotPasswordRequest, params: RequestParams = {}) =>
    this.request<Message, Error>({
      path: `/user/forgot-password`,
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
   * @request POST:/user/login
   */
  login = (user: LoginRequest, params: RequestParams = {}) =>
    this.request<LoginResponse, Error>({
      path: `/user/login`,
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
   * @request POST:/user/logout
   */
  logout = (params: RequestParams = {}) =>
    this.request<Message, any>({
      path: `/user/logout`,
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
   * @request POST:/user/refresh
   */
  refresh = (params: RequestParams = {}) =>
    this.request<AccessTokenReponse, Error>({
      path: `/user/refresh`,
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
   * @request POST:/user/reset-password
   */
  resetPassword = (
    query: {
      /** Reset token */
      token: string;
    },
    password: ResetPasswordRequest,
    params: RequestParams = {},
  ) =>
    this.request<Message, Error>({
      path: `/user/reset-password`,
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
   * @request POST:/user/signup
   */
  signup = (user: SignUpRequest, params: RequestParams = {}) =>
    this.request<Message, Error>({
      path: `/user/signup`,
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
   * @request GET:/user/{user_id}
   * @secure
   */
  userDetail = (userId: number, params: RequestParams = {}) =>
    this.request<UserDetail, Error>({
      path: `/user/${userId}`,
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
   * @request PUT:/user/{user_id}
   * @secure
   */
  userUpdate = (userId: number, user: UserDetail, params: RequestParams = {}) =>
    this.request<Message, Error>({
      path: `/user/${userId}`,
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
   * @request DELETE:/user/{user_id}
   * @secure
   */
  userDelete = (userId: number, params: RequestParams = {}) =>
    this.request<Message, Error>({
      path: `/user/${userId}`,
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
   * @request PUT:/user/{user_id}/password
   * @secure
   */
  passwordUpdate = (userId: number, password: PasswordUpdateRequest, params: RequestParams = {}) =>
    this.request<Message, Error>({
      path: `/user/${userId}/password`,
      method: 'PUT',
      body: password,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
