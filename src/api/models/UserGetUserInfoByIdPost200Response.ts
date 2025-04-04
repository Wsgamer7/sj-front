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
import type { UserApiGetUserInfoByIdResponse } from './UserApiGetUserInfoByIdResponse';
import {
    UserApiGetUserInfoByIdResponseFromJSON,
    UserApiGetUserInfoByIdResponseFromJSONTyped,
    UserApiGetUserInfoByIdResponseToJSON,
    UserApiGetUserInfoByIdResponseToJSONTyped,
} from './UserApiGetUserInfoByIdResponse';

/**
 * 
 * @export
 * @interface UserGetUserInfoByIdPost200Response
 */
export interface UserGetUserInfoByIdPost200Response {
    /**
     * 业务状态码
     * @type {ResCode}
     * @memberof UserGetUserInfoByIdPost200Response
     */
    code?: ResCode;
    /**
     * 
     * @type {UserApiGetUserInfoByIdResponse}
     * @memberof UserGetUserInfoByIdPost200Response
     */
    data?: UserApiGetUserInfoByIdResponse;
    /**
     * 
     * @type {string}
     * @memberof UserGetUserInfoByIdPost200Response
     */
    msg?: string;
}



/**
 * Check if a given object implements the UserGetUserInfoByIdPost200Response interface.
 */
export function instanceOfUserGetUserInfoByIdPost200Response(value: object): value is UserGetUserInfoByIdPost200Response {
    return true;
}

export function UserGetUserInfoByIdPost200ResponseFromJSON(json: any): UserGetUserInfoByIdPost200Response {
    return UserGetUserInfoByIdPost200ResponseFromJSONTyped(json, false);
}

export function UserGetUserInfoByIdPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserGetUserInfoByIdPost200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : ResCodeFromJSON(json['code']),
        'data': json['data'] == null ? undefined : UserApiGetUserInfoByIdResponseFromJSON(json['data']),
        'msg': json['msg'] == null ? undefined : json['msg'],
    };
}

  export function UserGetUserInfoByIdPost200ResponseToJSON(json: any): UserGetUserInfoByIdPost200Response {
      return UserGetUserInfoByIdPost200ResponseToJSONTyped(json, false);
  }

  export function UserGetUserInfoByIdPost200ResponseToJSONTyped(value?: UserGetUserInfoByIdPost200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': ResCodeToJSON(value['code']),
        'data': UserApiGetUserInfoByIdResponseToJSON(value['data']),
        'msg': value['msg'],
    };
}

