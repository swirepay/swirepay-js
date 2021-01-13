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
    instance = new SwirepayApi.UserResponse();
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

  describe('UserResponse', function() {
    it('should create an instance of UserResponse', function() {
      // uncomment below and update the code to test UserResponse
      //var instane = new SwirepayApi.UserResponse();
      //expect(instance).to.be.a(SwirepayApi.UserResponse);
    });

    it('should have the property gid (base name: "gid")', function() {
      // uncomment below and update the code to test the property gid
      //var instance = new SwirepayApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property givenName (base name: "givenName")', function() {
      // uncomment below and update the code to test the property givenName
      //var instance = new SwirepayApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property familName (base name: "familName")', function() {
      // uncomment below and update the code to test the property familName
      //var instance = new SwirepayApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property fullName (base name: "fullName")', function() {
      // uncomment below and update the code to test the property fullName
      //var instance = new SwirepayApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property isEmailConfirmed (base name: "isEmailConfirmed")', function() {
      // uncomment below and update the code to test the property isEmailConfirmed
      //var instance = new SwirepayApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phoneNumber")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instance = new SwirepayApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property isTwoFactorEnabled (base name: "isTwoFactorEnabled")', function() {
      // uncomment below and update the code to test the property isTwoFactorEnabled
      //var instance = new SwirepayApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property lastLogin (base name: "lastLogin")', function() {
      // uncomment below and update the code to test the property lastLogin
      //var instance = new SwirepayApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new SwirepayApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property deleted (base name: "deleted")', function() {
      // uncomment below and update the code to test the property deleted
      //var instance = new SwirepayApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new SwirepayApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new SwirepayApi.UserResponse();
      //expect(instance).to.be();
    });

  });

}));
