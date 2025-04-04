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
 * @interface CourseUpdateCoursePost200Response
 */
export interface CourseUpdateCoursePost200Response {
    /**
     * 业务状态码
     * @type {ResCode}
     * @memberof CourseUpdateCoursePost200Response
     */
    code?: ResCode;
    /**
     * 
     * @type {object}
     * @memberof CourseUpdateCoursePost200Response
     */
    data?: object;
    /**
     * 
     * @type {string}
     * @memberof CourseUpdateCoursePost200Response
     */
    msg?: string;
}



/**
 * Check if a given object implements the CourseUpdateCoursePost200Response interface.
 */
export function instanceOfCourseUpdateCoursePost200Response(value: object): value is CourseUpdateCoursePost200Response {
    return true;
}

export function CourseUpdateCoursePost200ResponseFromJSON(json: any): CourseUpdateCoursePost200Response {
    return CourseUpdateCoursePost200ResponseFromJSONTyped(json, false);
}

export function CourseUpdateCoursePost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CourseUpdateCoursePost200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : ResCodeFromJSON(json['code']),
        'data': json['data'] == null ? undefined : json['data'],
        'msg': json['msg'] == null ? undefined : json['msg'],
    };
}

  export function CourseUpdateCoursePost200ResponseToJSON(json: any): CourseUpdateCoursePost200Response {
      return CourseUpdateCoursePost200ResponseToJSONTyped(json, false);
  }

  export function CourseUpdateCoursePost200ResponseToJSONTyped(value?: CourseUpdateCoursePost200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': ResCodeToJSON(value['code']),
        'data': value['data'],
        'msg': value['msg'],
    };
}

