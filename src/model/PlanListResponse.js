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
import PlanListResponseEntity from './PlanListResponseEntity';

/**
 * The PlanListResponse model module.
 * @module model/PlanListResponse
 * @version 1.0.0
 */
class PlanListResponse {
    /**
     * Constructs a new <code>PlanListResponse</code>.
     * @alias module:model/PlanListResponse
     */
    constructor() { 
        
        PlanListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlanListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlanListResponse} obj Optional instance to populate.
     * @return {module:model/PlanListResponse} The populated <code>PlanListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlanListResponse();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('responseCode')) {
                obj['responseCode'] = ApiClient.convertToType(data['responseCode'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = PlanListResponseEntity.constructFromObject(data['entity']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} message
 */
PlanListResponse.prototype['message'] = undefined;

/**
 * @member {Number} responseCode
 */
PlanListResponse.prototype['responseCode'] = undefined;

/**
 * status of response
 * @member {module:model/PlanListResponse.StatusEnum} status
 */
PlanListResponse.prototype['status'] = undefined;

/**
 * @member {module:model/PlanListResponseEntity} entity
 */
PlanListResponse.prototype['entity'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
PlanListResponse['StatusEnum'] = {

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



export default PlanListResponse;

