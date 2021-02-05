# SwirepayApi.CustomerRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** |  | 
**name** | **String** |  | 
**phoneNumber** | **String** |  | 
**referenceNumber** | **String** |  | [optional] 
**taxStatus** | **String** |  | [optional] 
**taxId** | **String** |  | [optional] 
**taxValue** | **String** |  | [optional] 
**billingAddress** | [**AddressRequest**](AddressRequest.md) |  | [optional] 
**shippingAddress** | [**AddressRequest**](AddressRequest.md) |  | [optional] 



## Enum: TaxStatusEnum


* `TAXABLE` (value: `"TAXABLE"`)

* `EXEMPT` (value: `"EXEMPT"`)





## Enum: TaxIdEnum


* `NONE` (value: `"NONE"`)

* `EIN` (value: `"EIN"`)

* `GST` (value: `"GST"`)




