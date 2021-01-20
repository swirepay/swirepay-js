# SwirepayPaymentApi.PayoutApi

All URIs are relative to *https://api.swirepay.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayout**](PayoutApi.md#getPayout) | **GET** /payout | Get payout

<a name="getPayout"></a>
# **getPayout**
> PayoutResponse getPayout(xApiKey)

Get payout

Get payout

### Example
```javascript
import SwirepayPaymentApi from 'swirepay_payment_api';

let apiInstance = new SwirepayPaymentApi.PayoutApi();
let xApiKey = "xApiKey_example"; // String | 

apiInstance.getPayout(xApiKey, (error, data, response) => {
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

[**PayoutResponse**](PayoutResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

