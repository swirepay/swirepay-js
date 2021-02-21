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
import Acquirer from './Acquirer';
import Rate from './Rate';

/**
 * The AccountRate model module.
 * @module model/AccountRate
 * @version 1.0.1
 */
class AccountRate {
    /**
     * Constructs a new <code>AccountRate</code>.
     * @alias module:model/AccountRate
     */
    constructor() { 
        
        AccountRate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountRate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountRate} obj Optional instance to populate.
     * @return {module:model/AccountRate} The populated <code>AccountRate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountRate();

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
            if (data.hasOwnProperty('accountRate')) {
                obj['accountRate'] = ApiClient.convertToType(data['accountRate'], 'Number');
            }
            if (data.hasOwnProperty('processingMin')) {
                obj['processingMin'] = ApiClient.convertToType(data['processingMin'], 'Number');
            }
            if (data.hasOwnProperty('processingMax')) {
                obj['processingMax'] = ApiClient.convertToType(data['processingMax'], 'Number');
            }
            if (data.hasOwnProperty('accountFee')) {
                obj['accountFee'] = ApiClient.convertToType(data['accountFee'], 'Number');
            }
            if (data.hasOwnProperty('salesPerson')) {
                obj['salesPerson'] = ApiClient.convertToType(data['salesPerson'], 'String');
            }
            if (data.hasOwnProperty('accountTax')) {
                obj['accountTax'] = ApiClient.convertToType(data['accountTax'], 'Number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = Rate.constructFromObject(data['rate']);
            }
            if (data.hasOwnProperty('acquirer')) {
                obj['acquirer'] = Acquirer.constructFromObject(data['acquirer']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} gid
 */
AccountRate.prototype['gid'] = undefined;

/**
 * @member {String} createdAt
 */
AccountRate.prototype['createdAt'] = undefined;

/**
 * @member {String} updatedAt
 */
AccountRate.prototype['updatedAt'] = undefined;

/**
 * @member {Boolean} deleted
 */
AccountRate.prototype['deleted'] = undefined;

/**
 * @member {Number} accountRate
 */
AccountRate.prototype['accountRate'] = undefined;

/**
 * @member {Number} processingMin
 */
AccountRate.prototype['processingMin'] = undefined;

/**
 * @member {Number} processingMax
 */
AccountRate.prototype['processingMax'] = undefined;

/**
 * @member {Number} accountFee
 */
AccountRate.prototype['accountFee'] = undefined;

/**
 * @member {String} salesPerson
 */
AccountRate.prototype['salesPerson'] = undefined;

/**
 * @member {Number} accountTax
 */
AccountRate.prototype['accountTax'] = undefined;

/**
 * @member {module:model/Rate} rate
 */
AccountRate.prototype['rate'] = undefined;

/**
 * @member {module:model/Acquirer} acquirer
 */
AccountRate.prototype['acquirer'] = undefined;






export default AccountRate;

