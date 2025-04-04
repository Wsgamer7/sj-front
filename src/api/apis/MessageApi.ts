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
  MessageApiGetHistoryMsgRequest,
  MessageApiResetConversationRequest,
  MessageApiSendMsgRequest,
  MessageGetConversationIdPost200Response,
  MessageGetHistoryMsgPost200Response,
  MessageResetConversationPost200Response,
  MessageSendMsgPost200Response,
} from '../models/index';
import {
    MessageApiGetConversationIDRequestFromJSON,
    MessageApiGetConversationIDRequestToJSON,
    MessageApiGetHistoryMsgRequestFromJSON,
    MessageApiGetHistoryMsgRequestToJSON,
    MessageApiResetConversationRequestFromJSON,
    MessageApiResetConversationRequestToJSON,
    MessageApiSendMsgRequestFromJSON,
    MessageApiSendMsgRequestToJSON,
    MessageGetConversationIdPost200ResponseFromJSON,
    MessageGetConversationIdPost200ResponseToJSON,
    MessageGetHistoryMsgPost200ResponseFromJSON,
    MessageGetHistoryMsgPost200ResponseToJSON,
    MessageResetConversationPost200ResponseFromJSON,
    MessageResetConversationPost200ResponseToJSON,
    MessageSendMsgPost200ResponseFromJSON,
    MessageSendMsgPost200ResponseToJSON,
} from '../models/index';

export interface MessageGetConversationIdPostRequest {
    data: MessageApiGetConversationIDRequest;
}

export interface MessageGetHistoryMsgPostRequest {
    data: MessageApiGetHistoryMsgRequest;
}

export interface MessageResetConversationPostRequest {
    data: MessageApiResetConversationRequest;
}

export interface MessageSendMsgPostRequest {
    data: MessageApiSendMsgRequest;
}

/**
 * 
 */
export class MessageApi extends runtime.BaseAPI {

    /**
     * 获取对话ID
     * 获取对话ID
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
     * 获取对话ID
     * 获取对话ID
     */
    async messageGetConversationIdPost(requestParameters: MessageGetConversationIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageGetConversationIdPost200Response> {
        const response = await this.messageGetConversationIdPostRaw(requestParameters, initOverrides);
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
     * 重置对话
     * 重置对话
     */
    async messageResetConversationPostRaw(requestParameters: MessageResetConversationPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MessageResetConversationPost200Response>> {
        if (requestParameters['data'] == null) {
            throw new runtime.RequiredError(
                'data',
                'Required parameter "data" was null or undefined when calling messageResetConversationPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/message/reset_conversation`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MessageApiResetConversationRequestToJSON(requestParameters['data']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MessageResetConversationPost200ResponseFromJSON(jsonValue));
    }

    /**
     * 重置对话
     * 重置对话
     */
    async messageResetConversationPost(requestParameters: MessageResetConversationPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageResetConversationPost200Response> {
        const response = await this.messageResetConversationPostRaw(requestParameters, initOverrides);
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
