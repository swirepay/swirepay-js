# SwirepayApi.PayoutApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllPayouts**](PayoutApi.md#getAllPayouts) | **GET** /payout | Get All payouts
[**getPayoutByGid**](PayoutApi.md#getPayoutByGid) | **GET** /payout/{gid} | Get payout by Gid



## getAllPayouts

> PayoutListResponse getAllPayouts(opts)

Get All payouts

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PayoutApi();
let opts = {
  'page': 56, // Number | 
  'size': 56 // Number | 
};
apiInstance.getAllPayouts(opts, (error, data, response) => {
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

[**PayoutListResponse**](PayoutListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPayoutByGid

> PayoutResponse getPayoutByGid(gid)

Get payout by Gid

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PayoutApi();
let gid = "gid_example"; // String | 
apiInstance.getPayoutByGid(gid, (error, data, response) => {
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

[**PayoutResponse**](PayoutResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

