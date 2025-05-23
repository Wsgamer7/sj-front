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
import type { ResCode } from './ResCode';
import {
    ResCodeFromJSON,
    ResCodeFromJSONTyped,
    ResCodeToJSON,
    ResCodeToJSONTyped,
} from './ResCode';
import type { UserApiLoginResponse } from './UserApiLoginResponse';
import {
    UserApiLoginResponseFromJSON,
    UserApiLoginResponseFromJSONTyped,
    UserApiLoginResponseToJSON,
    UserApiLoginResponseToJSONTyped,
} from './UserApiLoginResponse';

/**
 * 
 * @export
 * @interface UserLoginPost200Response
 */
export interface UserLoginPost200Response {
    /**
     * 业务状态码
     * @type {ResCode}
     * @memberof UserLoginPost200Response
     */
    code?: ResCode;
    /**
     * 
     * @type {UserApiLoginResponse}
     * @memberof UserLoginPost200Response
     */
    data?: UserApiLoginResponse;
    /**
     * 
     * @type {string}
     * @memberof UserLoginPost200Response
     */
    msg?: string;
}



/**
 * Check if a given object implements the UserLoginPost200Response interface.
 */
export function instanceOfUserLoginPost200Response(value: object): value is UserLoginPost200Response {
    return true;
}

export function UserLoginPost200ResponseFromJSON(json: any): UserLoginPost200Response {
    return UserLoginPost200ResponseFromJSONTyped(json, false);
}

export function UserLoginPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserLoginPost200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : ResCodeFromJSON(json['code']),
        'data': json['data'] == null ? undefined : UserApiLoginResponseFromJSON(json['data']),
        'msg': json['msg'] == null ? undefined : json['msg'],
    };
}

  export function UserLoginPost200ResponseToJSON(json: any): UserLoginPost200Response {
      return UserLoginPost200ResponseToJSONTyped(json, false);
  }

  export function UserLoginPost200ResponseToJSONTyped(value?: UserLoginPost200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': ResCodeToJSON(value['code']),
        'data': UserApiLoginResponseToJSON(value['data']),
        'msg': value['msg'],
    };
}

