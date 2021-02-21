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
import Category from './Category';
import Country from './Country';
import Currency from './Currency';
import PaymentType from './PaymentType';

/**
 * The Rate model module.
 * @module model/Rate
 * @version 1.0.1
 */
class Rate {
    /**
     * Constructs a new <code>Rate</code>.
     * @alias module:model/Rate
     */
    constructor() { 
        
        Rate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Rate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Rate} obj Optional instance to populate.
     * @return {module:model/Rate} The populated <code>Rate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Rate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
            if (data.hasOwnProperty('processingMin')) {
                obj['processingMin'] = ApiClient.convertToType(data['processingMin'], 'Number');
            }
            if (data.hasOwnProperty('processingMax')) {
                obj['processingMax'] = ApiClient.convertToType(data['processingMax'], 'Number');
            }
            if (data.hasOwnProperty('baseRate')) {
                obj['baseRate'] = ApiClient.convertToType(data['baseRate'], 'Number');
            }
            if (data.hasOwnProperty('baseFee')) {
                obj['baseFee'] = ApiClient.convertToType(data['baseFee'], 'Number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ApiClient.convertToType(data['fee'], 'Number');
            }
            if (data.hasOwnProperty('baseTax')) {
                obj['baseTax'] = ApiClient.convertToType(data['baseTax'], 'Number');
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = Country.constructFromObject(data['country']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = Category.constructFromObject(data['category']);
            }
            if (data.hasOwnProperty('acquirer')) {
                obj['acquirer'] = Acquirer.constructFromObject(data['acquirer']);
            }
            if (data.hasOwnProperty('paymentType')) {
                obj['paymentType'] = PaymentType.constructFromObject(data['paymentType']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Rate.prototype['id'] = undefined;

/**
 * @member {String} gid
 */
Rate.prototype['gid'] = undefined;

/**
 * @member {String} createdAt
 */
Rate.prototype['createdAt'] = undefined;

/**
 * @member {String} updatedAt
 */
Rate.prototype['updatedAt'] = undefined;

/**
 * @member {Number} processingMin
 */
Rate.prototype['processingMin'] = undefined;

/**
 * @member {Number} processingMax
 */
Rate.prototype['processingMax'] = undefined;

/**
 * @member {Number} baseRate
 */
Rate.prototype['baseRate'] = undefined;

/**
 * @member {Number} baseFee
 */
Rate.prototype['baseFee'] = undefined;

/**
 * @member {Number} rate
 */
Rate.prototype['rate'] = undefined;

/**
 * @member {Number} fee
 */
Rate.prototype['fee'] = undefined;

/**
 * @member {Number} baseTax
 */
Rate.prototype['baseTax'] = undefined;

/**
 * @member {Number} tax
 */
Rate.prototype['tax'] = undefined;

/**
 * @member {Boolean} deleted
 */
Rate.prototype['deleted'] = undefined;

/**
 * @member {module:model/Country} country
 */
Rate.prototype['country'] = undefined;

/**
 * @member {module:model/Currency} currency
 */
Rate.prototype['currency'] = undefined;

/**
 * @member {module:model/Category} category
 */
Rate.prototype['category'] = undefined;

/**
 * @member {module:model/Acquirer} acquirer
 */
Rate.prototype['acquirer'] = undefined;

/**
 * @member {module:model/PaymentType} paymentType
 */
Rate.prototype['paymentType'] = undefined;






export default Rate;

