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

import ApiClient from '../ApiClient';

/**
 * The WebhookRequest model module.
 * @module model/WebhookRequest
 * @version 1.0.1
 */
class WebhookRequest {
    /**
     * Constructs a new <code>WebhookRequest</code>.
     * @alias module:model/WebhookRequest
     * @param email {String} 
     * @param url {String} 
     * @param secret {String} 
     * @param events {Array.<String>} 
     */
    constructor(email, url, secret, events) { 
        
        WebhookRequest.initialize(this, email, url, secret, events);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, url, secret, events) { 
        obj['email'] = email;
        obj['url'] = url;
        obj['secret'] = secret;
        obj['events'] = events;
    }

    /**
     * Constructs a <code>WebhookRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookRequest} obj Optional instance to populate.
     * @return {module:model/WebhookRequest} The populated <code>WebhookRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookRequest();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('isTest')) {
                obj['isTest'] = ApiClient.convertToType(data['isTest'], 'Boolean');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
WebhookRequest.prototype['email'] = undefined;

/**
 * @member {String} url
 */
WebhookRequest.prototype['url'] = undefined;

/**
 * @member {Boolean} isTest
 */
WebhookRequest.prototype['isTest'] = undefined;

/**
 * @member {String} secret
 */
WebhookRequest.prototype['secret'] = undefined;

/**
 * @member {Array.<String>} events
 */
WebhookRequest.prototype['events'] = undefined;






export default WebhookRequest;

