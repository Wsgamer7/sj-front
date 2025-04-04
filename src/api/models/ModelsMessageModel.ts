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
 * @interface ModelsMessageModel
 */
export interface ModelsMessageModel {
    /**
     * 
     * @type {number}
     * @memberof ModelsMessageModel
     */
    chapter_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsMessageModel
     */
    content?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsMessageModel
     */
    conversation_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsMessageModel
     */
    course_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsMessageModel
     */
    createdAt?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsMessageModel
     */
    id?: number;
    /**
     * user 1, ai 2
     * @type {number}
     * @memberof ModelsMessageModel
     */
    message_type?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsMessageModel
     */
    user_id?: number;
}

/**
 * Check if a given object implements the ModelsMessageModel interface.
 */
export function instanceOfModelsMessageModel(value: object): value is ModelsMessageModel {
    return true;
}

export function ModelsMessageModelFromJSON(json: any): ModelsMessageModel {
    return ModelsMessageModelFromJSONTyped(json, false);
}

export function ModelsMessageModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsMessageModel {
    if (json == null) {
        return json;
    }
    return {
        
        'chapter_id': json['chapter_id'] == null ? undefined : json['chapter_id'],
        'content': json['content'] == null ? undefined : json['content'],
        'conversation_id': json['conversation_id'] == null ? undefined : json['conversation_id'],
        'course_id': json['course_id'] == null ? undefined : json['course_id'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'id': json['id'] == null ? undefined : json['id'],
        'message_type': json['message_type'] == null ? undefined : json['message_type'],
        'user_id': json['user_id'] == null ? undefined : json['user_id'],
    };
}

  export function ModelsMessageModelToJSON(json: any): ModelsMessageModel {
      return ModelsMessageModelToJSONTyped(json, false);
  }

  export function ModelsMessageModelToJSONTyped(value?: ModelsMessageModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chapter_id': value['chapter_id'],
        'content': value['content'],
        'conversation_id': value['conversation_id'],
        'course_id': value['course_id'],
        'createdAt': value['createdAt'],
        'id': value['id'],
        'message_type': value['message_type'],
        'user_id': value['user_id'],
    };
}

