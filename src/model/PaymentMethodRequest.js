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
import CardRequest from './CardRequest';
import UpiRequest from './UpiRequest';

/**
 * The PaymentMethodRequest model module.
 * @module model/PaymentMethodRequest
 * @version 1.0.0
 */
class PaymentMethodRequest {
    /**
     * Constructs a new <code>PaymentMethodRequest</code>.
     * @alias module:model/PaymentMethodRequest
     * @param type {String} 
     */
    constructor(type) { 
        
        PaymentMethodRequest.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>PaymentMethodRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentMethodRequest} obj Optional instance to populate.
     * @return {module:model/PaymentMethodRequest} The populated <code>PaymentMethodRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentMethodRequest();

            if (data.hasOwnProperty('card')) {
                obj['card'] = CardRequest.constructFromObject(data['card']);
            }
            if (data.hasOwnProperty('customerGid')) {
                obj['customerGid'] = ApiClient.convertToType(data['customerGid'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('upi')) {
                obj['upi'] = UpiRequest.constructFromObject(data['upi']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CardRequest} card
 */
PaymentMethodRequest.prototype['card'] = undefined;

/**
 * @member {String} customerGid
 */
PaymentMethodRequest.prototype['customerGid'] = undefined;

/**
 * @member {String} type
 */
PaymentMethodRequest.prototype['type'] = undefined;

/**
 * @member {module:model/UpiRequest} upi
 */
PaymentMethodRequest.prototype['upi'] = undefined;






export default PaymentMethodRequest;

