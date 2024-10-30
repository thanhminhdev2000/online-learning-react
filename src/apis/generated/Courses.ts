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
  CoursesCreateDataDto,
  CoursesCreateErrorDto,
  CoursesDeleteDataDto,
  CoursesDeleteErrorDto,
  CoursesDetailDataDto,
  CoursesDetailErrorDto,
  CoursesListDataDto,
  CoursesListErrorDto,
  CoursesListParamsDto,
  CoursesUpdateDataDto,
  CoursesUpdateErrorDto,
  CoursesUpdatePayloadDto,
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
   * @name CoursesList
   * @summary Get all courses
   * @request GET:/courses
   * @response `200` `CoursesListDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `500` `ErrorDto` Internal Server Error
   */
  coursesList = (query: CoursesListParamsDto, params: RequestParams = {}) =>
    this.http.request<CoursesListDataDto, CoursesListErrorDto>({
      path: `/courses`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Create a new course with the provided details
   *
   * @tags courses
   * @name CoursesCreate
   * @summary Create a new course
   * @request POST:/courses
   * @response `200` `CoursesCreateDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `500` `ErrorDto` Internal Server Error
   */
  coursesCreate = (data: any, params: RequestParams = {}) =>
    this.http.request<CoursesCreateDataDto, CoursesCreateErrorDto>({
      path: `/courses`,
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
   * @name CoursesDetail
   * @summary Get a course by ID
   * @request GET:/courses/{id}
   * @response `200` `CoursesDetailDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `404` `ErrorDto` Not Found
   * @response `500` `ErrorDto` Internal Server Error
   */
  coursesDetail = (id: number, params: RequestParams = {}) =>
    this.http.request<CoursesDetailDataDto, CoursesDetailErrorDto>({
      path: `/courses/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description Update course details by ID
   *
   * @tags courses
   * @name CoursesUpdate
   * @summary Update an existing course
   * @request PUT:/courses/{id}
   * @response `200` `CoursesUpdateDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `404` `ErrorDto` Not Found
   * @response `500` `ErrorDto` Internal Server Error
   */
  coursesUpdate = (id: number, data: CoursesUpdatePayloadDto, params: RequestParams = {}) =>
    this.http.request<CoursesUpdateDataDto, CoursesUpdateErrorDto>({
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
   * @name CoursesDelete
   * @summary Delete a course
   * @request DELETE:/courses/{id}
   * @response `200` `CoursesDeleteDataDto` OK
   * @response `404` `ErrorDto` Not Found
   * @response `500` `ErrorDto` Internal Server Error
   */
  coursesDelete = (id: number, params: RequestParams = {}) =>
    this.http.request<CoursesDeleteDataDto, CoursesDeleteErrorDto>({
      path: `/courses/${id}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    });
}
