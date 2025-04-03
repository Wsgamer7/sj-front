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
import type { ResCode } from './ResCode';
import {
    ResCodeFromJSON,
    ResCodeFromJSONTyped,
    ResCodeToJSON,
    ResCodeToJSONTyped,
} from './ResCode';

/**
 * 
 * @export
 * @interface FilePost200Response
 */
export interface FilePost200Response {
    /**
     * 业务状态码
     * @type {ResCode}
     * @memberof FilePost200Response
     */
    code?: ResCode;
    /**
     * 
     * @type {string}
     * @memberof FilePost200Response
     */
    data?: string;
    /**
     * 
     * @type {string}
     * @memberof FilePost200Response
     */
    msg?: string;
}



/**
 * Check if a given object implements the FilePost200Response interface.
 */
export function instanceOfFilePost200Response(value: object): value is FilePost200Response {
    return true;
}

export function FilePost200ResponseFromJSON(json: any): FilePost200Response {
    return FilePost200ResponseFromJSONTyped(json, false);
}

export function FilePost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilePost200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : ResCodeFromJSON(json['code']),
        'data': json['data'] == null ? undefined : json['data'],
        'msg': json['msg'] == null ? undefined : json['msg'],
    };
}

  export function FilePost200ResponseToJSON(json: any): FilePost200Response {
      return FilePost200ResponseToJSONTyped(json, false);
  }

  export function FilePost200ResponseToJSONTyped(value?: FilePost200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': ResCodeToJSON(value['code']),
        'data': value['data'],
        'msg': value['msg'],
    };
}

