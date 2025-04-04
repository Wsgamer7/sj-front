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
 * @interface MessageApiCreateConversationResponse
 */
export interface MessageApiCreateConversationResponse {
    /**
     * 
     * @type {number}
     * @memberof MessageApiCreateConversationResponse
     */
    conversationID?: number;
}

/**
 * Check if a given object implements the MessageApiCreateConversationResponse interface.
 */
export function instanceOfMessageApiCreateConversationResponse(value: object): value is MessageApiCreateConversationResponse {
    return true;
}

export function MessageApiCreateConversationResponseFromJSON(json: any): MessageApiCreateConversationResponse {
    return MessageApiCreateConversationResponseFromJSONTyped(json, false);
}

export function MessageApiCreateConversationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageApiCreateConversationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'conversationID': json['conversationID'] == null ? undefined : json['conversationID'],
    };
}

  export function MessageApiCreateConversationResponseToJSON(json: any): MessageApiCreateConversationResponse {
      return MessageApiCreateConversationResponseToJSONTyped(json, false);
  }

  export function MessageApiCreateConversationResponseToJSONTyped(value?: MessageApiCreateConversationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'conversationID': value['conversationID'],
    };
}

