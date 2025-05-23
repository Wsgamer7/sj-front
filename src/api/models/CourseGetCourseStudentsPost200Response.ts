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
import type { CourseApiGetCourseStudentsResponse } from './CourseApiGetCourseStudentsResponse';
import {
    CourseApiGetCourseStudentsResponseFromJSON,
    CourseApiGetCourseStudentsResponseFromJSONTyped,
    CourseApiGetCourseStudentsResponseToJSON,
    CourseApiGetCourseStudentsResponseToJSONTyped,
} from './CourseApiGetCourseStudentsResponse';
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
 * @interface CourseGetCourseStudentsPost200Response
 */
export interface CourseGetCourseStudentsPost200Response {
    /**
     * 业务状态码
     * @type {ResCode}
     * @memberof CourseGetCourseStudentsPost200Response
     */
    code?: ResCode;
    /**
     * 
     * @type {CourseApiGetCourseStudentsResponse}
     * @memberof CourseGetCourseStudentsPost200Response
     */
    data?: CourseApiGetCourseStudentsResponse;
    /**
     * 
     * @type {string}
     * @memberof CourseGetCourseStudentsPost200Response
     */
    msg?: string;
}



/**
 * Check if a given object implements the CourseGetCourseStudentsPost200Response interface.
 */
export function instanceOfCourseGetCourseStudentsPost200Response(value: object): value is CourseGetCourseStudentsPost200Response {
    return true;
}

export function CourseGetCourseStudentsPost200ResponseFromJSON(json: any): CourseGetCourseStudentsPost200Response {
    return CourseGetCourseStudentsPost200ResponseFromJSONTyped(json, false);
}

export function CourseGetCourseStudentsPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CourseGetCourseStudentsPost200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : ResCodeFromJSON(json['code']),
        'data': json['data'] == null ? undefined : CourseApiGetCourseStudentsResponseFromJSON(json['data']),
        'msg': json['msg'] == null ? undefined : json['msg'],
    };
}

  export function CourseGetCourseStudentsPost200ResponseToJSON(json: any): CourseGetCourseStudentsPost200Response {
      return CourseGetCourseStudentsPost200ResponseToJSONTyped(json, false);
  }

  export function CourseGetCourseStudentsPost200ResponseToJSONTyped(value?: CourseGetCourseStudentsPost200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': ResCodeToJSON(value['code']),
        'data': CourseApiGetCourseStudentsResponseToJSON(value['data']),
        'msg': value['msg'],
    };
}

