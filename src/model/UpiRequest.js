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
 * The UpiRequest model module.
 * @module model/UpiRequest
 * @version 1.0.1
 */
class UpiRequest {
    /**
     * Constructs a new <code>UpiRequest</code>.
     * @alias module:model/UpiRequest
     * @param vpa {String} 
     */
    constructor(vpa) { 
        
        UpiRequest.initialize(this, vpa);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, vpa) { 
        obj['vpa'] = vpa;
    }

    /**
     * Constructs a <code>UpiRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpiRequest} obj Optional instance to populate.
     * @return {module:model/UpiRequest} The populated <code>UpiRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpiRequest();

            if (data.hasOwnProperty('vpa')) {
                obj['vpa'] = ApiClient.convertToType(data['vpa'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} vpa
 */
UpiRequest.prototype['vpa'] = undefined;






export default UpiRequest;

