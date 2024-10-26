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
  DocumentListDataDto,
  DocumentListErrorDto,
  DocumentListParamsDto,
  SubjectsListDataDto,
  SubjectsListErrorDto,
  UploadCreateDataDto,
  UploadCreateErrorDto,
  UploadCreatePayloadDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Document<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Trả về danh sách các tài liệu, có thể lọc theo `subjectId` và `title`. Giới hạn số lượng tài liệu trả về bằng tham số `limit`.
   *
   * @tags Document
   * @name DocumentList
   * @summary Lấy danh sách tài liệu
   * @request GET:/documents/
   * @response `200` `DocumentListDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `500` `ErrorDto` Internal Server Error
   */
  documentList = (query: DocumentListParamsDto, params: RequestParams = {}) =>
    this.http.request<DocumentListDataDto, DocumentListErrorDto>({
      path: `/documents/`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description List of classes with their subjects and document counts
   *
   * @tags Document
   * @name SubjectsList
   * @summary List of classes with their subjects and document counts
   * @request GET:/documents/subjects
   * @response `200` `SubjectsListDataDto` OK
   * @response `500` `ErrorDto` Internal Server Error
   */
  subjectsList = (params: RequestParams = {}) =>
    this.http.request<SubjectsListDataDto, SubjectsListErrorDto>({
      path: `/documents/subjects`,
      method: 'GET',
      ...params,
    });
  /**
   * @description Upload document file
   *
   * @tags Document
   * @name UploadCreate
   * @summary Upload document file
   * @request POST:/documents/upload
   * @secure
   * @response `200` `UploadCreateDataDto` OK
   * @response `500` `ErrorDto` Internal Server Error
   */
  uploadCreate = (data: UploadCreatePayloadDto, params: RequestParams = {}) =>
    this.http.request<UploadCreateDataDto, UploadCreateErrorDto>({
      path: `/documents/upload`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
}
