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
import type { CourseApiGetChapterByIDResponse } from './CourseApiGetChapterByIDResponse';
import {
    CourseApiGetChapterByIDResponseFromJSON,
    CourseApiGetChapterByIDResponseFromJSONTyped,
    CourseApiGetChapterByIDResponseToJSON,
    CourseApiGetChapterByIDResponseToJSONTyped,
} from './CourseApiGetChapterByIDResponse';

/**
 * 
 * @export
 * @interface CourseGetChapterByIdPost200Response
 */
export interface CourseGetChapterByIdPost200Response {
    /**
     * 业务状态码
     * @type {ResCode}
     * @memberof CourseGetChapterByIdPost200Response
     */
    code?: ResCode;
    /**
     * 
     * @type {CourseApiGetChapterByIDResponse}
     * @memberof CourseGetChapterByIdPost200Response
     */
    data?: CourseApiGetChapterByIDResponse;
    /**
     * 
     * @type {string}
     * @memberof CourseGetChapterByIdPost200Response
     */
    msg?: string;
}



/**
 * Check if a given object implements the CourseGetChapterByIdPost200Response interface.
 */
export function instanceOfCourseGetChapterByIdPost200Response(value: object): value is CourseGetChapterByIdPost200Response {
    return true;
}

export function CourseGetChapterByIdPost200ResponseFromJSON(json: any): CourseGetChapterByIdPost200Response {
    return CourseGetChapterByIdPost200ResponseFromJSONTyped(json, false);
}

export function CourseGetChapterByIdPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CourseGetChapterByIdPost200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : ResCodeFromJSON(json['code']),
        'data': json['data'] == null ? undefined : CourseApiGetChapterByIDResponseFromJSON(json['data']),
        'msg': json['msg'] == null ? undefined : json['msg'],
    };
}

  export function CourseGetChapterByIdPost200ResponseToJSON(json: any): CourseGetChapterByIdPost200Response {
      return CourseGetChapterByIdPost200ResponseToJSONTyped(json, false);
  }

  export function CourseGetChapterByIdPost200ResponseToJSONTyped(value?: CourseGetChapterByIdPost200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': ResCodeToJSON(value['code']),
        'data': CourseApiGetChapterByIDResponseToJSON(value['data']),
        'msg': value['msg'],
    };
}

