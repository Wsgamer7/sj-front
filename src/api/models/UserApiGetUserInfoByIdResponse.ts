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
 * @interface UserApiGetUserInfoByIdResponse
 */
export interface UserApiGetUserInfoByIdResponse {
    /**
     * 
     * @type {ModelsUserModel}
     * @memberof UserApiGetUserInfoByIdResponse
     */
    userInfo?: ModelsUserModel;
}

/**
 * Check if a given object implements the UserApiGetUserInfoByIdResponse interface.
 */
export function instanceOfUserApiGetUserInfoByIdResponse(value: object): value is UserApiGetUserInfoByIdResponse {
    return true;
}

export function UserApiGetUserInfoByIdResponseFromJSON(json: any): UserApiGetUserInfoByIdResponse {
    return UserApiGetUserInfoByIdResponseFromJSONTyped(json, false);
}

export function UserApiGetUserInfoByIdResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserApiGetUserInfoByIdResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'userInfo': json['userInfo'] == null ? undefined : ModelsUserModelFromJSON(json['userInfo']),
    };
}

  export function UserApiGetUserInfoByIdResponseToJSON(json: any): UserApiGetUserInfoByIdResponse {
      return UserApiGetUserInfoByIdResponseToJSONTyped(json, false);
  }

  export function UserApiGetUserInfoByIdResponseToJSONTyped(value?: UserApiGetUserInfoByIdResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'userInfo': ModelsUserModelToJSON(value['userInfo']),
    };
}

