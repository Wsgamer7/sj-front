/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ImageApiImageListResponse
 */
export interface ImageApiImageListResponse {
    /**
     * 
     * @type {string}
     * @memberof ImageApiImageListResponse
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof ImageApiImageListResponse
     */
    filePath?: string;
    /**
     * 
     * @type {string}
     * @memberof ImageApiImageListResponse
     */
    filename?: string;
    /**
     * 
     * @type {string}
     * @memberof ImageApiImageListResponse
     */
    hash?: string;
    /**
     * 
     * @type {number}
     * @memberof ImageApiImageListResponse
     */
    id?: number;
    /**
     * 单位是字节
     * @type {number}
     * @memberof ImageApiImageListResponse
     */
    size?: number;
    /**
     * 
     * @type {string}
     * @memberof ImageApiImageListResponse
     */
    userAvatar?: string;
    /**
     * 
     * @type {number}
     * @memberof ImageApiImageListResponse
     */
    userID?: number;
    /**
     * 
     * @type {string}
     * @memberof ImageApiImageListResponse
     */
    userNickname?: string;
    /**
     * 
     * @type {string}
     * @memberof ImageApiImageListResponse
     */
    webPath?: string;
}

/**
 * Check if a given object implements the ImageApiImageListResponse interface.
 */
export function instanceOfImageApiImageListResponse(value: object): value is ImageApiImageListResponse {
    return true;
}

export function ImageApiImageListResponseFromJSON(json: any): ImageApiImageListResponse {
    return ImageApiImageListResponseFromJSONTyped(json, false);
}

export function ImageApiImageListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageApiImageListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'filePath': json['filePath'] == null ? undefined : json['filePath'],
        'filename': json['filename'] == null ? undefined : json['filename'],
        'hash': json['hash'] == null ? undefined : json['hash'],
        'id': json['id'] == null ? undefined : json['id'],
        'size': json['size'] == null ? undefined : json['size'],
        'userAvatar': json['userAvatar'] == null ? undefined : json['userAvatar'],
        'userID': json['userID'] == null ? undefined : json['userID'],
        'userNickname': json['userNickname'] == null ? undefined : json['userNickname'],
        'webPath': json['webPath'] == null ? undefined : json['webPath'],
    };
}

  export function ImageApiImageListResponseToJSON(json: any): ImageApiImageListResponse {
      return ImageApiImageListResponseToJSONTyped(json, false);
  }

  export function ImageApiImageListResponseToJSONTyped(value?: ImageApiImageListResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'createdAt': value['createdAt'],
        'filePath': value['filePath'],
        'filename': value['filename'],
        'hash': value['hash'],
        'id': value['id'],
        'size': value['size'],
        'userAvatar': value['userAvatar'],
        'userID': value['userID'],
        'userNickname': value['userNickname'],
        'webPath': value['webPath'],
    };
}

