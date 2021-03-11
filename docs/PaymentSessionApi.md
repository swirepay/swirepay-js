# SwirepayApi.PaymentSessionApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPaymentSession**](PaymentSessionApi.md#addPaymentSession) | **POST** /payment-session | Add a new payment ssession
[**cancelPaymentSession**](PaymentSessionApi.md#cancelPaymentSession) | **PATCH** /payment-session/{gid}/cancel | Cancel Payment Session
[**capturePaymentSession**](PaymentSessionApi.md#capturePaymentSession) | **PATCH** /payment-session/{gid}/capture | Capture Payment Session
[**confirmPaymentSession**](PaymentSessionApi.md#confirmPaymentSession) | **PATCH** /payment-session/{gid}/confirm | Confirm Payment Session
[**getAllPaymentSession**](PaymentSessionApi.md#getAllPaymentSession) | **GET** /payment-session | Get all payment session
[**getPaymentSessionByGid**](PaymentSessionApi.md#getPaymentSessionByGid) | **GET** /payment-session/{gid} | Get Payment Session by Gid
[**notifyPaymentSessionByGid**](PaymentSessionApi.md#notifyPaymentSessionByGid) | **GET** /payment-session/{gid}/notify | Notify Payment Session by Gid
[**refundPaymentSession**](PaymentSessionApi.md#refundPaymentSession) | **PATCH** /payment-session/{gid}/refund | Refund Payment Session
[**updatePaymentSession**](PaymentSessionApi.md#updatePaymentSession) | **PATCH** /payment-session/{gid}/update | Update Payment Session



## addPaymentSession

> PaymentSessionResponse addPaymentSession(paymentSessionRequest, opts)

Add a new payment ssession

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PaymentSessionApi();
let paymentSessionRequest = new SwirepayApi.PaymentSessionRequest(); // PaymentSessionRequest | 
let opts = {
  'destinationAccount': "destinationAccount_example" // String | If processing on behalf of another Swirepay affiliate account
};
apiInstance.addPaymentSession(paymentSessionRequest, opts, (error, data, response) => {
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
 **paymentSessionRequest** | [**PaymentSessionRequest**](PaymentSessionRequest.md)|  | 
 **destinationAccount** | **String**| If processing on behalf of another Swirepay affiliate account | [optional] 

### Return type

[**PaymentSessionResponse**](PaymentSessionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cancelPaymentSession

> PaymentSessionResponse cancelPaymentSession(gid, opts)

Cancel Payment Session

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PaymentSessionApi();
let gid = "gid_example"; // String | 
let opts = {
  'destinationAccount': "destinationAccount_example" // String | If processing on behalf of another Swirepay affiliate account
};
apiInstance.cancelPaymentSession(gid, opts, (error, data, response) => {
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
 **destinationAccount** | **String**| If processing on behalf of another Swirepay affiliate account | [optional] 

### Return type

[**PaymentSessionResponse**](PaymentSessionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## capturePaymentSession

> PaymentSessionResponse capturePaymentSession(gid, opts)

Capture Payment Session

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PaymentSessionApi();
let gid = "gid_example"; // String | 
let opts = {
  'destinationAccount': "destinationAccount_example" // String | If processing on behalf of another Swirepay affiliate account
};
apiInstance.capturePaymentSession(gid, opts, (error, data, response) => {
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
 **destinationAccount** | **String**| If processing on behalf of another Swirepay affiliate account | [optional] 

### Return type

[**PaymentSessionResponse**](PaymentSessionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## confirmPaymentSession

> PaymentSessionResponse confirmPaymentSession(gid, opts)

Confirm Payment Session

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PaymentSessionApi();
let gid = "gid_example"; // String | 
let opts = {
  'destinationAccount': "destinationAccount_example", // String | If processing on behalf of another Swirepay affiliate account
  'paymentSessionRequest': new SwirepayApi.PaymentSessionRequest() // PaymentSessionRequest | 
};
apiInstance.confirmPaymentSession(gid, opts, (error, data, response) => {
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
 **destinationAccount** | **String**| If processing on behalf of another Swirepay affiliate account | [optional] 
 **paymentSessionRequest** | [**PaymentSessionRequest**](PaymentSessionRequest.md)|  | [optional] 

### Return type

[**PaymentSessionResponse**](PaymentSessionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllPaymentSession

> PaymentSessionListResponse getAllPaymentSession(opts)

Get all payment session

Get all payment session

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PaymentSessionApi();
let opts = {
  'page': 56, // Number | 
  'size': 56, // Number | 
  'destinationAccount': "destinationAccount_example" // String | If processing on behalf of another Swirepay affiliate account
};
apiInstance.getAllPaymentSession(opts, (error, data, response) => {
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
 **destinationAccount** | **String**| If processing on behalf of another Swirepay affiliate account | [optional] 

### Return type

[**PaymentSessionListResponse**](PaymentSessionListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPaymentSessionByGid

> PaymentSessionResponse getPaymentSessionByGid(gid, opts)

Get Payment Session by Gid

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PaymentSessionApi();
let gid = "gid_example"; // String | 
let opts = {
  'destinationAccount': "destinationAccount_example" // String | If processing on behalf of another Swirepay affiliate account
};
apiInstance.getPaymentSessionByGid(gid, opts, (error, data, response) => {
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
 **destinationAccount** | **String**| If processing on behalf of another Swirepay affiliate account | [optional] 

### Return type

[**PaymentSessionResponse**](PaymentSessionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## notifyPaymentSessionByGid

> PaymentSessionResponse notifyPaymentSessionByGid(gid)

Notify Payment Session by Gid

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PaymentSessionApi();
let gid = "gid_example"; // String | 
apiInstance.notifyPaymentSessionByGid(gid, (error, data, response) => {
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

[**PaymentSessionResponse**](PaymentSessionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## refundPaymentSession

> PaymentSessionResponse refundPaymentSession(gid, opts)

Refund Payment Session

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PaymentSessionApi();
let gid = "gid_example"; // String | 
let opts = {
  'destinationAccount': "destinationAccount_example", // String | If processing on behalf of another Swirepay affiliate account
  'paymentSessionRequest': new SwirepayApi.PaymentSessionRequest() // PaymentSessionRequest | 
};
apiInstance.refundPaymentSession(gid, opts, (error, data, response) => {
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
 **destinationAccount** | **String**| If processing on behalf of another Swirepay affiliate account | [optional] 
 **paymentSessionRequest** | [**PaymentSessionRequest**](PaymentSessionRequest.md)|  | [optional] 

### Return type

[**PaymentSessionResponse**](PaymentSessionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePaymentSession

> PaymentSessionResponse updatePaymentSession(gid, opts)

Update Payment Session

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PaymentSessionApi();
let gid = "gid_example"; // String | 
let opts = {
  'destinationAccount': "destinationAccount_example", // String | If processing on behalf of another Swirepay affiliate account
  'paymentSessionRequest': new SwirepayApi.PaymentSessionRequest() // PaymentSessionRequest | 
};
apiInstance.updatePaymentSession(gid, opts, (error, data, response) => {
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
 **destinationAccount** | **String**| If processing on behalf of another Swirepay affiliate account | [optional] 
 **paymentSessionRequest** | [**PaymentSessionRequest**](PaymentSessionRequest.md)|  | [optional] 

### Return type

[**PaymentSessionResponse**](PaymentSessionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

