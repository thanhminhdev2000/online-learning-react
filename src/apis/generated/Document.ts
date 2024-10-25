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
   * @description List of classes with their subjects and document counts
   *
   * @tags Document
   * @name DocumentList
   * @summary List of classes with their subjects and document counts
   * @request GET:/documents/
   * @secure
   * @response `200` `DocumentListDataDto` OK
   * @response `500` `ErrorDto` Internal Server Error
   */
  documentList = (params: RequestParams = {}) =>
    this.http.request<DocumentListDataDto, DocumentListErrorDto>({
      path: `/documents/`,
      method: 'GET',
      secure: true,
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
