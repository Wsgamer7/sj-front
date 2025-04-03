# MessageApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**messageGetHistoryMsgPost**](MessageApi.md#messageGetHistoryMsgPost) | **POST** /message/get_history_msg | 获取历史消息 |
| [**messageSendMsgPost**](MessageApi.md#messageSendMsgPost) | **POST** /message/send_msg | 发送消息 |


<a name="messageGetHistoryMsgPost"></a>
# **messageGetHistoryMsgPost**
> _message_get_history_msg_post_200_response messageGetHistoryMsgPost(userID, courseID, chapterID)

获取历史消息

    获取历史消息

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userID** | **Integer**| 用户ID | [default to null] |
| **courseID** | **Integer**| 课程ID | [default to null] |
| **chapterID** | **Integer**| 章节ID | [default to null] |

### Return type

[**_message_get_history_msg_post_200_response**](../Models/_message_get_history_msg_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="messageSendMsgPost"></a>
# **messageSendMsgPost**
> _message_send_msg_post_200_response messageSendMsgPost(userID, courseID, chapterID, content)

发送消息

    发送消息

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userID** | **Integer**| 用户ID | [default to null] |
| **courseID** | **Integer**| 课程ID | [default to null] |
| **chapterID** | **Integer**| 章节ID | [default to null] |
| **content** | **String**| 消息内容 | [default to null] |

### Return type

[**_message_send_msg_post_200_response**](../Models/_message_send_msg_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

