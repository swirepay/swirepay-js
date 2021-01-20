# SwirepayPaymentApi.CustomerApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomer**](CustomerApi.md#addCustomer) | **POST** /customer | Add a customer
[**getCustomer**](CustomerApi.md#getCustomer) | **GET** /customer | Get customers

<a name="addCustomer"></a>
# **addCustomer**
> CustomerResponse addCustomer(bodyxApiKey)

Add a customer

Adds a customer to an account

### Example
```javascript
import SwirepayPaymentApi from 'swirepay_payment_api';
let defaultClient = SwirepayPaymentApi.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayPaymentApi.CustomerApi();
let body = new SwirepayPaymentApi.CustomerRequest(); // CustomerRequest | Customer object that needs to be added to the account
let xApiKey = "xApiKey_example"; // String | 

apiInstance.addCustomer(bodyxApiKey, (error, data, response) => {
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
 **body** | [**CustomerRequest**](CustomerRequest.md)| Customer object that needs to be added to the account | 
 **xApiKey** | **String**|  | 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomer"></a>
# **getCustomer**
> CustomerResponse getCustomer(xApiKey)

Get customers

Get customers

### Example
```javascript
import SwirepayPaymentApi from 'swirepay_payment_api';
let defaultClient = SwirepayPaymentApi.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayPaymentApi.CustomerApi();
let xApiKey = "xApiKey_example"; // String | 

apiInstance.getCustomer(xApiKey, (error, data, response) => {
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

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

