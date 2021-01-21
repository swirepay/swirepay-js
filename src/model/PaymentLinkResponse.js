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
import CategoryResponseEntity from './CategoryResponseEntity';

/**
* The PaymentLinkResponse model module.
* @module model/PaymentLinkResponse
* @version 1.3.0
*/
export default class PaymentLinkResponse {
    /**
    * Constructs a new <code>PaymentLinkResponse</code>.
    * @alias module:model/PaymentLinkResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>PaymentLinkResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentLinkResponse} obj Optional instance to populate.
    * @return {module:model/PaymentLinkResponse} The populated <code>PaymentLinkResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentLinkResponse();
                        
            
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = CategoryResponseEntity.constructFromObject(data['entity']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('responseCode')) {
                obj['responseCode'] = ApiClient.convertToType(data['responseCode'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/CategoryResponseEntity} entity
    */
    'entity' = undefined;
    /**
    * @member {String} message
    */
    'message' = undefined;
    /**
    * @member {Number} responseCode
    */
    'responseCode' = undefined;
    /**
    * status of response
    * @member {module:model/PaymentLinkResponse.StatusEnum} status
    */
    'status' = undefined;



    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */
    static StatusEnum = {
        /**
         * value: "SUCCESS"
         * @const
         */
        "SUCCESS": "SUCCESS",
        /**
         * value: "FAILED"
         * @const
         */
        "FAILED": "FAILED"    };

}
