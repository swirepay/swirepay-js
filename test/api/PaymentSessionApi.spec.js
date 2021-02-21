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
    instance = new SwirepayApi.PaymentSessionApi();
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

  describe('PaymentSessionApi', function() {
    describe('addPaymentSession', function() {
      it('should call addPaymentSession successfully', function(done) {
        //uncomment below and update the code to test addPaymentSession
        //instance.addPaymentSession(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cancelPaymentSession', function() {
      it('should call cancelPaymentSession successfully', function(done) {
        //uncomment below and update the code to test cancelPaymentSession
        //instance.cancelPaymentSession(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('capturePaymentSession', function() {
      it('should call capturePaymentSession successfully', function(done) {
        //uncomment below and update the code to test capturePaymentSession
        //instance.capturePaymentSession(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('confirmPaymentSession', function() {
      it('should call confirmPaymentSession successfully', function(done) {
        //uncomment below and update the code to test confirmPaymentSession
        //instance.confirmPaymentSession(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllPaymentSession', function() {
      it('should call getAllPaymentSession successfully', function(done) {
        //uncomment below and update the code to test getAllPaymentSession
        //instance.getAllPaymentSession(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentSessionByGid', function() {
      it('should call getPaymentSessionByGid successfully', function(done) {
        //uncomment below and update the code to test getPaymentSessionByGid
        //instance.getPaymentSessionByGid(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('notifyPaymentSessionByGid', function() {
      it('should call notifyPaymentSessionByGid successfully', function(done) {
        //uncomment below and update the code to test notifyPaymentSessionByGid
        //instance.notifyPaymentSessionByGid(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('refundPaymentSession', function() {
      it('should call refundPaymentSession successfully', function(done) {
        //uncomment below and update the code to test refundPaymentSession
        //instance.refundPaymentSession(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePaymentSession', function() {
      it('should call updatePaymentSession successfully', function(done) {
        //uncomment below and update the code to test updatePaymentSession
        //instance.updatePaymentSession(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
