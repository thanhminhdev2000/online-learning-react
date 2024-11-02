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
  AdminCreateDataDto,
  AdminCreateErrorDto,
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
  UserListParamsDto,
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
   * @description Retrieve a list of all users, with optional filters for email, username, full name, date of birth, role, and pagination.
   *
   * @tags User
   * @name UserList
   * @summary Get all users
   * @request GET:/users/
   * @secure
   * @response `200` `UserListDataDto` OK
   * @response `500` `ErrorDto` Internal Server Error
   */
  userList = (query: UserListParamsDto, params: RequestParams = {}) =>
    this.http.request<UserListDataDto, UserListErrorDto>({
      path: `/users/`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Register a new user with email, username, and password
   *
   * @tags User
   * @name UserCreate
   * @summary Register a new regular user
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
   * @description Register a new user with email, username, and password
   *
   * @tags User
   * @name AdminCreate
   * @summary Register a new user
   * @request POST:/users/admin
   * @response `200` `AdminCreateDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `409` `ErrorDto` Conflict
   */
  adminCreate = (user: CreateUserRequestDto, params: RequestParams = {}) =>
    this.http.request<AdminCreateDataDto, AdminCreateErrorDto>({
      path: `/users/admin`,
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
   * @request GET:/users/{id}
   * @secure
   * @response `200` `UserDetailDataDto` OK
   * @response `404` `ErrorDto` Not Found
   * @response `500` `ErrorDto` Internal Server Error
   */
  userDetail = (id: number, params: RequestParams = {}) =>
    this.http.request<UserDetailDataDto, UserDetailErrorDto>({
      path: `/users/${id}`,
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
   * @request PUT:/users/{id}
   * @secure
   * @response `200` `UserUpdateDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `404` `ErrorDto` Not Found
   * @response `500` `ErrorDto` Internal Server Error
   */
  userUpdate = (id: number, user: UserDetailDto, params: RequestParams = {}) =>
    this.http.request<UserUpdateDataDto, UserUpdateErrorDto>({
      path: `/users/${id}`,
      method: 'PUT',
      body: user,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Soft delete a user by user ID. Only admins can delete users, and admins cannot delete their own account.
   *
   * @tags User
   * @name UserDelete
   * @summary Delete user
   * @request DELETE:/users/{id}
   * @secure
   * @response `200` `UserDeleteDataDto` OK
   * @response `403` `ErrorDto` Permission denied or trying to delete own account
   * @response `404` `ErrorDto` User not found
   * @response `500` `ErrorDto` Server error
   */
  userDelete = (id: number, params: RequestParams = {}) =>
    this.http.request<UserDeleteDataDto, UserDeleteErrorDto>({
      path: `/users/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Update the avatar for a specific user. Users can update their own avatar, admins can update any user's avatar
   *
   * @tags User
   * @name AvatarUpdate
   * @summary Update user avatar
   * @request PUT:/users/{id}/avatar
   * @secure
   * @response `200` `AvatarUpdateDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `403` `ErrorDto` Forbidden
   * @response `404` `ErrorDto` Not Found
   * @response `500` `ErrorDto` Internal Server Error
   */
  avatarUpdate = (id: number, data: AvatarUpdatePayloadDto, params: RequestParams = {}) =>
    this.http.request<AvatarUpdateDataDto, AvatarUpdateErrorDto>({
      path: `/users/${id}/avatar`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description Change the user's password. Users can change their own password, admins can change any user's password
   *
   * @tags User
   * @name PasswordUpdate
   * @summary Change user password
   * @request PUT:/users/{id}/password
   * @secure
   * @response `200` `PasswordUpdateDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `401` `ErrorDto` Unauthorized
   * @response `404` `ErrorDto` Not Found
   */
  passwordUpdate = (id: number, password: PasswordUpdateRequestDto, params: RequestParams = {}) =>
    this.http.request<PasswordUpdateDataDto, PasswordUpdateErrorDto>({
      path: `/users/${id}/password`,
      method: 'PUT',
      body: password,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
