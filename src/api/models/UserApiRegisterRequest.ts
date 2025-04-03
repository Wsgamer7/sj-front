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
import type { CtypeRole } from './CtypeRole';
import {
    CtypeRoleFromJSON,
    CtypeRoleFromJSONTyped,
    CtypeRoleToJSON,
    CtypeRoleToJSONTyped,
} from './CtypeRole';

/**
 * 
 * @export
 * @interface UserApiRegisterRequest
 */
export interface UserApiRegisterRequest {
    /**
     * 
     * @type {string}
     * @memberof UserApiRegisterRequest
     */
    password?: string;
    /**
     * 
     * @type {CtypeRole}
     * @memberof UserApiRegisterRequest
     */
    role?: CtypeRole;
    /**
     * 
     * @type {string}
     * @memberof UserApiRegisterRequest
     */
    userID?: string;
}



/**
 * Check if a given object implements the UserApiRegisterRequest interface.
 */
export function instanceOfUserApiRegisterRequest(value: object): value is UserApiRegisterRequest {
    return true;
}

export function UserApiRegisterRequestFromJSON(json: any): UserApiRegisterRequest {
    return UserApiRegisterRequestFromJSONTyped(json, false);
}

export function UserApiRegisterRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserApiRegisterRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'password': json['password'] == null ? undefined : json['password'],
        'role': json['role'] == null ? undefined : CtypeRoleFromJSON(json['role']),
        'userID': json['userID'] == null ? undefined : json['userID'],
    };
}

  export function UserApiRegisterRequestToJSON(json: any): UserApiRegisterRequest {
      return UserApiRegisterRequestToJSONTyped(json, false);
  }

  export function UserApiRegisterRequestToJSONTyped(value?: UserApiRegisterRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'password': value['password'],
        'role': CtypeRoleToJSON(value['role']),
        'userID': value['userID'],
    };
}

