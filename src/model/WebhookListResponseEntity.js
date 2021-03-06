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
import Webhook from './Webhook';

/**
 * The WebhookListResponseEntity model module.
 * @module model/WebhookListResponseEntity
 * @version 1.0.0
 */
class WebhookListResponseEntity {
    /**
     * Constructs a new <code>WebhookListResponseEntity</code>.
     * @alias module:model/WebhookListResponseEntity
     */
    constructor() { 
        
        WebhookListResponseEntity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookListResponseEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookListResponseEntity} obj Optional instance to populate.
     * @return {module:model/WebhookListResponseEntity} The populated <code>WebhookListResponseEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookListResponseEntity();

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
                obj['content'] = ApiClient.convertToType(data['content'], [Webhook]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} empty
 */
WebhookListResponseEntity.prototype['empty'] = undefined;

/**
 * @member {Number} number
 */
WebhookListResponseEntity.prototype['number'] = undefined;

/**
 * @member {Number} numberOfElements
 */
WebhookListResponseEntity.prototype['numberOfElements'] = undefined;

/**
 * @member {Number} totalElements
 */
WebhookListResponseEntity.prototype['totalElements'] = undefined;

/**
 * @member {Number} totalPages
 */
WebhookListResponseEntity.prototype['totalPages'] = undefined;

/**
 * @member {Number} size
 */
WebhookListResponseEntity.prototype['size'] = undefined;

/**
 * @member {Array.<module:model/Webhook>} content
 */
WebhookListResponseEntity.prototype['content'] = undefined;






export default WebhookListResponseEntity;

