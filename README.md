# swirepay-payment-api

SwirepayPaymentApi - JavaScript client for swirepay_payment_api
Swirepay REST APIs' are resource-oriented URLs that accept JSON-encoded request bodies, return JSON-encoded responses, and use standard HTTP response codes, authentication, and verbs. You can use the Swirepay API in test mode, which does not affect your live data or interact with the banking networks. The `API key` you use to authenticate the request determines whether the request is live mode or test mode.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install swirepay_payment_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SwirepayPaymentApi = require('swirepay_payment_api');
var defaultClient = SwirepayPaymentApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['x-api-key'] = "Token"

var api = new SwirepayPaymentApi.BalanceApi()
var xApiKey = "xApiKey_example"; // {String} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getBalance(xApiKey, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://api.swirepay.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SwirepayPaymentApi.BalanceApi* | [**getBalance**](docs/BalanceApi.md#getBalance) | **GET** /balance | Get balance
*SwirepayPaymentApi.CategoryApi* | [**getCategory**](docs/CategoryApi.md#getCategory) | **GET** /category | Get category
*SwirepayPaymentApi.CountryApi* | [**getCountry**](docs/CountryApi.md#getCountry) | **GET** /country | Get country
*SwirepayPaymentApi.CurrencyApi* | [**getCurrency**](docs/CurrencyApi.md#getCurrency) | **GET** /currency | Get currency
*SwirepayPaymentApi.CustomerApi* | [**addCustomer**](docs/CustomerApi.md#addCustomer) | **POST** /customer | Add a customer
*SwirepayPaymentApi.CustomerApi* | [**getCustomer**](docs/CustomerApi.md#getCustomer) | **GET** /customer | Get customers
*SwirepayPaymentApi.DisputeApi* | [**getDispute**](docs/DisputeApi.md#getDispute) | **GET** /dispute | Get dispute
*SwirepayPaymentApi.EventApi* | [**getEvent**](docs/EventApi.md#getEvent) | **GET** /event | Get event
*SwirepayPaymentApi.InvoiceApi* | [**getInvoice**](docs/InvoiceApi.md#getInvoice) | **GET** /invoice | Get invoice
*SwirepayPaymentApi.MembershipApi* | [**getMembership**](docs/MembershipApi.md#getMembership) | **GET** /membership | Get membership
*SwirepayPaymentApi.PaymentApi* | [**getPayment**](docs/PaymentApi.md#getPayment) | **GET** /payment | Get payment
*SwirepayPaymentApi.PaymentButtonApi* | [**getPaymentButton**](docs/PaymentButtonApi.md#getPaymentButton) | **GET** /payment-button | Get payment button
*SwirepayPaymentApi.PaymentLinkApi* | [**getPaymentLink**](docs/PaymentLinkApi.md#getPaymentLink) | **GET** /payment-link | Get payment link
*SwirepayPaymentApi.PaymentMethodApi* | [**addPaymentMethod**](docs/PaymentMethodApi.md#addPaymentMethod) | **POST** /payment-method | Add a payment method
*SwirepayPaymentApi.PaymentMethodApi* | [**getPaymentMethod**](docs/PaymentMethodApi.md#getPaymentMethod) | **GET** /payment-method | Get payment methods
*SwirepayPaymentApi.PaymentSessionApi* | [**getPaymentSession**](docs/PaymentSessionApi.md#getPaymentSession) | **GET** /payment-session | Get payment sessions
*SwirepayPaymentApi.PayoutApi* | [**getPayout**](docs/PayoutApi.md#getPayout) | **GET** /payout | Get payout
*SwirepayPaymentApi.PlanApi* | [**getPlan**](docs/PlanApi.md#getPlan) | **GET** /plan | Get plan
*SwirepayPaymentApi.ProductApi* | [**getProduct**](docs/ProductApi.md#getProduct) | **GET** /product | Get product
*SwirepayPaymentApi.PublicKeyApi* | [**getPublicKey**](docs/PublicKeyApi.md#getPublicKey) | **GET** /public-key | Get public key
*SwirepayPaymentApi.RefundApi* | [**getRefund**](docs/RefundApi.md#getRefund) | **GET** /refund | Get refund
*SwirepayPaymentApi.ReminderApi* | [**getReminder**](docs/ReminderApi.md#getReminder) | **GET** /reminder | Get reminder
*SwirepayPaymentApi.ReportApi* | [**getReport**](docs/ReportApi.md#getReport) | **GET** /report | Get report
*SwirepayPaymentApi.SetupSessionApi* | [**getSetupSession**](docs/SetupSessionApi.md#getSetupSession) | **GET** /setup-session | Get setup session
*SwirepayPaymentApi.SetupSubscriptionApi* | [**getSubscription**](docs/SetupSubscriptionApi.md#getSubscription) | **GET** /subscription | Get subscription
*SwirepayPaymentApi.TerminalApi* | [**getTerminal**](docs/TerminalApi.md#getTerminal) | **GET** /terminal | Get terminal
*SwirepayPaymentApi.TransactionApi* | [**getTransaction**](docs/TransactionApi.md#getTransaction) | **GET** /transaction | Get transaction

## Documentation for Models

 - [SwirepayPaymentApi.Balance](docs/Balance.md)
 - [SwirepayPaymentApi.BalanceResponse](docs/BalanceResponse.md)
 - [SwirepayPaymentApi.BalanceResponseEntity](docs/BalanceResponseEntity.md)
 - [SwirepayPaymentApi.CardRequest](docs/CardRequest.md)
 - [SwirepayPaymentApi.CategoryResponse](docs/CategoryResponse.md)
 - [SwirepayPaymentApi.CategoryResponseEntity](docs/CategoryResponseEntity.md)
 - [SwirepayPaymentApi.CountryResponse](docs/CountryResponse.md)
 - [SwirepayPaymentApi.CurrencyResponse](docs/CurrencyResponse.md)
 - [SwirepayPaymentApi.CustomerRequest](docs/CustomerRequest.md)
 - [SwirepayPaymentApi.CustomerResponse](docs/CustomerResponse.md)
 - [SwirepayPaymentApi.DefaultResponse](docs/DefaultResponse.md)
 - [SwirepayPaymentApi.DisputeResponse](docs/DisputeResponse.md)
 - [SwirepayPaymentApi.EventResponse](docs/EventResponse.md)
 - [SwirepayPaymentApi.InvoiceResponse](docs/InvoiceResponse.md)
 - [SwirepayPaymentApi.MembershipResponse](docs/MembershipResponse.md)
 - [SwirepayPaymentApi.PaymentButtonResponse](docs/PaymentButtonResponse.md)
 - [SwirepayPaymentApi.PaymentLinkResponse](docs/PaymentLinkResponse.md)
 - [SwirepayPaymentApi.PaymentMethodRequest](docs/PaymentMethodRequest.md)
 - [SwirepayPaymentApi.PaymentMethodRequestCard](docs/PaymentMethodRequestCard.md)
 - [SwirepayPaymentApi.PaymentMethodResponse](docs/PaymentMethodResponse.md)
 - [SwirepayPaymentApi.PaymentResponse](docs/PaymentResponse.md)
 - [SwirepayPaymentApi.PaymentSessionResponse](docs/PaymentSessionResponse.md)
 - [SwirepayPaymentApi.PayoutResponse](docs/PayoutResponse.md)
 - [SwirepayPaymentApi.PlanResponse](docs/PlanResponse.md)
 - [SwirepayPaymentApi.ProductResponse](docs/ProductResponse.md)
 - [SwirepayPaymentApi.PublicKeyResponse](docs/PublicKeyResponse.md)
 - [SwirepayPaymentApi.RefundResponse](docs/RefundResponse.md)
 - [SwirepayPaymentApi.ReminderResponse](docs/ReminderResponse.md)
 - [SwirepayPaymentApi.ReportResponse](docs/ReportResponse.md)
 - [SwirepayPaymentApi.SetupSessionResponse](docs/SetupSessionResponse.md)
 - [SwirepayPaymentApi.SubscriptionResponse](docs/SubscriptionResponse.md)
 - [SwirepayPaymentApi.TerminalResponse](docs/TerminalResponse.md)
 - [SwirepayPaymentApi.TransactionResponse](docs/TransactionResponse.md)
 - [SwirepayPaymentApi.UserResponse](docs/UserResponse.md)

## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header

