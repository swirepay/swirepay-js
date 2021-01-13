# SwirepayPaymentApi.EventApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEvent**](EventApi.md#getEvent) | **GET** /event | Get event



## getEvent

> EventResponse getEvent(xApiKey)

Get event

Get event

### Example

```javascript
import SwirepayPaymentApi from 'swirepay_payment_api';
let defaultClient = SwirepayPaymentApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayPaymentApi.EventApi();
let xApiKey = "xApiKey_example"; // String | 
apiInstance.getEvent(xApiKey, (error, data, response) => {
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

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

