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
    instance = new SwirepayPaymentApi.ReminderResponse();
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

  describe('ReminderResponse', function() {
    it('should create an instance of ReminderResponse', function() {
      // uncomment below and update the code to test ReminderResponse
      //var instane = new SwirepayPaymentApi.ReminderResponse();
      //expect(instance).to.be.a(SwirepayPaymentApi.ReminderResponse);
    });

    it('should have the property entity (base name: "entity")', function() {
      // uncomment below and update the code to test the property entity
      //var instane = new SwirepayPaymentApi.ReminderResponse();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new SwirepayPaymentApi.ReminderResponse();
      //expect(instance).to.be();
    });

    it('should have the property responseCode (base name: "responseCode")', function() {
      // uncomment below and update the code to test the property responseCode
      //var instane = new SwirepayPaymentApi.ReminderResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new SwirepayPaymentApi.ReminderResponse();
      //expect(instance).to.be();
    });

  });

}));
