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
 * @interface UserApiGetUserInfoRequest
 */
export interface UserApiGetUserInfoRequest {
    /**
     * 
     * @type {string}
     * @memberof UserApiGetUserInfoRequest
     */
    userID?: string;
}

/**
 * Check if a given object implements the UserApiGetUserInfoRequest interface.
 */
export function instanceOfUserApiGetUserInfoRequest(value: object): value is UserApiGetUserInfoRequest {
    return true;
}

export function UserApiGetUserInfoRequestFromJSON(json: any): UserApiGetUserInfoRequest {
    return UserApiGetUserInfoRequestFromJSONTyped(json, false);
}

export function UserApiGetUserInfoRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserApiGetUserInfoRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'userID': json['userID'] == null ? undefined : json['userID'],
    };
}

  export function UserApiGetUserInfoRequestToJSON(json: any): UserApiGetUserInfoRequest {
      return UserApiGetUserInfoRequestToJSONTyped(json, false);
  }

  export function UserApiGetUserInfoRequestToJSONTyped(value?: UserApiGetUserInfoRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'userID': value['userID'],
    };
}

