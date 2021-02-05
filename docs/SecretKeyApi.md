# SwirepayApi.SecretKeyApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllSecretKey**](SecretKeyApi.md#getAllSecretKey) | **GET** /secret-key | Get All Secret Key
[**rollSecretKeyByGid**](SecretKeyApi.md#rollSecretKeyByGid) | **PATCH** /secret-key/{gid}/roll | Roll Secret Key by Gid



## getAllSecretKey

> SecretKeyListResponse getAllSecretKey(opts)

Get All Secret Key

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.SecretKeyApi();
let opts = {
  'page': 56, // Number | 
  'size': 56 // Number | 
};
apiInstance.getAllSecretKey(opts, (error, data, response) => {
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

[**SecretKeyListResponse**](SecretKeyListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rollSecretKeyByGid

> SecretKeyResponse rollSecretKeyByGid(gid, opts)

Roll Secret Key by Gid

### Example

```javascript
import SwirepayApi from 'swirepay_api';

let apiInstance = new SwirepayApi.SecretKeyApi();
let gid = "gid_example"; // String | 
let opts = {
  'secretKeyRequest': new SwirepayApi.SecretKeyRequest() // SecretKeyRequest | 
};
apiInstance.rollSecretKeyByGid(gid, opts, (error, data, response) => {
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
 **secretKeyRequest** | [**SecretKeyRequest**](SecretKeyRequest.md)|  | [optional] 

### Return type

[**SecretKeyResponse**](SecretKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

