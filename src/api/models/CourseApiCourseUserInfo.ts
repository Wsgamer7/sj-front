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
import type { ModelsUserModel } from './ModelsUserModel';
import {
    ModelsUserModelFromJSON,
    ModelsUserModelFromJSONTyped,
    ModelsUserModelToJSON,
    ModelsUserModelToJSONTyped,
} from './ModelsUserModel';

/**
 * 
 * @export
 * @interface CourseApiCourseUserInfo
 */
export interface CourseApiCourseUserInfo {
    /**
     * 
     * @type {boolean}
     * @memberof CourseApiCourseUserInfo
     */
    passed?: boolean;
    /**
     * 
     * @type {ModelsUserModel}
     * @memberof CourseApiCourseUserInfo
     */
    user?: ModelsUserModel;
}

/**
 * Check if a given object implements the CourseApiCourseUserInfo interface.
 */
export function instanceOfCourseApiCourseUserInfo(value: object): value is CourseApiCourseUserInfo {
    return true;
}

export function CourseApiCourseUserInfoFromJSON(json: any): CourseApiCourseUserInfo {
    return CourseApiCourseUserInfoFromJSONTyped(json, false);
}

export function CourseApiCourseUserInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CourseApiCourseUserInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'passed': json['passed'] == null ? undefined : json['passed'],
        'user': json['user'] == null ? undefined : ModelsUserModelFromJSON(json['user']),
    };
}

  export function CourseApiCourseUserInfoToJSON(json: any): CourseApiCourseUserInfo {
      return CourseApiCourseUserInfoToJSONTyped(json, false);
  }

  export function CourseApiCourseUserInfoToJSONTyped(value?: CourseApiCourseUserInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'passed': value['passed'],
        'user': ModelsUserModelToJSON(value['user']),
    };
}

