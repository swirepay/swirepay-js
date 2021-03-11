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
import BillingFrequency from './BillingFrequency';

/**
 * The PlanRequest model module.
 * @module model/PlanRequest
 * @version 1.0.0
 */
class PlanRequest {
    /**
     * Constructs a new <code>PlanRequest</code>.
     * @alias module:model/PlanRequest
     * @param currencyCode {String} 
     * @param name {String} 
     * @param amount {Number} 
     * @param billingPeriod {Number} 
     * @param billingFrequency {module:model/BillingFrequency} 
     */
    constructor(currencyCode, name, amount, billingPeriod, billingFrequency) { 
        
        PlanRequest.initialize(this, currencyCode, name, amount, billingPeriod, billingFrequency);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, currencyCode, name, amount, billingPeriod, billingFrequency) { 
        obj['currencyCode'] = currencyCode;
        obj['name'] = name;
        obj['amount'] = amount;
        obj['billingPeriod'] = billingPeriod;
        obj['billingFrequency'] = billingFrequency;
    }

    /**
     * Constructs a <code>PlanRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlanRequest} obj Optional instance to populate.
     * @return {module:model/PlanRequest} The populated <code>PlanRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlanRequest();

            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('billingPeriod')) {
                obj['billingPeriod'] = ApiClient.convertToType(data['billingPeriod'], 'Number');
            }
            if (data.hasOwnProperty('billingFrequency')) {
                obj['billingFrequency'] = BillingFrequency.constructFromObject(data['billingFrequency']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} currencyCode
 */
PlanRequest.prototype['currencyCode'] = undefined;

/**
 * @member {String} name
 */
PlanRequest.prototype['name'] = undefined;

/**
 * @member {Number} amount
 */
PlanRequest.prototype['amount'] = undefined;

/**
 * @member {String} description
 */
PlanRequest.prototype['description'] = undefined;

/**
 * @member {String} note
 */
PlanRequest.prototype['note'] = undefined;

/**
 * @member {Number} billingPeriod
 */
PlanRequest.prototype['billingPeriod'] = undefined;

/**
 * @member {module:model/BillingFrequency} billingFrequency
 */
PlanRequest.prototype['billingFrequency'] = undefined;






export default PlanRequest;

