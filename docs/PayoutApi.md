# SwirepayApi.PayoutApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayout**](PayoutApi.md#getPayout) | **GET** /payout | Get payout



## getPayout

> PayoutResponse getPayout(xApiKey)

Get payout

Get payout

### Example

```javascript
import SwirepayApi from 'swirepay_api';

let apiInstance = new SwirepayApi.PayoutApi();
let xApiKey = "xApiKey_example"; // String | 
apiInstance.getPayout(xApiKey, (error, data, response) => {
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

[**PayoutResponse**](PayoutResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

