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
 * @interface UserApiLoginRequest
 */
export interface UserApiLoginRequest {
    /**
     * 
     * @type {string}
     * @memberof UserApiLoginRequest
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof UserApiLoginRequest
     */
    userID?: string;
}

/**
 * Check if a given object implements the UserApiLoginRequest interface.
 */
export function instanceOfUserApiLoginRequest(value: object): value is UserApiLoginRequest {
    return true;
}

export function UserApiLoginRequestFromJSON(json: any): UserApiLoginRequest {
    return UserApiLoginRequestFromJSONTyped(json, false);
}

export function UserApiLoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserApiLoginRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'password': json['password'] == null ? undefined : json['password'],
        'userID': json['userID'] == null ? undefined : json['userID'],
    };
}

  export function UserApiLoginRequestToJSON(json: any): UserApiLoginRequest {
      return UserApiLoginRequestToJSONTyped(json, false);
  }

  export function UserApiLoginRequestToJSONTyped(value?: UserApiLoginRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'password': value['password'],
        'userID': value['userID'],
    };
}

