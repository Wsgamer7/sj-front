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


import * as runtime from '../runtime';
import type {
  MessageApiGetConversationIDRequest,
  MessageGetConversationIdPost200Response,
} from '../models/index';
import {
    MessageApiGetConversationIDRequestFromJSON,
    MessageApiGetConversationIDRequestToJSON,
    MessageGetConversationIdPost200ResponseFromJSON,
    MessageGetConversationIdPost200ResponseToJSON,
} from '../models/index';

export interface MessageGetConversationIdPostRequest {
    data: MessageApiGetConversationIDRequest;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     */
    async messageGetConversationIdPostRaw(requestParameters: MessageGetConversationIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MessageGetConversationIdPost200Response>> {
        if (requestParameters['data'] == null) {
            throw new runtime.RequiredError(
                'data',
                'Required parameter "data" was null or undefined when calling messageGetConversationIdPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/message/get_conversation_id`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MessageApiGetConversationIDRequestToJSON(requestParameters['data']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MessageGetConversationIdPost200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async messageGetConversationIdPost(requestParameters: MessageGetConversationIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageGetConversationIdPost200Response> {
        const response = await this.messageGetConversationIdPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
