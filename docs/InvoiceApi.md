# SwirepayApi.InvoiceApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInvoice**](InvoiceApi.md#addInvoice) | **POST** /invoice | Add a new invoice
[**getAllInvoices**](InvoiceApi.md#getAllInvoices) | **GET** /invoice | Get All Invoices
[**getInvoiceByGid**](InvoiceApi.md#getInvoiceByGid) | **GET** /invoice/{gid} | Get invoice by Gid
[**payInvoice**](InvoiceApi.md#payInvoice) | **PATCH** /invoice/{gid}/pay | pay for invoice
[**updateInvoiceActive**](InvoiceApi.md#updateInvoiceActive) | **PATCH** /invoice/{gid}/active | Update invoice to active
[**updateInvoiceDraft**](InvoiceApi.md#updateInvoiceDraft) | **PATCH** /invoice/{gid}/draft | Update invoice to draft



## addInvoice

> InvoiceResponse addInvoice(invoiceRequest, opts)

Add a new invoice

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.InvoiceApi();
let invoiceRequest = new SwirepayApi.InvoiceRequest(); // InvoiceRequest | 
let opts = {
  'destinationAccount': "destinationAccount_example" // String | If processing on behalf of another Swirepay affiliate account
};
apiInstance.addInvoice(invoiceRequest, opts, (error, data, response) => {
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
 **invoiceRequest** | [**InvoiceRequest**](InvoiceRequest.md)|  | 
 **destinationAccount** | **String**| If processing on behalf of another Swirepay affiliate account | [optional] 

### Return type

[**InvoiceResponse**](InvoiceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllInvoices

> InvoiceListResponse getAllInvoices(opts)

Get All Invoices

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.InvoiceApi();
let opts = {
  'page': 56, // Number | 
  'size': 56 // Number | 
};
apiInstance.getAllInvoices(opts, (error, data, response) => {
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

[**InvoiceListResponse**](InvoiceListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInvoiceByGid

> InvoiceResponse getInvoiceByGid(gid)

Get invoice by Gid

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.InvoiceApi();
let gid = "gid_example"; // String | 
apiInstance.getInvoiceByGid(gid, (error, data, response) => {
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

[**InvoiceResponse**](InvoiceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## payInvoice

> InvoiceResponse payInvoice(gid, opts)

pay for invoice

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.InvoiceApi();
let gid = "gid_example"; // String | 
let opts = {
  'destinationAccount': "destinationAccount_example", // String | If processing on behalf of another Swirepay affiliate account
  'invoiceRequest': new SwirepayApi.InvoiceRequest() // InvoiceRequest | 
};
apiInstance.payInvoice(gid, opts, (error, data, response) => {
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
 **invoiceRequest** | [**InvoiceRequest**](InvoiceRequest.md)|  | [optional] 

### Return type

[**InvoiceResponse**](InvoiceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateInvoiceActive

> InvoiceResponse updateInvoiceActive(gid, opts)

Update invoice to active

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.InvoiceApi();
let gid = "gid_example"; // String | 
let opts = {
  'destinationAccount': "destinationAccount_example", // String | If processing on behalf of another Swirepay affiliate account
  'invoiceRequest': new SwirepayApi.InvoiceRequest() // InvoiceRequest | 
};
apiInstance.updateInvoiceActive(gid, opts, (error, data, response) => {
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
 **invoiceRequest** | [**InvoiceRequest**](InvoiceRequest.md)|  | [optional] 

### Return type

[**InvoiceResponse**](InvoiceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateInvoiceDraft

> InvoiceResponse updateInvoiceDraft(gid, opts)

Update invoice to draft

### Example

```javascript
import SwirepayApi from 'swirepay_api';
let defaultClient = SwirepayApi.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SwirepayApi.InvoiceApi();
let gid = "gid_example"; // String | 
let opts = {
  'destinationAccount': "destinationAccount_example", // String | If processing on behalf of another Swirepay affiliate account
  'invoiceRequest': new SwirepayApi.InvoiceRequest() // InvoiceRequest | 
};
apiInstance.updateInvoiceDraft(gid, opts, (error, data, response) => {
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
 **invoiceRequest** | [**InvoiceRequest**](InvoiceRequest.md)|  | [optional] 

### Return type

[**InvoiceResponse**](InvoiceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

