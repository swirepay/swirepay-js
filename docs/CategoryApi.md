# SwirepayPaymentApi.CategoryApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategory**](CategoryApi.md#getCategory) | **GET** /category | Get category

<a name="getCategory"></a>
# **getCategory**
> CategoryResponse getCategory(xApiKey)

Get category

Get category

### Example
```javascript
import SwirepayPaymentApi from 'swirepay_payment_api';

let apiInstance = new SwirepayPaymentApi.CategoryApi();
let xApiKey = "xApiKey_example"; // String | 

apiInstance.getCategory(xApiKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**|  | 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

