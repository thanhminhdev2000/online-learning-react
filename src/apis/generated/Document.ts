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
  ClassesListDataDto,
  ClassesListErrorDto,
  DocumentCreateDataDto,
  DocumentCreateErrorDto,
  DocumentCreatePayloadDto,
  DocumentDeleteDataDto,
  DocumentDeleteErrorDto,
  DocumentListDataDto,
  DocumentListErrorDto,
  DocumentListParamsDto,
  DocumentUpdateDataDto,
  DocumentUpdateErrorDto,
  DocumentUpdatePayloadDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Document<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns a list of documents, which can be filtered by `subjectId` and `title`. Limits the number of returned documents using the `limit` parameter.
   *
   * @tags Document
   * @name DocumentList
   * @summary Retrieve document list
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
   * @description Upload document file
   *
   * @tags Document
   * @name DocumentCreate
   * @summary Upload document file
   * @request POST:/documents/
   * @secure
   * @response `200` `DocumentCreateDataDto` OK
   * @response `500` `ErrorDto` Internal Server Error
   */
  documentCreate = (data: DocumentCreatePayloadDto, params: RequestParams = {}) =>
    this.http.request<DocumentCreateDataDto, DocumentCreateErrorDto>({
      path: `/documents/`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description List of classes with their subjects and document counts
   *
   * @tags Document
   * @name ClassesList
   * @summary List of classes with their subjects and document counts
   * @request GET:/documents/classes
   * @response `200` `ClassesListDataDto` OK
   * @response `500` `ErrorDto` Internal Server Error
   */
  classesList = (params: RequestParams = {}) =>
    this.http.request<ClassesListDataDto, ClassesListErrorDto>({
      path: `/documents/classes`,
      method: 'GET',
      ...params,
    });
  /**
   * @description Update a document's information and optionally replace its file by document ID
   *
   * @tags Document
   * @name DocumentUpdate
   * @summary Update a document, including replacing its file
   * @request PUT:/documents/{id}
   * @secure
   * @response `200` `DocumentUpdateDataDto` OK
   * @response `400` `ErrorDto` Bad Request
   * @response `403` `ErrorDto` Forbidden
   * @response `500` `ErrorDto` Internal Server Error
   */
  documentUpdate = (id: number, data: DocumentUpdatePayloadDto, params: RequestParams = {}) =>
    this.http.request<DocumentUpdateDataDto, DocumentUpdateErrorDto>({
      path: `/documents/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description Delete a document by document ID
   *
   * @tags Document
   * @name DocumentDelete
   * @summary Delete document
   * @request DELETE:/documents/{id}
   * @secure
   * @response `200` `DocumentDeleteDataDto` OK
   * @response `500` `ErrorDto` Internal Server Error
   */
  documentDelete = (id: number, params: RequestParams = {}) =>
    this.http.request<DocumentDeleteDataDto, DocumentDeleteErrorDto>({
      path: `/documents/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
}
