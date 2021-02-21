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

/**
 * The Currency model module.
 * @module model/Currency
 * @version 1.0.1
 */
class Currency {
    /**
     * Constructs a new <code>Currency</code>.
     * @alias module:model/Currency
     */
    constructor() { 
        
        Currency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Currency} obj Optional instance to populate.
     * @return {module:model/Currency} The populated <code>Currency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Currency();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('toFixed')) {
                obj['toFixed'] = ApiClient.convertToType(data['toFixed'], 'Number');
            }
            if (data.hasOwnProperty('countryAlpha2')) {
                obj['countryAlpha2'] = ApiClient.convertToType(data['countryAlpha2'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Currency.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Currency.prototype['name'] = undefined;

/**
 * @member {String} prefix
 */
Currency.prototype['prefix'] = undefined;

/**
 * @member {Number} toFixed
 */
Currency.prototype['toFixed'] = undefined;

/**
 * @member {String} countryAlpha2
 */
Currency.prototype['countryAlpha2'] = undefined;






export default Currency;

