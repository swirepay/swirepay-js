/**
 * Swirepay API
 * Swirepay REST APIs' are resource-oriented URLs that accept JSON-encoded request bodies, return JSON-encoded responses, and use standard HTTP response codes, authentication, and verbs. You can use the Swirepay API in test mode, which does not affect your live data or interact with the banking networks. The `API key` you use to authenticate the request determines whether the request is live mode or test mode.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: apiteam@swirepay.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwirepayApi);
  }
}(this, function(expect, SwirepayApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwirepayApi.PaymentSessionRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PaymentSessionRequest', function() {
    it('should create an instance of PaymentSessionRequest', function() {
      // uncomment below and update the code to test PaymentSessionRequest
      //var instane = new SwirepayApi.PaymentSessionRequest();
      //expect(instance).to.be.a(SwirepayApi.PaymentSessionRequest);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new SwirepayApi.PaymentSessionRequest();
      //expect(instance).to.be();
    });

    it('should have the property amountRefunded (base name: "amountRefunded")', function() {
      // uncomment below and update the code to test the property amountRefunded
      //var instance = new SwirepayApi.PaymentSessionRequest();
      //expect(instance).to.be();
    });

    it('should have the property statementDescriptor (base name: "statementDescriptor")', function() {
      // uncomment below and update the code to test the property statementDescriptor
      //var instance = new SwirepayApi.PaymentSessionRequest();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instance = new SwirepayApi.PaymentSessionRequest();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethodType (base name: "paymentMethodType")', function() {
      // uncomment below and update the code to test the property paymentMethodType
      //var instance = new SwirepayApi.PaymentSessionRequest();
      //expect(instance).to.be();
    });

    it('should have the property customerGid (base name: "customerGid")', function() {
      // uncomment below and update the code to test the property customerGid
      //var instance = new SwirepayApi.PaymentSessionRequest();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethodGid (base name: "paymentMethodGid")', function() {
      // uncomment below and update the code to test the property paymentMethodGid
      //var instance = new SwirepayApi.PaymentSessionRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new SwirepayApi.PaymentSessionRequest();
      //expect(instance).to.be();
    });

    it('should have the property receiptEmail (base name: "receiptEmail")', function() {
      // uncomment below and update the code to test the property receiptEmail
      //var instance = new SwirepayApi.PaymentSessionRequest();
      //expect(instance).to.be();
    });

    it('should have the property receiptSms (base name: "receiptSms")', function() {
      // uncomment below and update the code to test the property receiptSms
      //var instance = new SwirepayApi.PaymentSessionRequest();
      //expect(instance).to.be();
    });

    it('should have the property confirmMethod (base name: "confirmMethod")', function() {
      // uncomment below and update the code to test the property confirmMethod
      //var instance = new SwirepayApi.PaymentSessionRequest();
      //expect(instance).to.be();
    });

    it('should have the property captureMethod (base name: "captureMethod")', function() {
      // uncomment below and update the code to test the property captureMethod
      //var instance = new SwirepayApi.PaymentSessionRequest();
      //expect(instance).to.be();
    });

    it('should have the property refundReason (base name: "refundReason")', function() {
      // uncomment below and update the code to test the property refundReason
      //var instance = new SwirepayApi.PaymentSessionRequest();
      //expect(instance).to.be();
    });

    it('should have the property refundNote (base name: "refundNote")', function() {
      // uncomment below and update the code to test the property refundNote
      //var instance = new SwirepayApi.PaymentSessionRequest();
      //expect(instance).to.be();
    });

    it('should have the property receiptNumber (base name: "receiptNumber")', function() {
      // uncomment below and update the code to test the property receiptNumber
      //var instance = new SwirepayApi.PaymentSessionRequest();
      //expect(instance).to.be();
    });

    it('should have the property mrn (base name: "mrn")', function() {
      // uncomment below and update the code to test the property mrn
      //var instance = new SwirepayApi.PaymentSessionRequest();
      //expect(instance).to.be();
    });

  });

}));
