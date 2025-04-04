# CourseApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**courseCreateChapterPost**](CourseApi.md#courseCreateChapterPost) | **POST** /course/create_chapter | 创建章节 |
| [**courseCreateConversationPost**](CourseApi.md#courseCreateConversationPost) | **POST** /course/create_conversation | 创建会话 |
| [**courseCreateCoursePost**](CourseApi.md#courseCreateCoursePost) | **POST** /course/create_course | 创建课程 |
| [**courseDeleteChapterPost**](CourseApi.md#courseDeleteChapterPost) | **POST** /course/delete_chapter | 删除章节 |
| [**courseFinishCoursePost**](CourseApi.md#courseFinishCoursePost) | **POST** /course/finish_course | 完成课程 |
| [**courseGenChapterScorePost**](CourseApi.md#courseGenChapterScorePost) | **POST** /course/gen_chapter_score | 生成章节分数 |
| [**courseGenCourseFinishPost**](CourseApi.md#courseGenCourseFinishPost) | **POST** /course/gen_course_finish | 生成课程完成状态 |
| [**courseGetChapterByIdPost**](CourseApi.md#courseGetChapterByIdPost) | **POST** /course/get_chapter_by_id | 获取章节信息 |
| [**courseGetChaptersPost**](CourseApi.md#courseGetChaptersPost) | **POST** /course/get_chapters | 获取课程章节列表 |
| [**courseGetCoursePost**](CourseApi.md#courseGetCoursePost) | **POST** /course/get_course | 获取课程信息 |
| [**courseGetCourseStudentsPost**](CourseApi.md#courseGetCourseStudentsPost) | **POST** /course/get_course_students | 获取课程学生信息 |
| [**courseJoinCoursePost**](CourseApi.md#courseJoinCoursePost) | **POST** /course/join_course | 加入课程 |
| [**courseScanAllCoursePost**](CourseApi.md#courseScanAllCoursePost) | **POST** /course/scan_all_course | 扫描所有课程 |
| [**courseScanCoursePost**](CourseApi.md#courseScanCoursePost) | **POST** /course/scan_course | 扫描课程 |
| [**courseUpdateCoursePost**](CourseApi.md#courseUpdateCoursePost) | **POST** /course/update_course | 更新课程 |


<a name="courseCreateChapterPost"></a>
# **courseCreateChapterPost**
> _course_create_chapter_post_200_response courseCreateChapterPost(data)

创建章节

    创建章节

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**course_api.CreateChapterRequest**](../Models/course_api.CreateChapterRequest.md)| 创建章节请求参数 | |

### Return type

[**_course_create_chapter_post_200_response**](../Models/_course_create_chapter_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="courseCreateConversationPost"></a>
# **courseCreateConversationPost**
> _course_create_conversation_post_200_response courseCreateConversationPost(data)

创建会话

    创建会话

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**course_api.CreateConversationRequest**](../Models/course_api.CreateConversationRequest.md)| 创建会话请求参数 | |

### Return type

[**_course_create_conversation_post_200_response**](../Models/_course_create_conversation_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="courseCreateCoursePost"></a>
# **courseCreateCoursePost**
> _course_create_course_post_200_response courseCreateCoursePost(data)

创建课程

    创建课程

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**course_api.CreateCourseRequest**](../Models/course_api.CreateCourseRequest.md)| 创建课程请求参数 | |

### Return type

[**_course_create_course_post_200_response**](../Models/_course_create_course_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="courseDeleteChapterPost"></a>
# **courseDeleteChapterPost**
> _course_delete_chapter_post_200_response courseDeleteChapterPost(data)

删除章节

    删除章节

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**course_api.DeleteChapterRequest**](../Models/course_api.DeleteChapterRequest.md)| 删除章节请求参数 | |

### Return type

[**_course_delete_chapter_post_200_response**](../Models/_course_delete_chapter_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="courseFinishCoursePost"></a>
# **courseFinishCoursePost**
> _course_finish_course_post_200_response courseFinishCoursePost(data)

完成课程

    完成课程

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**course_api.FinishCourseRequest**](../Models/course_api.FinishCourseRequest.md)| 完成课程请求参数 | |

### Return type

[**_course_finish_course_post_200_response**](../Models/_course_finish_course_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="courseGenChapterScorePost"></a>
# **courseGenChapterScorePost**
> _course_gen_chapter_score_post_200_response courseGenChapterScorePost(data)

生成章节分数

    生成章节分数

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**course_api.GenChapterScoreRequest**](../Models/course_api.GenChapterScoreRequest.md)| 生成章节分数请求参数 | |

### Return type

[**_course_gen_chapter_score_post_200_response**](../Models/_course_gen_chapter_score_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="courseGenCourseFinishPost"></a>
# **courseGenCourseFinishPost**
> _course_gen_course_finish_post_200_response courseGenCourseFinishPost(data)

生成课程完成状态

    生成课程完成状态

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**course_api.GenCourseFinishRequest**](../Models/course_api.GenCourseFinishRequest.md)| 生成课程完成状态请求参数 | |

### Return type

[**_course_gen_course_finish_post_200_response**](../Models/_course_gen_course_finish_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="courseGetChapterByIdPost"></a>
# **courseGetChapterByIdPost**
> _course_get_chapter_by_id_post_200_response courseGetChapterByIdPost(data)

获取章节信息

    获取章节信息

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**course_api.GetChapterByIDRequest**](../Models/course_api.GetChapterByIDRequest.md)| 获取章节信息请求参数 | |

### Return type

[**_course_get_chapter_by_id_post_200_response**](../Models/_course_get_chapter_by_id_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="courseGetChaptersPost"></a>
# **courseGetChaptersPost**
> _course_get_chapters_post_200_response courseGetChaptersPost(data)

获取课程章节列表

    获取课程章节列表

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**course_api.GetChaptersRequest**](../Models/course_api.GetChaptersRequest.md)| 获取课程章节列表请求参数 | |

### Return type

[**_course_get_chapters_post_200_response**](../Models/_course_get_chapters_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="courseGetCoursePost"></a>
# **courseGetCoursePost**
> _course_get_course_post_200_response courseGetCoursePost(data)

获取课程信息

    获取课程信息

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**course_api.GetCourseRequest**](../Models/course_api.GetCourseRequest.md)| 获取课程信息请求参数 | |

### Return type

[**_course_get_course_post_200_response**](../Models/_course_get_course_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="courseGetCourseStudentsPost"></a>
# **courseGetCourseStudentsPost**
> _course_get_course_students_post_200_response courseGetCourseStudentsPost(data)

获取课程学生信息

    获取课程学生信息

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**course_api.GetCourseStudentsRequest**](../Models/course_api.GetCourseStudentsRequest.md)| 获取课程学生信息请求参数 | |

### Return type

[**_course_get_course_students_post_200_response**](../Models/_course_get_course_students_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="courseJoinCoursePost"></a>
# **courseJoinCoursePost**
> _course_join_course_post_200_response courseJoinCoursePost(data)

加入课程

    加入课程

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**course_api.JoinCourseRequest**](../Models/course_api.JoinCourseRequest.md)| 加入课程请求参数 | |

### Return type

[**_course_join_course_post_200_response**](../Models/_course_join_course_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="courseScanAllCoursePost"></a>
# **courseScanAllCoursePost**
> _course_scan_all_course_post_200_response courseScanAllCoursePost(data)

扫描所有课程

    扫描所有课程

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | **Object**| 扫描所有课程请求参数 | |

### Return type

[**_course_scan_all_course_post_200_response**](../Models/_course_scan_all_course_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="courseScanCoursePost"></a>
# **courseScanCoursePost**
> _course_scan_course_post_200_response courseScanCoursePost(data)

扫描课程

    扫描课程

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**course_api.ScanCourseRequest**](../Models/course_api.ScanCourseRequest.md)| 扫描课程请求参数 | |

### Return type

[**_course_scan_course_post_200_response**](../Models/_course_scan_course_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="courseUpdateCoursePost"></a>
# **courseUpdateCoursePost**
> _course_update_course_post_200_response courseUpdateCoursePost(data)

更新课程

    更新课程

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **data** | [**course_api.UpdateCourseRequest**](../Models/course_api.UpdateCourseRequest.md)| 更新课程请求参数 | |

### Return type

[**_course_update_course_post_200_response**](../Models/_course_update_course_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

