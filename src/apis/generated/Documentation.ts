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

import { DocumentationsListDataDto, DocumentationsListErrorDto } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Documentation<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description List of classes with their subjects and document counts
   *
   * @tags Documentation
   * @name DocumentationsList
   * @summary List of classes with their subjects and document counts
   * @request GET:/documentations/
   * @secure
   * @response `200` `DocumentationsListDataDto` OK
   * @response `500` `ErrorDto` Internal Server Error
   */
  documentationsList = (params: RequestParams = {}) =>
    this.http.request<DocumentationsListDataDto, DocumentationsListErrorDto>({
      path: `/documentations/`,
      method: 'GET',
      secure: true,
      ...params,
    });
}
