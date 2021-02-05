# SwirepayApi.DisputeApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllDisputes**](DisputeApi.md#getAllDisputes) | **GET** /dispute | Get All Disputes
[**getDisputeByGid**](DisputeApi.md#getDisputeByGid) | **GET** /dispute/{gid} | Get dispute by Gid



## getAllDisputes

> DisputeListResponse getAllDisputes(opts)

Get All Disputes

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.DisputeApi();
let opts = {
  'page': 56, // Number | 
  'size': 56 // Number | 
};
apiInstance.getAllDisputes(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] 
 **size** | **Number**|  | [optional] 

### Return type

[**DisputeListResponse**](DisputeListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDisputeByGid

> DisputeResponse getDisputeByGid(gid)

Get dispute by Gid

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.DisputeApi();
let gid = "gid_example"; // String | 
apiInstance.getDisputeByGid(gid, (error, data, response) => {
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
 **gid** | **String**|  | 

### Return type

[**DisputeResponse**](DisputeResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

