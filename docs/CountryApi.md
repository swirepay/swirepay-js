# SwirepayPaymentApi.CountryApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCountry**](CountryApi.md#getCountry) | **GET** /country | Get country

<a name="getCountry"></a>
# **getCountry**
> CountryResponse getCountry(xApiKey)

Get country

Get country

### Example
```javascript
import SwirepayPaymentApi from 'swirepay_payment_api';

let apiInstance = new SwirepayPaymentApi.CountryApi();
let xApiKey = "xApiKey_example"; // String | 

apiInstance.getCountry(xApiKey, (error, data, response) => {
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

[**CountryResponse**](CountryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

