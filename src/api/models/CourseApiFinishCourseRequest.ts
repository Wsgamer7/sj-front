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
 * @interface CourseApiFinishCourseRequest
 */
export interface CourseApiFinishCourseRequest {
    /**
     * 
     * @type {number}
     * @memberof CourseApiFinishCourseRequest
     */
    courseID?: number;
    /**
     * 
     * @type {number}
     * @memberof CourseApiFinishCourseRequest
     */
    userID?: number;
}

/**
 * Check if a given object implements the CourseApiFinishCourseRequest interface.
 */
export function instanceOfCourseApiFinishCourseRequest(value: object): value is CourseApiFinishCourseRequest {
    return true;
}

export function CourseApiFinishCourseRequestFromJSON(json: any): CourseApiFinishCourseRequest {
    return CourseApiFinishCourseRequestFromJSONTyped(json, false);
}

export function CourseApiFinishCourseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CourseApiFinishCourseRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'courseID': json['courseID'] == null ? undefined : json['courseID'],
        'userID': json['userID'] == null ? undefined : json['userID'],
    };
}

  export function CourseApiFinishCourseRequestToJSON(json: any): CourseApiFinishCourseRequest {
      return CourseApiFinishCourseRequestToJSONTyped(json, false);
  }

  export function CourseApiFinishCourseRequestToJSONTyped(value?: CourseApiFinishCourseRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'courseID': value['courseID'],
        'userID': value['userID'],
    };
}

