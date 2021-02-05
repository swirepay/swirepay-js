# SwirepayApi.Subscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** |  | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 
**deleted** | **Boolean** |  | [optional] 
**planQuantity** | **Number** |  | [optional] 
**planTotalPayments** | **Number** |  | [optional] 
**planStartDate** | **String** |  | [optional] 
**planEndDate** | **String** |  | [optional] 
**planAmount** | **Number** |  | [optional] 
**paymentMethodType** | [**[PaymentMethodType]**](PaymentMethodType.md) |  | [optional] 
**statementDescription** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**emailRecipientList** | **[String]** |  | [optional] 
**status** | **String** |  | [optional] 
**upfrontAmount** | **Number** |  | [optional] 
**lastProcessed** | **String** |  | [optional] 
**nextPaymentDate** | **String** |  | [optional] 
**totalSuccessfulPayments** | **String** |  | [optional] 
**billingAmount** | **Number** |  | [optional] 
**planBillingFrequency** | **String** |  | [optional] 
**planBillingPeriod** | **Number** |  | [optional] 
**redirectUrl** | **String** |  | [optional] 
**plan** | [**Plan**](Plan.md) |  | [optional] 
**customer** | [**Customer**](Customer.md) |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**paymentMethod** | [**PaymentMethod**](PaymentMethod.md) |  | [optional] 
**subscriptionLineItems** | [**[SubscriptionLineItem]**](SubscriptionLineItem.md) |  | [optional] 
**subscriptionLinks** | [**[SubscriptionLink]**](SubscriptionLink.md) |  | [optional] 
**subscriptionButton** | [**SubscriptionButton**](SubscriptionButton.md) |  | [optional] 



## Enum: PlanBillingFrequencyEnum


* `DAY` (value: `"DAY"`)

* `MONTH` (value: `"MONTH"`)

* `WEEK` (value: `"WEEK"`)

* `YEAR` (value: `"YEAR"`)




