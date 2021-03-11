# SwirepayApi.PaymentMethodApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPaymentMethod**](PaymentMethodApi.md#addPaymentMethod) | **POST** /payment-method | Add Payment Method
[**deletePaymentMethod**](PaymentMethodApi.md#deletePaymentMethod) | **DELETE** /payment-method/{gid} | Delete Payment Method
[**getPaymentMethodByGid**](PaymentMethodApi.md#getPaymentMethodByGid) | **GET** /payment-method/{gid} | Get Payment Method by Gid



## addPaymentMethod

> PaymentMethodResponse addPaymentMethod(opts)

Add Payment Method

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PaymentMethodApi();
let opts = {
  'destinationAccount': "destinationAccount_example", // String | If processing on behalf of another Swirepay affiliate account
  'paymentMethodRequest': new SwirepayApi.PaymentMethodRequest() // PaymentMethodRequest | 
};
apiInstance.addPaymentMethod(opts, (error, data, response) => {
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
 **destinationAccount** | **String**| If processing on behalf of another Swirepay affiliate account | [optional] 
 **paymentMethodRequest** | [**PaymentMethodRequest**](PaymentMethodRequest.md)|  | [optional] 

### Return type

[**PaymentMethodResponse**](PaymentMethodResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePaymentMethod

> deletePaymentMethod(gid, opts)

Delete Payment Method

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PaymentMethodApi();
let gid = "gid_example"; // String | 
let opts = {
  'destinationAccount': "destinationAccount_example" // String | If processing on behalf of another Swirepay affiliate account
};
apiInstance.deletePaymentMethod(gid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gid** | **String**|  | 
 **destinationAccount** | **String**| If processing on behalf of another Swirepay affiliate account | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getPaymentMethodByGid

> PaymentMethodResponse getPaymentMethodByGid(gid, opts)

Get Payment Method by Gid

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PaymentMethodApi();
let gid = "gid_example"; // String | 
let opts = {
  'destinationAccount': "destinationAccount_example" // String | If processing on behalf of another Swirepay affiliate account
};
apiInstance.getPaymentMethodByGid(gid, opts, (error, data, response) => {
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

[**PaymentMethodResponse**](PaymentMethodResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

