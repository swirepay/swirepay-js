/**
 * Swirepay API
 * Swirepay REST APIs' are resource-oriented URLs that accept JSON-encoded request bodies, return JSON-encoded responses, and use standard HTTP response codes, authentication, and verbs. You can use the Swirepay API in test mode, which does not affect your live data or interact with the banking networks. The `API key` you use to authenticate the request determines whether the request is live mode or test mode.
 *
 * The version of the OpenAPI document: 1.0.1
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
    instance = new SwirepayApi.PaymentMethodRequest();
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

  describe('PaymentMethodRequest', function() {
    it('should create an instance of PaymentMethodRequest', function() {
      // uncomment below and update the code to test PaymentMethodRequest
      //var instane = new SwirepayApi.PaymentMethodRequest();
      //expect(instance).to.be.a(SwirepayApi.PaymentMethodRequest);
    });

    it('should have the property card (base name: "card")', function() {
      // uncomment below and update the code to test the property card
      //var instance = new SwirepayApi.PaymentMethodRequest();
      //expect(instance).to.be();
    });

    it('should have the property customerGid (base name: "customerGid")', function() {
      // uncomment below and update the code to test the property customerGid
      //var instance = new SwirepayApi.PaymentMethodRequest();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new SwirepayApi.PaymentMethodRequest();
      //expect(instance).to.be();
    });

    it('should have the property upi (base name: "upi")', function() {
      // uncomment below and update the code to test the property upi
      //var instance = new SwirepayApi.PaymentMethodRequest();
      //expect(instance).to.be();
    });

  });

}));
