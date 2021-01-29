/**
 * Swirepay Payment API
 * Swirepay REST APIs' are resource-oriented URLs that accept JSON-encoded request bodies, return JSON-encoded responses, and use standard HTTP response codes, authentication, and verbs. You can use the Swirepay API in test mode, which does not affect your live data or interact with the banking networks. The `API key` you use to authenticate the request determines whether the request is live mode or test mode.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swirepay.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The CardRequest model module.
* @module model/CardRequest
* @version 1.0.0
*/
export default class CardRequest {
    /**
    * Constructs a new <code>CardRequest</code>.
    * @alias module:model/CardRequest
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CardRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CardRequest} obj Optional instance to populate.
    * @return {module:model/CardRequest} The populated <code>CardRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CardRequest();
                        
            
            if (data.hasOwnProperty('cvv')) {
                obj['cvv'] = ApiClient.convertToType(data['cvv'], 'String');
            }
            if (data.hasOwnProperty('expiryMonth')) {
                obj['expiryMonth'] = ApiClient.convertToType(data['expiryMonth'], 'String');
            }
            if (data.hasOwnProperty('expiryYear')) {
                obj['expiryYear'] = ApiClient.convertToType(data['expiryYear'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('scheme')) {
                obj['scheme'] = ApiClient.convertToType(data['scheme'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} cvv
    */
    'cvv' = undefined;
    /**
    * @member {String} expiryMonth
    */
    'expiryMonth' = undefined;
    /**
    * @member {String} expiryYear
    */
    'expiryYear' = undefined;
    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {String} number
    */
    'number' = undefined;
    /**
    * @member {String} scheme
    */
    'scheme' = undefined;




}
