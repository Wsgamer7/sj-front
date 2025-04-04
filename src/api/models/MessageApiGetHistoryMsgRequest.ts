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
 * @interface MessageApiGetHistoryMsgRequest
 */
export interface MessageApiGetHistoryMsgRequest {
    /**
     * 
     * @type {number}
     * @memberof MessageApiGetHistoryMsgRequest
     */
    chapterID?: number;
    /**
     * 
     * @type {number}
     * @memberof MessageApiGetHistoryMsgRequest
     */
    courseID?: number;
    /**
     * 
     * @type {number}
     * @memberof MessageApiGetHistoryMsgRequest
     */
    userID?: number;
}

/**
 * Check if a given object implements the MessageApiGetHistoryMsgRequest interface.
 */
export function instanceOfMessageApiGetHistoryMsgRequest(value: object): value is MessageApiGetHistoryMsgRequest {
    return true;
}

export function MessageApiGetHistoryMsgRequestFromJSON(json: any): MessageApiGetHistoryMsgRequest {
    return MessageApiGetHistoryMsgRequestFromJSONTyped(json, false);
}

export function MessageApiGetHistoryMsgRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageApiGetHistoryMsgRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'chapterID': json['chapterID'] == null ? undefined : json['chapterID'],
        'courseID': json['courseID'] == null ? undefined : json['courseID'],
        'userID': json['userID'] == null ? undefined : json['userID'],
    };
}

  export function MessageApiGetHistoryMsgRequestToJSON(json: any): MessageApiGetHistoryMsgRequest {
      return MessageApiGetHistoryMsgRequestToJSONTyped(json, false);
  }

  export function MessageApiGetHistoryMsgRequestToJSONTyped(value?: MessageApiGetHistoryMsgRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chapterID': value['chapterID'],
        'courseID': value['courseID'],
        'userID': value['userID'],
    };
}

