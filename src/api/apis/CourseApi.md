# CourseApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**courseCreateChapterPost**](CourseApi.md#courseCreateChapterPost) | **POST** /course/create_chapter | 创建章节 |
| [**courseCreateCoursePost**](CourseApi.md#courseCreateCoursePost) | **POST** /course/create_course | 创建课程 |
| [**courseGetChaptersPost**](CourseApi.md#courseGetChaptersPost) | **POST** /course/get_chapters | 获取课程章节列表 |
| [**courseGetCoursePost**](CourseApi.md#courseGetCoursePost) | **POST** /course/get_course | 获取课程信息 |
| [**courseGetCourseStudentsPost**](CourseApi.md#courseGetCourseStudentsPost) | **POST** /course/get_course_students | 获取课程学生信息 |
| [**courseJoinCoursePost**](CourseApi.md#courseJoinCoursePost) | **POST** /course/join_course | 加入课程 |
| [**courseScanAllCoursePost**](CourseApi.md#courseScanAllCoursePost) | **POST** /course/scan_all_course | 扫描所有课程 |
| [**courseScanCoursePost**](CourseApi.md#courseScanCoursePost) | **POST** /course/scan_course | 扫描课程 |


<a name="courseCreateChapterPost"></a>
# **courseCreateChapterPost**
> _course_create_chapter_post_200_response courseCreateChapterPost(courseID, chapterName, description, difficulty, index)

创建章节

    创建章节

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **courseID** | **Integer**| 课程ID | [default to null] |
| **chapterName** | **String**| 章节名称 | [default to null] |
| **description** | **String**| 章节描述 | [default to null] |
| **difficulty** | **Integer**| 章节难度 | [default to null] |
| **index** | **Integer**| 章节索引 | [default to null] |

### Return type

[**_course_create_chapter_post_200_response**](../Models/_course_create_chapter_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="courseCreateCoursePost"></a>
# **courseCreateCoursePost**
> _course_create_course_post_200_response courseCreateCoursePost(userID, courseName, description)

创建课程

    创建课程

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userID** | **Integer**| 用户ID | [default to null] |
| **courseName** | **String**| 课程名称 | [default to null] |
| **description** | **String**| 课程描述 | [default to null] |

### Return type

[**_course_create_course_post_200_response**](../Models/_course_create_course_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="courseGetChaptersPost"></a>
# **courseGetChaptersPost**
> _course_get_chapters_post_200_response courseGetChaptersPost(courseID)

获取课程章节列表

    获取课程章节列表

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **courseID** | **Integer**| 课程ID | [default to null] |

### Return type

[**_course_get_chapters_post_200_response**](../Models/_course_get_chapters_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="courseGetCoursePost"></a>
# **courseGetCoursePost**
> _course_get_course_post_200_response courseGetCoursePost(courseID)

获取课程信息

    获取课程信息

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **courseID** | **Integer**| 课程ID | [default to null] |

### Return type

[**_course_get_course_post_200_response**](../Models/_course_get_course_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="courseGetCourseStudentsPost"></a>
# **courseGetCourseStudentsPost**
> _course_get_course_students_post_200_response courseGetCourseStudentsPost(courseID)

获取课程学生信息

    获取课程学生信息

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **courseID** | **Integer**| 课程ID | [default to null] |

### Return type

[**_course_get_course_students_post_200_response**](../Models/_course_get_course_students_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="courseJoinCoursePost"></a>
# **courseJoinCoursePost**
> _course_join_course_post_200_response courseJoinCoursePost(userID, courseID)

加入课程

    加入课程

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userID** | **Integer**| 用户ID | [default to null] |
| **courseID** | **Integer**| 课程ID | [default to null] |

### Return type

[**_course_join_course_post_200_response**](../Models/_course_join_course_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="courseScanAllCoursePost"></a>
# **courseScanAllCoursePost**
> _course_scan_all_course_post_200_response courseScanAllCoursePost()

扫描所有课程

    扫描所有课程

### Parameters
This endpoint does not need any parameter.

### Return type

[**_course_scan_all_course_post_200_response**](../Models/_course_scan_all_course_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="courseScanCoursePost"></a>
# **courseScanCoursePost**
> _course_scan_course_post_200_response courseScanCoursePost(userID)

扫描课程

    扫描课程

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userID** | **Integer**| 用户ID | [default to null] |

### Return type

[**_course_scan_course_post_200_response**](../Models/_course_scan_course_post_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

