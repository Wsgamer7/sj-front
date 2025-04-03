# UserApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**logoutGet**](UserApi.md#logoutGet) | **GET** /logout | 注销 |
| [**userGetUserInfoPost**](UserApi.md#userGetUserInfoPost) | **POST** /user/get_user_info | 获取用户信息 |
| [**userLoginPost**](UserApi.md#userLoginPost) | **POST** /user/login | 登录 |
| [**userRegisterPost**](UserApi.md#userRegisterPost) | **POST** /user/register | 注册 |
| [**userSetUserInfoPost**](UserApi.md#userSetUserInfoPost) | **POST** /user/set_user_info | 设置用户信息 |


<a name="logoutGet"></a>
# **logoutGet**
> _file_post_200_response logoutGet()

注销

    注销

### Parameters
This endpoint does not need any parameter.

### Return type

[**_file_post_200_response**](../Models/_file_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userGetUserInfoPost"></a>
# **userGetUserInfoPost**
> _user_get_user_info_post_200_response userGetUserInfoPost(data)

获取用户信息

    获取用户信息

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**user_api.GetUserInfoRequest**](../Models/user_api.GetUserInfoRequest.md)| 获取用户信息请求参数 | |

### Return type

[**_user_get_user_info_post_200_response**](../Models/_user_get_user_info_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="userLoginPost"></a>
# **userLoginPost**
> _file_post_200_response userLoginPost(data)

登录

    登录

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**user_api.LoginRequest**](../Models/user_api.LoginRequest.md)| 登录请求参数 | |

### Return type

[**_file_post_200_response**](../Models/_file_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="userRegisterPost"></a>
# **userRegisterPost**
> _file_post_200_response userRegisterPost(data)

注册

    注册

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**user_api.RegisterRequest**](../Models/user_api.RegisterRequest.md)| 注册请求参数 | |

### Return type

[**_file_post_200_response**](../Models/_file_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="userSetUserInfoPost"></a>
# **userSetUserInfoPost**
> _file_post_200_response userSetUserInfoPost(data)

设置用户信息

    设置用户信息

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**user_api.SetUserInfoRequest**](../Models/user_api.SetUserInfoRequest.md)| 设置用户信息请求参数 | |

### Return type

[**_file_post_200_response**](../Models/_file_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

