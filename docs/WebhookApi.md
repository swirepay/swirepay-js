# SwirepayApi.WebhookApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWebhook**](WebhookApi.md#addWebhook) | **POST** /webhook | Add new webhook
[**deleteWebhook**](WebhookApi.md#deleteWebhook) | **DELETE** /webhook/{gid} | Delete webhook
[**getAllWebhook**](WebhookApi.md#getAllWebhook) | **GET** /webhook | Get All Webhook
[**getWebhookByGid**](WebhookApi.md#getWebhookByGid) | **GET** /webhook/{gid} | Get webhook by gid
[**updateWebhook**](WebhookApi.md#updateWebhook) | **PATCH** /webhook/{gid} | Update webhook



## addWebhook

> WebhookResponse addWebhook(opts)

Add new webhook

### Example

```javascript
import SwirepayApi from 'swirepay_api';

let apiInstance = new SwirepayApi.WebhookApi();
let opts = {
  'webhookRequest': new SwirepayApi.WebhookRequest() // WebhookRequest | 
};
apiInstance.addWebhook(opts, (error, data, response) => {
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
 **webhookRequest** | [**WebhookRequest**](WebhookRequest.md)|  | [optional] 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWebhook

> deleteWebhook(gid)

Delete webhook

### Example

```javascript
import SwirepayApi from 'swirepay_api';

let apiInstance = new SwirepayApi.WebhookApi();
let gid = "gid_example"; // String | 
apiInstance.deleteWebhook(gid, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllWebhook

> WebhookListResponse getAllWebhook(opts)

Get All Webhook

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.WebhookApi();
let opts = {
  'page': 56, // Number | 
  'size': 56 // Number | 
};
apiInstance.getAllWebhook(opts, (error, data, response) => {
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

[**WebhookListResponse**](WebhookListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhookByGid

> WebhookResponse getWebhookByGid(gid)

Get webhook by gid

### Example

```javascript
import SwirepayApi from 'swirepay_api';

let apiInstance = new SwirepayApi.WebhookApi();
let gid = "gid_example"; // String | 
apiInstance.getWebhookByGid(gid, (error, data, response) => {
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

[**WebhookResponse**](WebhookResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWebhook

> WebhookResponse updateWebhook(gid, opts)

Update webhook

### Example

```javascript
import SwirepayApi from 'swirepay_api';

let apiInstance = new SwirepayApi.WebhookApi();
let gid = "gid_example"; // String | 
let opts = {
  'webhookRequest': new SwirepayApi.WebhookRequest() // WebhookRequest | 
};
apiInstance.updateWebhook(gid, opts, (error, data, response) => {
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
 **webhookRequest** | [**WebhookRequest**](WebhookRequest.md)|  | [optional] 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

