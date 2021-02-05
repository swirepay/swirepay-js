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
import Currency from './Currency';

/**
 * The PaymentSessionPublicResponse model module.
 * @module model/PaymentSessionPublicResponse
 * @version 1.0.0
 */
class PaymentSessionPublicResponse {
    /**
     * Constructs a new <code>PaymentSessionPublicResponse</code>.
     * @alias module:model/PaymentSessionPublicResponse
     */
    constructor() { 
        
        PaymentSessionPublicResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentSessionPublicResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentSessionPublicResponse} obj Optional instance to populate.
     * @return {module:model/PaymentSessionPublicResponse} The populated <code>PaymentSessionPublicResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentSessionPublicResponse();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('amountDisputed')) {
                obj['amountDisputed'] = ApiClient.convertToType(data['amountDisputed'], 'Number');
            }
            if (data.hasOwnProperty('amountRefunded')) {
                obj['amountRefunded'] = ApiClient.convertToType(data['amountRefunded'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('paymentDate')) {
                obj['paymentDate'] = ApiClient.convertToType(data['paymentDate'], 'String');
            }
            if (data.hasOwnProperty('refundDate')) {
                obj['refundDate'] = ApiClient.convertToType(data['refundDate'], 'String');
            }
            if (data.hasOwnProperty('disputeDate')) {
                obj['disputeDate'] = ApiClient.convertToType(data['disputeDate'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('receiptNumber')) {
                obj['receiptNumber'] = ApiClient.convertToType(data['receiptNumber'], 'String');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('nextActionUrl')) {
                obj['nextActionUrl'] = ApiClient.convertToType(data['nextActionUrl'], 'String');
            }
            if (data.hasOwnProperty('returnUrl')) {
                obj['returnUrl'] = ApiClient.convertToType(data['returnUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} gid
 */
PaymentSessionPublicResponse.prototype['gid'] = undefined;

/**
 * @member {Number} amount
 */
PaymentSessionPublicResponse.prototype['amount'] = undefined;

/**
 * @member {Number} amountDisputed
 */
PaymentSessionPublicResponse.prototype['amountDisputed'] = undefined;

/**
 * @member {Number} amountRefunded
 */
PaymentSessionPublicResponse.prototype['amountRefunded'] = undefined;

/**
 * @member {String} description
 */
PaymentSessionPublicResponse.prototype['description'] = undefined;

/**
 * @member {String} paymentDate
 */
PaymentSessionPublicResponse.prototype['paymentDate'] = undefined;

/**
 * @member {String} refundDate
 */
PaymentSessionPublicResponse.prototype['refundDate'] = undefined;

/**
 * @member {String} disputeDate
 */
PaymentSessionPublicResponse.prototype['disputeDate'] = undefined;

/**
 * @member {String} status
 */
PaymentSessionPublicResponse.prototype['status'] = undefined;

/**
 * @member {String} receiptNumber
 */
PaymentSessionPublicResponse.prototype['receiptNumber'] = undefined;

/**
 * @member {String} method
 */
PaymentSessionPublicResponse.prototype['method'] = undefined;

/**
 * @member {module:model/Currency} currency
 */
PaymentSessionPublicResponse.prototype['currency'] = undefined;

/**
 * @member {String} nextActionUrl
 */
PaymentSessionPublicResponse.prototype['nextActionUrl'] = undefined;

/**
 * @member {String} returnUrl
 */
PaymentSessionPublicResponse.prototype['returnUrl'] = undefined;






export default PaymentSessionPublicResponse;
