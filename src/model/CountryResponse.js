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
import CategoryResponseEntity from './CategoryResponseEntity';

/**
 * The CountryResponse model module.
 * @module model/CountryResponse
 * @version 1.0.0
 */
class CountryResponse {
    /**
     * Constructs a new <code>CountryResponse</code>.
     * @alias module:model/CountryResponse
     */
    constructor() { 
        
        CountryResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CountryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CountryResponse} obj Optional instance to populate.
     * @return {module:model/CountryResponse} The populated <code>CountryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CountryResponse();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = CategoryResponseEntity.constructFromObject(data['entity']);
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


}

/**
 * @member {String} message
 */
CountryResponse.prototype['message'] = undefined;

/**
 * @member {module:model/CategoryResponseEntity} entity
 */
CountryResponse.prototype['entity'] = undefined;

/**
 * @member {Number} responseCode
 */
CountryResponse.prototype['responseCode'] = undefined;

/**
 * status of response
 * @member {module:model/CountryResponse.StatusEnum} status
 */
CountryResponse.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CountryResponse['StatusEnum'] = {

    /**
     * value: "SUCCESS"
     * @const
     */
    "SUCCESS": "SUCCESS",

    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED"
};



export default CountryResponse;

