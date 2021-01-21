/**
 * Swirepay Payment API
 * Swirepay REST APIs' are resource-oriented URLs that accept JSON-encoded request bodies, return JSON-encoded responses, and use standard HTTP response codes, authentication, and verbs. You can use the Swirepay API in test mode, which does not affect your live data or interact with the banking networks. The `API key` you use to authenticate the request determines whether the request is live mode or test mode.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: apiteam@swirepay.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwirepayPaymentApi);
  }
}(this, function(expect, SwirepayPaymentApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwirepayPaymentApi.CardRequest();
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

  describe('CardRequest', function() {
    it('should create an instance of CardRequest', function() {
      // uncomment below and update the code to test CardRequest
      //var instane = new SwirepayPaymentApi.CardRequest();
      //expect(instance).to.be.a(SwirepayPaymentApi.CardRequest);
    });

    it('should have the property cvv (base name: "cvv")', function() {
      // uncomment below and update the code to test the property cvv
      //var instane = new SwirepayPaymentApi.CardRequest();
      //expect(instance).to.be();
    });

    it('should have the property expiryMonth (base name: "expiryMonth")', function() {
      // uncomment below and update the code to test the property expiryMonth
      //var instane = new SwirepayPaymentApi.CardRequest();
      //expect(instance).to.be();
    });

    it('should have the property expiryYear (base name: "expiryYear")', function() {
      // uncomment below and update the code to test the property expiryYear
      //var instane = new SwirepayPaymentApi.CardRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new SwirepayPaymentApi.CardRequest();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new SwirepayPaymentApi.CardRequest();
      //expect(instance).to.be();
    });

    it('should have the property scheme (base name: "scheme")', function() {
      // uncomment below and update the code to test the property scheme
      //var instane = new SwirepayPaymentApi.CardRequest();
      //expect(instance).to.be();
    });

  });

}));
