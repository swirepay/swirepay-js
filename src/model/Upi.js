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
import Customer from './Customer';

/**
 * The Upi model module.
 * @module model/Upi
 * @version 1.0.1
 */
class Upi {
    /**
     * Constructs a new <code>Upi</code>.
     * @alias module:model/Upi
     */
    constructor() { 
        
        Upi.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Upi</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Upi} obj Optional instance to populate.
     * @return {module:model/Upi} The populated <code>Upi</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Upi();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('vpa')) {
                obj['vpa'] = ApiClient.convertToType(data['vpa'], 'String');
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = Customer.constructFromObject(data['customer']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} gid
 */
Upi.prototype['gid'] = undefined;

/**
 * @member {String} createdAt
 */
Upi.prototype['createdAt'] = undefined;

/**
 * @member {String} updatedAt
 */
Upi.prototype['updatedAt'] = undefined;

/**
 * @member {Boolean} deleted
 */
Upi.prototype['deleted'] = undefined;

/**
 * @member {String} vpa
 */
Upi.prototype['vpa'] = undefined;

/**
 * @member {module:model/Customer} customer
 */
Upi.prototype['customer'] = undefined;






export default Upi;

