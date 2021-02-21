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
import Address from './Address';
import Tax from './Tax';

/**
 * The Customer model module.
 * @module model/Customer
 * @version 1.0.1
 */
class Customer {
    /**
     * Constructs a new <code>Customer</code>.
     * @alias module:model/Customer
     */
    constructor() { 
        
        Customer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Customer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Customer} obj Optional instance to populate.
     * @return {module:model/Customer} The populated <code>Customer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Customer();

            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('referenceId')) {
                obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
            }
            if (data.hasOwnProperty('billingAddress')) {
                obj['billingAddress'] = Address.constructFromObject(data['billingAddress']);
            }
            if (data.hasOwnProperty('shippingAddress')) {
                obj['shippingAddress'] = Address.constructFromObject(data['shippingAddress']);
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = Tax.constructFromObject(data['tax']);
            }
            if (data.hasOwnProperty('taxStatus')) {
                obj['taxStatus'] = ApiClient.convertToType(data['taxStatus'], 'String');
            }
            if (data.hasOwnProperty('taxValue')) {
                obj['taxValue'] = ApiClient.convertToType(data['taxValue'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} createdAt
 */
Customer.prototype['createdAt'] = undefined;

/**
 * @member {Boolean} deleted
 */
Customer.prototype['deleted'] = undefined;

/**
 * @member {String} email
 */
Customer.prototype['email'] = undefined;

/**
 * @member {String} gid
 */
Customer.prototype['gid'] = undefined;

/**
 * @member {String} name
 */
Customer.prototype['name'] = undefined;

/**
 * @member {String} phoneNumber
 */
Customer.prototype['phoneNumber'] = undefined;

/**
 * @member {String} referenceId
 */
Customer.prototype['referenceId'] = undefined;

/**
 * @member {module:model/Address} billingAddress
 */
Customer.prototype['billingAddress'] = undefined;

/**
 * @member {module:model/Address} shippingAddress
 */
Customer.prototype['shippingAddress'] = undefined;

/**
 * @member {module:model/Tax} tax
 */
Customer.prototype['tax'] = undefined;

/**
 * @member {String} taxStatus
 */
Customer.prototype['taxStatus'] = undefined;

/**
 * @member {String} taxValue
 */
Customer.prototype['taxValue'] = undefined;

/**
 * @member {String} updatedAt
 */
Customer.prototype['updatedAt'] = undefined;






export default Customer;

