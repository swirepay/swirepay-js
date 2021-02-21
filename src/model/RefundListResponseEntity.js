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
import Refund from './Refund';

/**
 * The RefundListResponseEntity model module.
 * @module model/RefundListResponseEntity
 * @version 1.0.1
 */
class RefundListResponseEntity {
    /**
     * Constructs a new <code>RefundListResponseEntity</code>.
     * @alias module:model/RefundListResponseEntity
     */
    constructor() { 
        
        RefundListResponseEntity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RefundListResponseEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RefundListResponseEntity} obj Optional instance to populate.
     * @return {module:model/RefundListResponseEntity} The populated <code>RefundListResponseEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RefundListResponseEntity();

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
                obj['content'] = ApiClient.convertToType(data['content'], [Refund]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} empty
 */
RefundListResponseEntity.prototype['empty'] = undefined;

/**
 * @member {Number} number
 */
RefundListResponseEntity.prototype['number'] = undefined;

/**
 * @member {Number} numberOfElements
 */
RefundListResponseEntity.prototype['numberOfElements'] = undefined;

/**
 * @member {Number} totalElements
 */
RefundListResponseEntity.prototype['totalElements'] = undefined;

/**
 * @member {Number} totalPages
 */
RefundListResponseEntity.prototype['totalPages'] = undefined;

/**
 * @member {Number} size
 */
RefundListResponseEntity.prototype['size'] = undefined;

/**
 * @member {Array.<module:model/Refund>} content
 */
RefundListResponseEntity.prototype['content'] = undefined;






export default RefundListResponseEntity;

