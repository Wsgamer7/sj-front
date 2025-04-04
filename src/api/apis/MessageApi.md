# MessageApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**messageGetConversationIdPost**](MessageApi.md#messageGetConversationIdPost) | **POST** /message/get_conversation_id | 获取对话ID |
| [**messageGetHistoryMsgPost**](MessageApi.md#messageGetHistoryMsgPost) | **POST** /message/get_history_msg | 获取历史消息 |
| [**messageResetConversationPost**](MessageApi.md#messageResetConversationPost) | **POST** /message/reset_conversation | 重置对话 |
| [**messageSendMsgPost**](MessageApi.md#messageSendMsgPost) | **POST** /message/send_msg | 发送消息 |


<a name="messageGetConversationIdPost"></a>
# **messageGetConversationIdPost**
> _message_get_conversation_id_post_200_response messageGetConversationIdPost(data)

获取对话ID

    获取对话ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**message_api.GetConversationIDRequest**](../Models/message_api.GetConversationIDRequest.md)| 获取对话请求参数 | |

### Return type

[**_message_get_conversation_id_post_200_response**](../Models/_message_get_conversation_id_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="messageGetHistoryMsgPost"></a>
# **messageGetHistoryMsgPost**
> _message_get_history_msg_post_200_response messageGetHistoryMsgPost(data)

获取历史消息

    获取历史消息

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**message_api.GetHistoryMsgRequest**](../Models/message_api.GetHistoryMsgRequest.md)| 获取历史消息请求参数 | |

### Return type

[**_message_get_history_msg_post_200_response**](../Models/_message_get_history_msg_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="messageResetConversationPost"></a>
# **messageResetConversationPost**
> _message_reset_conversation_post_200_response messageResetConversationPost(data)

重置对话

    重置对话

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**message_api.ResetConversationRequest**](../Models/message_api.ResetConversationRequest.md)| 重置对话请求参数 | |

### Return type

[**_message_reset_conversation_post_200_response**](../Models/_message_reset_conversation_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="messageSendMsgPost"></a>
# **messageSendMsgPost**
> _message_send_msg_post_200_response messageSendMsgPost(data)

发送消息

    发送消息

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**message_api.SendMsgRequest**](../Models/message_api.SendMsgRequest.md)| 发送消息请求参数 | |

### Return type

[**_message_send_msg_post_200_response**](../Models/_message_send_msg_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

