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
import type { CourseApiGetCourseResponse } from './CourseApiGetCourseResponse';
import {
    CourseApiGetCourseResponseFromJSON,
    CourseApiGetCourseResponseFromJSONTyped,
    CourseApiGetCourseResponseToJSON,
    CourseApiGetCourseResponseToJSONTyped,
} from './CourseApiGetCourseResponse';

/**
 * 
 * @export
 * @interface CourseGetCoursePost200Response
 */
export interface CourseGetCoursePost200Response {
    /**
     * 业务状态码
     * @type {ResCode}
     * @memberof CourseGetCoursePost200Response
     */
    code?: ResCode;
    /**
     * 
     * @type {CourseApiGetCourseResponse}
     * @memberof CourseGetCoursePost200Response
     */
    data?: CourseApiGetCourseResponse;
    /**
     * 
     * @type {string}
     * @memberof CourseGetCoursePost200Response
     */
    msg?: string;
}



/**
 * Check if a given object implements the CourseGetCoursePost200Response interface.
 */
export function instanceOfCourseGetCoursePost200Response(value: object): value is CourseGetCoursePost200Response {
    return true;
}

export function CourseGetCoursePost200ResponseFromJSON(json: any): CourseGetCoursePost200Response {
    return CourseGetCoursePost200ResponseFromJSONTyped(json, false);
}

export function CourseGetCoursePost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CourseGetCoursePost200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : ResCodeFromJSON(json['code']),
        'data': json['data'] == null ? undefined : CourseApiGetCourseResponseFromJSON(json['data']),
        'msg': json['msg'] == null ? undefined : json['msg'],
    };
}

  export function CourseGetCoursePost200ResponseToJSON(json: any): CourseGetCoursePost200Response {
      return CourseGetCoursePost200ResponseToJSONTyped(json, false);
  }

  export function CourseGetCoursePost200ResponseToJSONTyped(value?: CourseGetCoursePost200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': ResCodeToJSON(value['code']),
        'data': CourseApiGetCourseResponseToJSON(value['data']),
        'msg': value['msg'],
    };
}

