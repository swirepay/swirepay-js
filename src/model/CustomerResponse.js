/**
 * Swirepay Payment API
 * Swirepay REST APIs' are resource-oriented URLs that accept JSON-encoded request bodies, return JSON-encoded responses, and use standard HTTP response codes, authentication, and verbs. You can use the Swirepay API in test mode, which does not affect your live data or interact with the banking networks. The `API key` you use to authenticate the request determines whether the request is live mode or test mode.
 *
 * OpenAPI spec version: 1.2.0
 * Contact: apiteam@swirepay.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The CustomerResponse model module.
* @module model/CustomerResponse
* @version 1.2.0
*/
export default class CustomerResponse {
    /**
    * Constructs a new <code>CustomerResponse</code>.
    * @alias module:model/CustomerResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CustomerResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CustomerResponse} obj Optional instance to populate.
    * @return {module:model/CustomerResponse} The populated <code>CustomerResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerResponse();
                        
            
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
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
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} createdAt
    */
    'createdAt' = undefined;
    /**
    * @member {String} email
    */
    'email' = undefined;
    /**
    * @member {String} gid
    */
    'gid' = undefined;
    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {String} phoneNumber
    */
    'phoneNumber' = undefined;
    /**
    * @member {String} updatedAt
    */
    'updatedAt' = undefined;




}
