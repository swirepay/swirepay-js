# SwirepayApi.TransactionApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllTransaction**](TransactionApi.md#getAllTransaction) | **GET** /transaction | Get All transactions



## getAllTransaction

> TransactionListResponse getAllTransaction(opts)

Get All transactions

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.TransactionApi();
let opts = {
  'page': 56, // Number | 
  'size': 56 // Number | 
};
apiInstance.getAllTransaction(opts, (error, data, response) => {
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

[**TransactionListResponse**](TransactionListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

