# SwirepayApi.PaymentLinkApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPaymentLink**](PaymentLinkApi.md#addPaymentLink) | **POST** /payment-link | Add a new Payment Link
[**cancelPaymentLinkByGid**](PaymentLinkApi.md#cancelPaymentLinkByGid) | **PATCH** /payment-link/{gid}/cancel | Get Payment Link by Gid
[**getAllPaymentLink**](PaymentLinkApi.md#getAllPaymentLink) | **GET** /payment-link | Get All payment Link
[**getPaymentLinkByGid**](PaymentLinkApi.md#getPaymentLinkByGid) | **GET** /payment-link/{gid} | Get Payment Link by Gid



## addPaymentLink

> PaymentLinkResponse addPaymentLink(paymentLinkRequest)

Add a new Payment Link

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PaymentLinkApi();
let paymentLinkRequest = new SwirepayApi.PaymentLinkRequest(); // PaymentLinkRequest | 
apiInstance.addPaymentLink(paymentLinkRequest, (error, data, response) => {
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
 **paymentLinkRequest** | [**PaymentLinkRequest**](PaymentLinkRequest.md)|  | 

### Return type

[**PaymentLinkResponse**](PaymentLinkResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cancelPaymentLinkByGid

> PaymentLinkResponse cancelPaymentLinkByGid(gid)

Get Payment Link by Gid

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PaymentLinkApi();
let gid = "gid_example"; // String | 
apiInstance.cancelPaymentLinkByGid(gid, (error, data, response) => {
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

[**PaymentLinkResponse**](PaymentLinkResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllPaymentLink

> PaymentLinkListResponse getAllPaymentLink(opts)

Get All payment Link

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PaymentLinkApi();
let opts = {
  'page': 56, // Number | 
  'size': 56 // Number | 
};
apiInstance.getAllPaymentLink(opts, (error, data, response) => {
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

[**PaymentLinkListResponse**](PaymentLinkListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPaymentLinkByGid

> PaymentLinkResponse getPaymentLinkByGid(gid)

Get Payment Link by Gid

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PaymentLinkApi();
let gid = "gid_example"; // String | 
apiInstance.getPaymentLinkByGid(gid, (error, data, response) => {
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

[**PaymentLinkResponse**](PaymentLinkResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

