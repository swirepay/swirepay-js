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
    instance = new SwirepayApi.InvoiceRequest();
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

  describe('InvoiceRequest', function() {
    it('should create an instance of InvoiceRequest', function() {
      // uncomment below and update the code to test InvoiceRequest
      //var instane = new SwirepayApi.InvoiceRequest();
      //expect(instance).to.be.a(SwirepayApi.InvoiceRequest);
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instance = new SwirepayApi.InvoiceRequest();
      //expect(instance).to.be();
    });

    it('should have the property customerGid (base name: "customerGid")', function() {
      // uncomment below and update the code to test the property customerGid
      //var instance = new SwirepayApi.InvoiceRequest();
      //expect(instance).to.be();
    });

    it('should have the property note (base name: "note")', function() {
      // uncomment below and update the code to test the property note
      //var instance = new SwirepayApi.InvoiceRequest();
      //expect(instance).to.be();
    });

    it('should have the property issueDate (base name: "issueDate")', function() {
      // uncomment below and update the code to test the property issueDate
      //var instance = new SwirepayApi.InvoiceRequest();
      //expect(instance).to.be();
    });

    it('should have the property customerNote (base name: "customerNote")', function() {
      // uncomment below and update the code to test the property customerNote
      //var instance = new SwirepayApi.InvoiceRequest();
      //expect(instance).to.be();
    });

    it('should have the property daysUntilDue (base name: "daysUntilDue")', function() {
      // uncomment below and update the code to test the property daysUntilDue
      //var instance = new SwirepayApi.InvoiceRequest();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new SwirepayApi.InvoiceRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new SwirepayApi.InvoiceRequest();
      //expect(instance).to.be();
    });

    it('should have the property statementDescriptor (base name: "statementDescriptor")', function() {
      // uncomment below and update the code to test the property statementDescriptor
      //var instance = new SwirepayApi.InvoiceRequest();
      //expect(instance).to.be();
    });

    it('should have the property billingAddress (base name: "billingAddress")', function() {
      // uncomment below and update the code to test the property billingAddress
      //var instance = new SwirepayApi.InvoiceRequest();
      //expect(instance).to.be();
    });

    it('should have the property shippingAddress (base name: "shippingAddress")', function() {
      // uncomment below and update the code to test the property shippingAddress
      //var instance = new SwirepayApi.InvoiceRequest();
      //expect(instance).to.be();
    });

    it('should have the property invoiceLineItems (base name: "invoiceLineItems")', function() {
      // uncomment below and update the code to test the property invoiceLineItems
      //var instance = new SwirepayApi.InvoiceRequest();
      //expect(instance).to.be();
    });

  });

}));
