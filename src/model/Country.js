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

/**
 * The Country model module.
 * @module model/Country
 * @version 1.0.0
 */
class Country {
    /**
     * Constructs a new <code>Country</code>.
     * @alias module:model/Country
     */
    constructor() { 
        
        Country.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Country</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Country} obj Optional instance to populate.
     * @return {module:model/Country} The populated <code>Country</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Country();

            if (data.hasOwnProperty('alpha2')) {
                obj['alpha2'] = ApiClient.convertToType(data['alpha2'], 'String');
            }
            if (data.hasOwnProperty('alpha3')) {
                obj['alpha3'] = ApiClient.convertToType(data['alpha3'], 'String');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('unCode')) {
                obj['unCode'] = ApiClient.convertToType(data['unCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} alpha2
 */
Country.prototype['alpha2'] = undefined;

/**
 * @member {String} alpha3
 */
Country.prototype['alpha3'] = undefined;

/**
 * @member {Boolean} deleted
 */
Country.prototype['deleted'] = undefined;

/**
 * @member {Number} id
 */
Country.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Country.prototype['name'] = undefined;

/**
 * @member {String} unCode
 */
Country.prototype['unCode'] = undefined;






export default Country;

