# ImageApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**imageDelete**](ImageApi.md#imageDelete) | **DELETE** /image | 删除图片 |
| [**imageGet**](ImageApi.md#imageGet) | **GET** /image | 获取图片列表 |
| [**imagePost**](ImageApi.md#imagePost) | **POST** /image | 创建图片 |


<a name="imageDelete"></a>
# **imageDelete**
> _file_post_200_response imageDelete(data)

删除图片

    删除图片

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**models.IDListRequest**](../Models/models.IDListRequest.md)| 删除图片请求参数 | |

### Return type

[**_file_post_200_response**](../Models/_file_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="imageGet"></a>
# **imageGet**
> _image_get_200_response imageGet(key, limit, order, page, userID)

获取图片列表

    获取图片列表

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **key** | **String**|  | [optional] [default to null] |
| **limit** | **Integer**|  | [optional] [default to null] |
| **order** | **String**|  | [optional] [default to null] |
| **page** | **Integer**|  | [optional] [default to null] |
| **userID** | **Integer**|  | [optional] [default to null] |

### Return type

[**_image_get_200_response**](../Models/_image_get_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="imagePost"></a>
# **imagePost**
> _file_post_200_response imagePost(file)

创建图片

    创建图片

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **file** | **File**| 文件 | [default to null] |

### Return type

[**_file_post_200_response**](../Models/_file_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

