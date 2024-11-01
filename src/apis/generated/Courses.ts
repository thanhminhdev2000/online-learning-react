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
  CourseCreateDataDto,
  CourseCreateErrorDto,
  CourseCreatePayloadDto,
  CourseDeleteDataDto,
  CourseDeleteErrorDto,
  CourseDetailDataDto,
  CourseDetailErrorDto,
  CourseListDataDto,
  CourseListErrorDto,
  CourseListParamsDto,
  CourseUpdateDataDto,
  CourseUpdateErrorDto,
  CourseUpdatePayloadDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Courses<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Retrieve a list of all courses with optional filtering and pagination
   *
   * @tags courses
   * @name CourseList
   * @summary Get all courses
   * @request GET:/courses/
   * @response `200` `CourseListDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `500` `ErrorDto` Internal Server Error
   */
  courseList = (query: CourseListParamsDto, params: RequestParams = {}) =>
    this.http.request<CourseListDataDto, CourseListErrorDto>({
      path: `/courses/`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Create a new course with the provided details
   *
   * @tags courses
   * @name CourseCreate
   * @summary Create a new course
   * @request POST:/courses/
   * @response `200` `CourseCreateDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `500` `ErrorDto` Internal Server Error
   */
  courseCreate = (data: CourseCreatePayloadDto, params: RequestParams = {}) =>
    this.http.request<CourseCreateDataDto, CourseCreateErrorDto>({
      path: `/courses/`,
      method: 'POST',
      body: data,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieve a single course using its ID
   *
   * @tags courses
   * @name CourseDetail
   * @summary Get a course by ID
   * @request GET:/courses/{id}
   * @response `200` `CourseDetailDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `404` `ErrorDto` Not Found
   * @response `500` `ErrorDto` Internal Server Error
   */
  courseDetail = (id: number, params: RequestParams = {}) =>
    this.http.request<CourseDetailDataDto, CourseDetailErrorDto>({
      path: `/courses/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description Update course details by ID
   *
   * @tags courses
   * @name CourseUpdate
   * @summary Update an existing course
   * @request PUT:/courses/{id}
   * @response `200` `CourseUpdateDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `404` `ErrorDto` Not Found
   * @response `500` `ErrorDto` Internal Server Error
   */
  courseUpdate = (id: number, data: CourseUpdatePayloadDto, params: RequestParams = {}) =>
    this.http.request<CourseUpdateDataDto, CourseUpdateErrorDto>({
      path: `/courses/${id}`,
      method: 'PUT',
      body: data,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description Delete a course by ID
   *
   * @tags courses
   * @name CourseDelete
   * @summary Delete a course
   * @request DELETE:/courses/{id}
   * @response `200` `CourseDeleteDataDto` OK
   * @response `404` `ErrorDto` Not Found
   * @response `500` `ErrorDto` Internal Server Error
   */
  courseDelete = (id: number, params: RequestParams = {}) =>
    this.http.request<CourseDeleteDataDto, CourseDeleteErrorDto>({
      path: `/courses/${id}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    });
}
