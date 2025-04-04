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
import type { CourseApiScanCourseResponse } from './CourseApiScanCourseResponse';
import {
    CourseApiScanCourseResponseFromJSON,
    CourseApiScanCourseResponseFromJSONTyped,
    CourseApiScanCourseResponseToJSON,
    CourseApiScanCourseResponseToJSONTyped,
} from './CourseApiScanCourseResponse';

/**
 * 
 * @export
 * @interface CourseScanCoursePost200Response
 */
export interface CourseScanCoursePost200Response {
    /**
     * 业务状态码
     * @type {ResCode}
     * @memberof CourseScanCoursePost200Response
     */
    code?: ResCode;
    /**
     * 
     * @type {CourseApiScanCourseResponse}
     * @memberof CourseScanCoursePost200Response
     */
    data?: CourseApiScanCourseResponse;
    /**
     * 
     * @type {string}
     * @memberof CourseScanCoursePost200Response
     */
    msg?: string;
}



/**
 * Check if a given object implements the CourseScanCoursePost200Response interface.
 */
export function instanceOfCourseScanCoursePost200Response(value: object): value is CourseScanCoursePost200Response {
    return true;
}

export function CourseScanCoursePost200ResponseFromJSON(json: any): CourseScanCoursePost200Response {
    return CourseScanCoursePost200ResponseFromJSONTyped(json, false);
}

export function CourseScanCoursePost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CourseScanCoursePost200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : ResCodeFromJSON(json['code']),
        'data': json['data'] == null ? undefined : CourseApiScanCourseResponseFromJSON(json['data']),
        'msg': json['msg'] == null ? undefined : json['msg'],
    };
}

  export function CourseScanCoursePost200ResponseToJSON(json: any): CourseScanCoursePost200Response {
      return CourseScanCoursePost200ResponseToJSONTyped(json, false);
  }

  export function CourseScanCoursePost200ResponseToJSONTyped(value?: CourseScanCoursePost200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': ResCodeToJSON(value['code']),
        'data': CourseApiScanCourseResponseToJSON(value['data']),
        'msg': value['msg'],
    };
}

