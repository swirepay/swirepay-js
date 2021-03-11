# SwirepayApi.CustomerApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomer**](CustomerApi.md#addCustomer) | **POST** /customer | Add a new customer
[**deleteCustomerByGid**](CustomerApi.md#deleteCustomerByGid) | **DELETE** /customer/{gid} | Delete customer by Gid
[**getAllCustomers**](CustomerApi.md#getAllCustomers) | **GET** /customer | Get all customers
[**getCustomerByGid**](CustomerApi.md#getCustomerByGid) | **GET** /customer/{gid} | Get Customer by Gid
[**updateCustomer**](CustomerApi.md#updateCustomer) | **PATCH** /customer/{gid} | Update Customer by Gid



## addCustomer

> CustomerResponse addCustomer(customerRequest, opts)

Add a new customer

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.CustomerApi();
let customerRequest = new SwirepayApi.CustomerRequest(); // CustomerRequest | 
let opts = {
  'destinationAccount': "destinationAccount_example" // String | If processing on behalf of another Swirepay affiliate account
};
apiInstance.addCustomer(customerRequest, opts, (error, data, response) => {
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
 **customerRequest** | [**CustomerRequest**](CustomerRequest.md)|  | 
 **destinationAccount** | **String**| If processing on behalf of another Swirepay affiliate account | [optional] 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCustomerByGid

> deleteCustomerByGid(gid, opts)

Delete customer by Gid

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.CustomerApi();
let gid = "gid_example"; // String | 
let opts = {
  'destinationAccount': "destinationAccount_example" // String | If processing on behalf of another Swirepay affiliate account
};
apiInstance.deleteCustomerByGid(gid, opts, (error, data, response) => {
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


## getAllCustomers

> CustomerListResponse getAllCustomers(opts)

Get all customers

Get customers

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.CustomerApi();
let opts = {
  'page': 56, // Number | 
  'size': 56, // Number | 
  'destinationAccount': "destinationAccount_example" // String | If processing on behalf of another Swirepay affiliate account
};
apiInstance.getAllCustomers(opts, (error, data, response) => {
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

[**CustomerListResponse**](CustomerListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerByGid

> CustomerResponse getCustomerByGid(gid, opts)

Get Customer by Gid

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.CustomerApi();
let gid = "gid_example"; // String | 
let opts = {
  'destinationAccount': "destinationAccount_example" // String | If processing on behalf of another Swirepay affiliate account
};
apiInstance.getCustomerByGid(gid, opts, (error, data, response) => {
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

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCustomer

> CustomerResponse updateCustomer(gid, opts)

Update Customer by Gid

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.CustomerApi();
let gid = "gid_example"; // String | 
let opts = {
  'destinationAccount': "destinationAccount_example", // String | If processing on behalf of another Swirepay affiliate account
  'customerRequest': new SwirepayApi.CustomerRequest() // CustomerRequest | 
};
apiInstance.updateCustomer(gid, opts, (error, data, response) => {
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
 **customerRequest** | [**CustomerRequest**](CustomerRequest.md)|  | [optional] 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

