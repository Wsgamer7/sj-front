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
 * @interface UserApiGetUserInfoByIdRequest
 */
export interface UserApiGetUserInfoByIdRequest {
    /**
     * 
     * @type {number}
     * @memberof UserApiGetUserInfoByIdRequest
     */
    userID?: number;
}

/**
 * Check if a given object implements the UserApiGetUserInfoByIdRequest interface.
 */
export function instanceOfUserApiGetUserInfoByIdRequest(value: object): value is UserApiGetUserInfoByIdRequest {
    return true;
}

export function UserApiGetUserInfoByIdRequestFromJSON(json: any): UserApiGetUserInfoByIdRequest {
    return UserApiGetUserInfoByIdRequestFromJSONTyped(json, false);
}

export function UserApiGetUserInfoByIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserApiGetUserInfoByIdRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'userID': json['userID'] == null ? undefined : json['userID'],
    };
}

  export function UserApiGetUserInfoByIdRequestToJSON(json: any): UserApiGetUserInfoByIdRequest {
      return UserApiGetUserInfoByIdRequestToJSONTyped(json, false);
  }

  export function UserApiGetUserInfoByIdRequestToJSONTyped(value?: UserApiGetUserInfoByIdRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'userID': value['userID'],
    };
}

