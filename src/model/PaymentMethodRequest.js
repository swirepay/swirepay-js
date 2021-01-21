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

import ApiClient from '../ApiClient';
import PaymentMethodRequestCard from './PaymentMethodRequestCard';

/**
* The PaymentMethodRequest model module.
* @module model/PaymentMethodRequest
* @version 1.3.0
*/
export default class PaymentMethodRequest {
    /**
    * Constructs a new <code>PaymentMethodRequest</code>.
    * @alias module:model/PaymentMethodRequest
    * @class
    */

    constructor() {
        
        
        
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
                obj['card'] = PaymentMethodRequestCard.constructFromObject(data['card']);
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/PaymentMethodRequestCard} card
    */
    'card' = undefined;
    /**
    * @member {String} phoneNumber
    */
    'phoneNumber' = undefined;
    /**
    * @member {String} type
    */
    'type' = undefined;




}
