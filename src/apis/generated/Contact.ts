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

import { ContactCreateDataDto, ContactCreateErrorDto, ContactDto } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Contact<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Send email contact
   *
   * @tags Contact
   * @name ContactCreate
   * @summary Send email contact
   * @request POST:/contact/
   * @response `200` `ContactCreateDataDto` OK
   * @response `500` `ErrorDto` Internal Server Error
   */
  contactCreate = (contact: ContactDto, params: RequestParams = {}) =>
    this.http.request<ContactCreateDataDto, ContactCreateErrorDto>({
      path: `/contact/`,
      method: 'POST',
      body: contact,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
