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
  LessonCreateDataDto,
  LessonCreateErrorDto,
  LessonCreatePayloadDto,
  LessonDeleteDataDto,
  LessonDeleteErrorDto,
  LessonUpdateDataDto,
  LessonUpdateErrorDto,
  LessonUpdatePayloadDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Lesson<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Create a new lesson with video upload
   *
   * @tags Lesson
   * @name LessonCreate
   * @summary Create a new lesson
   * @request POST:/lessons/
   * @secure
   * @response `200` `LessonCreateDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `500` `ErrorDto` Internal Server Error
   */
  lessonCreate = (data: LessonCreatePayloadDto, params: RequestParams = {}) =>
    this.http.request<LessonCreateDataDto, LessonCreateErrorDto>({
      path: `/lessons/`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description Update the title and video of a lesson
   *
   * @tags Lesson
   * @name LessonUpdate
   * @summary Update an existing lesson
   * @request PUT:/lessons/{id}
   * @secure
   * @response `200` `LessonUpdateDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `404` `ErrorDto` Not Found
   * @response `500` `ErrorDto` Internal Server Error
   */
  lessonUpdate = (id: number, data: LessonUpdatePayloadDto, params: RequestParams = {}) =>
    this.http.request<LessonUpdateDataDto, LessonUpdateErrorDto>({
      path: `/lessons/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description Delete a lesson by ID
   *
   * @tags Lesson
   * @name LessonDelete
   * @summary Delete an existing lesson
   * @request DELETE:/lessons/{id}
   * @secure
   * @response `200` `LessonDeleteDataDto` OK
   * @response `404` `ErrorDto` Not Found
   * @response `500` `ErrorDto` Internal Server Error
   */
  lessonDelete = (id: number, params: RequestParams = {}) =>
    this.http.request<LessonDeleteDataDto, LessonDeleteErrorDto>({
      path: `/lessons/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
}
