# SwirepayPaymentApi.PaymentMethodApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPaymentMethod**](PaymentMethodApi.md#addPaymentMethod) | **POST** /payment-method | Add a payment method
[**getPaymentMethod**](PaymentMethodApi.md#getPaymentMethod) | **GET** /payment-method | Get payment methods

<a name="addPaymentMethod"></a>
# **addPaymentMethod**
> PaymentMethodResponse addPaymentMethod(bodyxApiKey)

Add a payment method

Adds a payment method to an account

### Example
```javascript
import SwirepayPaymentApi from 'swirepay_payment_api';
let defaultClient = SwirepayPaymentApi.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayPaymentApi.PaymentMethodApi();
let body = new SwirepayPaymentApi.PaymentMethodRequest(); // PaymentMethodRequest | Payment method object that needs to be added to the account
let xApiKey = "xApiKey_example"; // String | 

apiInstance.addPaymentMethod(bodyxApiKey, (error, data, response) => {
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
 **body** | [**PaymentMethodRequest**](PaymentMethodRequest.md)| Payment method object that needs to be added to the account | 
 **xApiKey** | **String**|  | 

### Return type

[**PaymentMethodResponse**](PaymentMethodResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPaymentMethod"></a>
# **getPaymentMethod**
> PaymentMethodResponse getPaymentMethod(xApiKey)

Get payment methods

Get payment methods

### Example
```javascript
import SwirepayPaymentApi from 'swirepay_payment_api';
let defaultClient = SwirepayPaymentApi.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayPaymentApi.PaymentMethodApi();
let xApiKey = "xApiKey_example"; // String | 

apiInstance.getPaymentMethod(xApiKey, (error, data, response) => {
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

[**PaymentMethodResponse**](PaymentMethodResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

