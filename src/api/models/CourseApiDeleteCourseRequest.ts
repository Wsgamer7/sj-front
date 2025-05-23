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
 * @interface CourseApiDeleteCourseRequest
 */
export interface CourseApiDeleteCourseRequest {
    /**
     * 
     * @type {number}
     * @memberof CourseApiDeleteCourseRequest
     */
    courseID?: number;
}

/**
 * Check if a given object implements the CourseApiDeleteCourseRequest interface.
 */
export function instanceOfCourseApiDeleteCourseRequest(value: object): value is CourseApiDeleteCourseRequest {
    return true;
}

export function CourseApiDeleteCourseRequestFromJSON(json: any): CourseApiDeleteCourseRequest {
    return CourseApiDeleteCourseRequestFromJSONTyped(json, false);
}

export function CourseApiDeleteCourseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CourseApiDeleteCourseRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'courseID': json['courseID'] == null ? undefined : json['courseID'],
    };
}

  export function CourseApiDeleteCourseRequestToJSON(json: any): CourseApiDeleteCourseRequest {
      return CourseApiDeleteCourseRequestToJSONTyped(json, false);
  }

  export function CourseApiDeleteCourseRequestToJSONTyped(value?: CourseApiDeleteCourseRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'courseID': value['courseID'],
    };
}

