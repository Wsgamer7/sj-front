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
 * @interface ModelsCourseModel
 */
export interface ModelsCourseModel {
    /**
     * 
     * @type {number}
     * @memberof ModelsCourseModel
     */
    courseID?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsCourseModel
     */
    courseName?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsCourseModel
     */
    cover?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsCourseModel
     */
    createdAt?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsCourseModel
     */
    createrID?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsCourseModel
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsCourseModel
     */
    id?: number;
}

/**
 * Check if a given object implements the ModelsCourseModel interface.
 */
export function instanceOfModelsCourseModel(value: object): value is ModelsCourseModel {
    return true;
}

export function ModelsCourseModelFromJSON(json: any): ModelsCourseModel {
    return ModelsCourseModelFromJSONTyped(json, false);
}

export function ModelsCourseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsCourseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'courseID': json['courseID'] == null ? undefined : json['courseID'],
        'courseName': json['courseName'] == null ? undefined : json['courseName'],
        'cover': json['cover'] == null ? undefined : json['cover'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'createrID': json['createrID'] == null ? undefined : json['createrID'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

  export function ModelsCourseModelToJSON(json: any): ModelsCourseModel {
      return ModelsCourseModelToJSONTyped(json, false);
  }

  export function ModelsCourseModelToJSONTyped(value?: ModelsCourseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'courseID': value['courseID'],
        'courseName': value['courseName'],
        'cover': value['cover'],
        'createdAt': value['createdAt'],
        'createrID': value['createrID'],
        'description': value['description'],
        'id': value['id'],
    };
}

