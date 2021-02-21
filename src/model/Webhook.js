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
import WebhookEvent from './WebhookEvent';

/**
 * The Webhook model module.
 * @module model/Webhook
 * @version 1.0.1
 */
class Webhook {
    /**
     * Constructs a new <code>Webhook</code>.
     * @alias module:model/Webhook
     */
    constructor() { 
        
        Webhook.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Webhook} obj Optional instance to populate.
     * @return {module:model/Webhook} The populated <code>Webhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Webhook();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
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
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('integration')) {
                obj['integration'] = ApiClient.convertToType(data['integration'], 'Boolean');
            }
            if (data.hasOwnProperty('webhookEvent')) {
                obj['webhookEvent'] = ApiClient.convertToType(data['webhookEvent'], [WebhookEvent]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} gid
 */
Webhook.prototype['gid'] = undefined;

/**
 * @member {String} createdAt
 */
Webhook.prototype['createdAt'] = undefined;

/**
 * @member {String} updatedAt
 */
Webhook.prototype['updatedAt'] = undefined;

/**
 * @member {Boolean} deleted
 */
Webhook.prototype['deleted'] = undefined;

/**
 * @member {String} email
 */
Webhook.prototype['email'] = undefined;

/**
 * @member {String} url
 */
Webhook.prototype['url'] = undefined;

/**
 * @member {Boolean} isTest
 */
Webhook.prototype['isTest'] = undefined;

/**
 * @member {String} secret
 */
Webhook.prototype['secret'] = undefined;

/**
 * @member {String} status
 */
Webhook.prototype['status'] = undefined;

/**
 * @member {Boolean} integration
 */
Webhook.prototype['integration'] = undefined;

/**
 * @member {Array.<module:model/WebhookEvent>} webhookEvent
 */
Webhook.prototype['webhookEvent'] = undefined;






export default Webhook;

