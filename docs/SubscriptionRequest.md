# SwirepayApi.SubscriptionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyCode** | **String** |  | 
**customerGid** | **String** |  | 
**planGid** | **String** |  | 
**planTotalPayments** | **String** |  | 
**planStartDate** | **String** |  | 
**planEndDate** | **String** |  | [optional] 
**planAmount** | **Number** |  | 
**paymentMethodType** | [**[PaymentMethodType]**](PaymentMethodType.md) |  | [optional] 
**statementDescription** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**emailRecipientList** | **[String]** |  | [optional] 
**status** | **String** |  | [optional] 
**planBillingFrequency** | [**BillingFrequency**](BillingFrequency.md) |  | 
**planBillingPeriod** | **Number** |  | 
**redirectUrl** | **String** |  | [optional] 
**billingAddress** | [**AddressRequest**](AddressRequest.md) |  | [optional] 
**shippingAddress** | [**AddressRequest**](AddressRequest.md) |  | [optional] 
**invoiceLineItems** | [**[SubscriptionLineItemRequest]**](SubscriptionLineItemRequest.md) |  | [optional] 


