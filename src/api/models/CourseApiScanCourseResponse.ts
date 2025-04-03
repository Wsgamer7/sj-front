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
import type { ModelsCourseModel } from './ModelsCourseModel';
import {
    ModelsCourseModelFromJSON,
    ModelsCourseModelFromJSONTyped,
    ModelsCourseModelToJSON,
    ModelsCourseModelToJSONTyped,
} from './ModelsCourseModel';

/**
 * 
 * @export
 * @interface CourseApiScanCourseResponse
 */
export interface CourseApiScanCourseResponse {
    /**
     * 
     * @type {Array<ModelsCourseModel>}
     * @memberof CourseApiScanCourseResponse
     */
    course_list?: Array<ModelsCourseModel>;
}

/**
 * Check if a given object implements the CourseApiScanCourseResponse interface.
 */
export function instanceOfCourseApiScanCourseResponse(value: object): value is CourseApiScanCourseResponse {
    return true;
}

export function CourseApiScanCourseResponseFromJSON(json: any): CourseApiScanCourseResponse {
    return CourseApiScanCourseResponseFromJSONTyped(json, false);
}

export function CourseApiScanCourseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CourseApiScanCourseResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'course_list': json['course_list'] == null ? undefined : ((json['course_list'] as Array<any>).map(ModelsCourseModelFromJSON)),
    };
}

  export function CourseApiScanCourseResponseToJSON(json: any): CourseApiScanCourseResponse {
      return CourseApiScanCourseResponseToJSONTyped(json, false);
  }

  export function CourseApiScanCourseResponseToJSONTyped(value?: CourseApiScanCourseResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'course_list': value['course_list'] == null ? undefined : ((value['course_list'] as Array<any>).map(ModelsCourseModelToJSON)),
    };
}

