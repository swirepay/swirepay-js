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
    instance = new SwirepayApi.PayoutListResponseEntity();
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

  describe('PayoutListResponseEntity', function() {
    it('should create an instance of PayoutListResponseEntity', function() {
      // uncomment below and update the code to test PayoutListResponseEntity
      //var instane = new SwirepayApi.PayoutListResponseEntity();
      //expect(instance).to.be.a(SwirepayApi.PayoutListResponseEntity);
    });

    it('should have the property empty (base name: "empty")', function() {
      // uncomment below and update the code to test the property empty
      //var instance = new SwirepayApi.PayoutListResponseEntity();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instance = new SwirepayApi.PayoutListResponseEntity();
      //expect(instance).to.be();
    });

    it('should have the property numberOfElements (base name: "numberOfElements")', function() {
      // uncomment below and update the code to test the property numberOfElements
      //var instance = new SwirepayApi.PayoutListResponseEntity();
      //expect(instance).to.be();
    });

    it('should have the property totalElements (base name: "totalElements")', function() {
      // uncomment below and update the code to test the property totalElements
      //var instance = new SwirepayApi.PayoutListResponseEntity();
      //expect(instance).to.be();
    });

    it('should have the property totalPages (base name: "totalPages")', function() {
      // uncomment below and update the code to test the property totalPages
      //var instance = new SwirepayApi.PayoutListResponseEntity();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new SwirepayApi.PayoutListResponseEntity();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instance = new SwirepayApi.PayoutListResponseEntity();
      //expect(instance).to.be();
    });

  });

}));
