/**
 * Swirepay Payment API
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

/**
 * The PaymentMethodResponse model module.
 * @module model/PaymentMethodResponse
 * @version 1.0.0
 */
class PaymentMethodResponse {
    /**
     * Constructs a new <code>PaymentMethodResponse</code>.
     * @alias module:model/PaymentMethodResponse
     */
    constructor() { 
        
        PaymentMethodResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentMethodResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentMethodResponse} obj Optional instance to populate.
     * @return {module:model/PaymentMethodResponse} The populated <code>PaymentMethodResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentMethodResponse();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} gid
 */
PaymentMethodResponse.prototype['gid'] = undefined;

/**
 * @member {String} createdAt
 */
PaymentMethodResponse.prototype['createdAt'] = undefined;

/**
 * @member {String} updatedAt
 */
PaymentMethodResponse.prototype['updatedAt'] = undefined;






export default PaymentMethodResponse;

