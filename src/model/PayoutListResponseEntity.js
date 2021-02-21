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
import Payout from './Payout';

/**
 * The PayoutListResponseEntity model module.
 * @module model/PayoutListResponseEntity
 * @version 1.0.1
 */
class PayoutListResponseEntity {
    /**
     * Constructs a new <code>PayoutListResponseEntity</code>.
     * @alias module:model/PayoutListResponseEntity
     */
    constructor() { 
        
        PayoutListResponseEntity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayoutListResponseEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayoutListResponseEntity} obj Optional instance to populate.
     * @return {module:model/PayoutListResponseEntity} The populated <code>PayoutListResponseEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutListResponseEntity();

            if (data.hasOwnProperty('empty')) {
                obj['empty'] = ApiClient.convertToType(data['empty'], 'Boolean');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('numberOfElements')) {
                obj['numberOfElements'] = ApiClient.convertToType(data['numberOfElements'], 'Number');
            }
            if (data.hasOwnProperty('totalElements')) {
                obj['totalElements'] = ApiClient.convertToType(data['totalElements'], 'Number');
            }
            if (data.hasOwnProperty('totalPages')) {
                obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], [Payout]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} empty
 */
PayoutListResponseEntity.prototype['empty'] = undefined;

/**
 * @member {Number} number
 */
PayoutListResponseEntity.prototype['number'] = undefined;

/**
 * @member {Number} numberOfElements
 */
PayoutListResponseEntity.prototype['numberOfElements'] = undefined;

/**
 * @member {Number} totalElements
 */
PayoutListResponseEntity.prototype['totalElements'] = undefined;

/**
 * @member {Number} totalPages
 */
PayoutListResponseEntity.prototype['totalPages'] = undefined;

/**
 * @member {Number} size
 */
PayoutListResponseEntity.prototype['size'] = undefined;

/**
 * @member {Array.<module:model/Payout>} content
 */
PayoutListResponseEntity.prototype['content'] = undefined;






export default PayoutListResponseEntity;

