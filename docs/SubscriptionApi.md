# SwirepayApi.SubscriptionApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSubscription**](SubscriptionApi.md#addSubscription) | **POST** /subscription | Add a new subscription
[**cancelSubscription**](SubscriptionApi.md#cancelSubscription) | **PATCH** /subscription/{gid}/cancel | Cancel Subscription
[**getAllSubscription**](SubscriptionApi.md#getAllSubscription) | **GET** /subscription | Get All Subscription
[**getSubscriptionByGid**](SubscriptionApi.md#getSubscriptionByGid) | **GET** /subscription/{gid} | Get Subscription by Gid



## addSubscription

> SubscriptionResponse addSubscription(subscriptionRequest)

Add a new subscription

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.SubscriptionApi();
let subscriptionRequest = new SwirepayApi.SubscriptionRequest(); // SubscriptionRequest | 
apiInstance.addSubscription(subscriptionRequest, (error, data, response) => {
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
 **subscriptionRequest** | [**SubscriptionRequest**](SubscriptionRequest.md)|  | 

### Return type

[**SubscriptionResponse**](SubscriptionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cancelSubscription

> SubscriptionResponse cancelSubscription(gid, opts)

Cancel Subscription

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.SubscriptionApi();
let gid = "gid_example"; // String | 
let opts = {
  'destinationAccount': "destinationAccount_example", // String | If processing on behalf of another Swirepay affiliate account
  'subscriptionRequest': new SwirepayApi.SubscriptionRequest() // SubscriptionRequest | 
};
apiInstance.cancelSubscription(gid, opts, (error, data, response) => {
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
 **subscriptionRequest** | [**SubscriptionRequest**](SubscriptionRequest.md)|  | [optional] 

### Return type

[**SubscriptionResponse**](SubscriptionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllSubscription

> SubscriptionListResponse getAllSubscription(opts)

Get All Subscription

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.SubscriptionApi();
let opts = {
  'page': 56, // Number | 
  'size': 56, // Number | 
  'destinationAccount': "destinationAccount_example" // String | If processing on behalf of another Swirepay affiliate account
};
apiInstance.getAllSubscription(opts, (error, data, response) => {
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

[**SubscriptionListResponse**](SubscriptionListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubscriptionByGid

> SubscriptionListResponse getSubscriptionByGid(gid, opts)

Get Subscription by Gid

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.SubscriptionApi();
let gid = "gid_example"; // String | 
let opts = {
  'destinationAccount': "destinationAccount_example" // String | If processing on behalf of another Swirepay affiliate account
};
apiInstance.getSubscriptionByGid(gid, opts, (error, data, response) => {
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

[**SubscriptionListResponse**](SubscriptionListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

