# SwirepayApi.PublicKeyApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllPublicKey**](PublicKeyApi.md#getAllPublicKey) | **GET** /public-key | Get All Public Key
[**rollPublicKeyByGid**](PublicKeyApi.md#rollPublicKeyByGid) | **PATCH** /public-key/{gid}/roll | Roll Public Key by Gid



## getAllPublicKey

> PublicKeyListResponse getAllPublicKey(opts)

Get All Public Key

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.PublicKeyApi();
let opts = {
  'page': 56, // Number | 
  'size': 56 // Number | 
};
apiInstance.getAllPublicKey(opts, (error, data, response) => {
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

[**PublicKeyListResponse**](PublicKeyListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rollPublicKeyByGid

> PublicKeyResponse rollPublicKeyByGid(gid, opts)

Roll Public Key by Gid

### Example

```javascript
import SwirepayApi from 'swirepay_api';

let apiInstance = new SwirepayApi.PublicKeyApi();
let gid = "gid_example"; // String | 
let opts = {
  'publicKeyRequest': new SwirepayApi.PublicKeyRequest() // PublicKeyRequest | 
};
apiInstance.rollPublicKeyByGid(gid, opts, (error, data, response) => {
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
 **publicKeyRequest** | [**PublicKeyRequest**](PublicKeyRequest.md)|  | [optional] 

### Return type

[**PublicKeyResponse**](PublicKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

