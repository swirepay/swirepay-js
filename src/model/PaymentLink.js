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

import ApiClient from '../ApiClient';
import Currency from './Currency';
import PaymentMethodType from './PaymentMethodType';
import Support from './Support';

/**
 * The PaymentLink model module.
 * @module model/PaymentLink
 * @version 1.0.0
 */
class PaymentLink {
    /**
     * Constructs a new <code>PaymentLink</code>.
     * @alias module:model/PaymentLink
     */
    constructor() { 
        
        PaymentLink.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentLink} obj Optional instance to populate.
     * @return {module:model/PaymentLink} The populated <code>PaymentLink</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentLink();

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
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('paymentMethodType')) {
                obj['paymentMethodType'] = ApiClient.convertToType(data['paymentMethodType'], [PaymentMethodType]);
            }
            if (data.hasOwnProperty('redirectUri')) {
                obj['redirectUri'] = ApiClient.convertToType(data['redirectUri'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('statementDescriptor')) {
                obj['statementDescriptor'] = ApiClient.convertToType(data['statementDescriptor'], 'String');
            }
            if (data.hasOwnProperty('expiresAt')) {
                obj['expiresAt'] = ApiClient.convertToType(data['expiresAt'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('nextActionUrl')) {
                obj['nextActionUrl'] = ApiClient.convertToType(data['nextActionUrl'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('notificationType')) {
                obj['notificationType'] = ApiClient.convertToType(data['notificationType'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('support')) {
                obj['support'] = Support.constructFromObject(data['support']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} gid
 */
PaymentLink.prototype['gid'] = undefined;

/**
 * @member {String} createdAt
 */
PaymentLink.prototype['createdAt'] = undefined;

/**
 * @member {String} updatedAt
 */
PaymentLink.prototype['updatedAt'] = undefined;

/**
 * @member {Boolean} deleted
 */
PaymentLink.prototype['deleted'] = undefined;

/**
 * @member {Number} amount
 */
PaymentLink.prototype['amount'] = undefined;

/**
 * @member {Array.<module:model/PaymentMethodType>} paymentMethodType
 */
PaymentLink.prototype['paymentMethodType'] = undefined;

/**
 * @member {String} redirectUri
 */
PaymentLink.prototype['redirectUri'] = undefined;

/**
 * @member {String} description
 */
PaymentLink.prototype['description'] = undefined;

/**
 * @member {String} statementDescriptor
 */
PaymentLink.prototype['statementDescriptor'] = undefined;

/**
 * @member {String} expiresAt
 */
PaymentLink.prototype['expiresAt'] = undefined;

/**
 * @member {String} status
 */
PaymentLink.prototype['status'] = undefined;

/**
 * @member {String} nextActionUrl
 */
PaymentLink.prototype['nextActionUrl'] = undefined;

/**
 * @member {String} email
 */
PaymentLink.prototype['email'] = undefined;

/**
 * @member {String} phoneNumber
 */
PaymentLink.prototype['phoneNumber'] = undefined;

/**
 * @member {String} name
 */
PaymentLink.prototype['name'] = undefined;

/**
 * @member {String} link
 */
PaymentLink.prototype['link'] = undefined;

/**
 * @member {module:model/PaymentLink.NotificationTypeEnum} notificationType
 */
PaymentLink.prototype['notificationType'] = undefined;

/**
 * @member {module:model/Currency} currency
 */
PaymentLink.prototype['currency'] = undefined;

/**
 * @member {module:model/Support} support
 */
PaymentLink.prototype['support'] = undefined;





/**
 * Allowed values for the <code>notificationType</code> property.
 * @enum {String}
 * @readonly
 */
PaymentLink['NotificationTypeEnum'] = {

    /**
     * value: "ALL"
     * @const
     */
    "ALL": "ALL",

    /**
     * value: "SMS"
     * @const
     */
    "SMS": "SMS",

    /**
     * value: "EMAIL"
     * @const
     */
    "EMAIL": "EMAIL"
};



export default PaymentLink;

