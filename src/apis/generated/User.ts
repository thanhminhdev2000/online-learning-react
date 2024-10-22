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
  AvatarUpdateDataDto,
  AvatarUpdateErrorDto,
  AvatarUpdatePayloadDto,
  CreateUserRequestDto,
  PasswordUpdateDataDto,
  PasswordUpdateErrorDto,
  PasswordUpdateRequestDto,
  UserCreateDataDto,
  UserCreateErrorDto,
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

export class User<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Retrieve a list of all users
   *
   * @tags User
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
   * @description Register a new user with email, username, and password
   *
   * @tags User
   * @name UserCreate
   * @summary Register a new user
   * @request POST:/users/
   * @response `200` `UserCreateDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `409` `ErrorDto` Conflict
   */
  userCreate = (user: CreateUserRequestDto, params: RequestParams = {}) =>
    this.http.request<UserCreateDataDto, UserCreateErrorDto>({
      path: `/users/`,
      method: 'POST',
      body: user,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieve user information by user ID
   *
   * @tags User
   * @name UserDetail
   * @summary Get user by ID
   * @request GET:/users/{userId}
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
   * @tags User
   * @name UserUpdate
   * @summary Update user information
   * @request PUT:/users/{userId}
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
   * @tags User
   * @name UserDelete
   * @summary Delete user
   * @request DELETE:/users/{userId}
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
   * @description Update the avatar for a specific user
   *
   * @tags User
   * @name AvatarUpdate
   * @summary Update user avatar
   * @request PUT:/users/{userId}/avatar
   * @secure
   * @response `200` `AvatarUpdateDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `500` `ErrorDto` Internal Server Error
   */
  avatarUpdate = (userId: number, data: AvatarUpdatePayloadDto, params: RequestParams = {}) =>
    this.http.request<AvatarUpdateDataDto, AvatarUpdateErrorDto>({
      path: `/users/${userId}/avatar`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description Change the user's password
   *
   * @tags User
   * @name PasswordUpdate
   * @summary Change user password
   * @request PUT:/users/{userId}/password
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
