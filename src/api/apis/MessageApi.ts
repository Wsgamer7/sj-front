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
  MessageApiCreateConversationRequest,
  MessageApiGetHistoryMsgRequest,
  MessageApiSendMsgRequest,
  MessageCreateConversationPost200Response,
  MessageGetHistoryMsgPost200Response,
  MessageSendMsgPost200Response,
} from '../models/index';
import {
    MessageApiCreateConversationRequestFromJSON,
    MessageApiCreateConversationRequestToJSON,
    MessageApiGetHistoryMsgRequestFromJSON,
    MessageApiGetHistoryMsgRequestToJSON,
    MessageApiSendMsgRequestFromJSON,
    MessageApiSendMsgRequestToJSON,
    MessageCreateConversationPost200ResponseFromJSON,
    MessageCreateConversationPost200ResponseToJSON,
    MessageGetHistoryMsgPost200ResponseFromJSON,
    MessageGetHistoryMsgPost200ResponseToJSON,
    MessageSendMsgPost200ResponseFromJSON,
    MessageSendMsgPost200ResponseToJSON,
} from '../models/index';

export interface MessageCreateConversationPostRequest {
    data: MessageApiCreateConversationRequest;
}

export interface MessageGetHistoryMsgPostRequest {
    data: MessageApiGetHistoryMsgRequest;
}

export interface MessageSendMsgPostRequest {
    data: MessageApiSendMsgRequest;
}

/**
 * 
 */
export class MessageApi extends runtime.BaseAPI {

    /**
     * 创建对话
     * 创建对话
     */
    async messageCreateConversationPostRaw(requestParameters: MessageCreateConversationPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MessageCreateConversationPost200Response>> {
        if (requestParameters['data'] == null) {
            throw new runtime.RequiredError(
                'data',
                'Required parameter "data" was null or undefined when calling messageCreateConversationPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/message/create_conversation`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MessageApiCreateConversationRequestToJSON(requestParameters['data']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MessageCreateConversationPost200ResponseFromJSON(jsonValue));
    }

    /**
     * 创建对话
     * 创建对话
     */
    async messageCreateConversationPost(requestParameters: MessageCreateConversationPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageCreateConversationPost200Response> {
        const response = await this.messageCreateConversationPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 获取历史消息
     * 获取历史消息
     */
    async messageGetHistoryMsgPostRaw(requestParameters: MessageGetHistoryMsgPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MessageGetHistoryMsgPost200Response>> {
        if (requestParameters['data'] == null) {
            throw new runtime.RequiredError(
                'data',
                'Required parameter "data" was null or undefined when calling messageGetHistoryMsgPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/message/get_history_msg`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MessageApiGetHistoryMsgRequestToJSON(requestParameters['data']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MessageGetHistoryMsgPost200ResponseFromJSON(jsonValue));
    }

    /**
     * 获取历史消息
     * 获取历史消息
     */
    async messageGetHistoryMsgPost(requestParameters: MessageGetHistoryMsgPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageGetHistoryMsgPost200Response> {
        const response = await this.messageGetHistoryMsgPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 发送消息
     * 发送消息
     */
    async messageSendMsgPostRaw(requestParameters: MessageSendMsgPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MessageSendMsgPost200Response>> {
        if (requestParameters['data'] == null) {
            throw new runtime.RequiredError(
                'data',
                'Required parameter "data" was null or undefined when calling messageSendMsgPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/message/send_msg`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MessageApiSendMsgRequestToJSON(requestParameters['data']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MessageSendMsgPost200ResponseFromJSON(jsonValue));
    }

    /**
     * 发送消息
     * 发送消息
     */
    async messageSendMsgPost(requestParameters: MessageSendMsgPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageSendMsgPost200Response> {
        const response = await this.messageSendMsgPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
