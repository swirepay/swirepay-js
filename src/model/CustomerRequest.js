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
import AddressRequest from './AddressRequest';

/**
 * The CustomerRequest model module.
 * @module model/CustomerRequest
 * @version 1.0.0
 */
class CustomerRequest {
    /**
     * Constructs a new <code>CustomerRequest</code>.
     * @alias module:model/CustomerRequest
     * @param email {String} 
     * @param name {String} 
     * @param phoneNumber {String} 
     */
    constructor(email, name, phoneNumber) { 
        
        CustomerRequest.initialize(this, email, name, phoneNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, name, phoneNumber) { 
        obj['email'] = email;
        obj['name'] = name;
        obj['phoneNumber'] = phoneNumber;
    }

    /**
     * Constructs a <code>CustomerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerRequest} obj Optional instance to populate.
     * @return {module:model/CustomerRequest} The populated <code>CustomerRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerRequest();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('referenceNumber')) {
                obj['referenceNumber'] = ApiClient.convertToType(data['referenceNumber'], 'String');
            }
            if (data.hasOwnProperty('taxStatus')) {
                obj['taxStatus'] = ApiClient.convertToType(data['taxStatus'], 'String');
            }
            if (data.hasOwnProperty('taxId')) {
                obj['taxId'] = ApiClient.convertToType(data['taxId'], 'String');
            }
            if (data.hasOwnProperty('taxValue')) {
                obj['taxValue'] = ApiClient.convertToType(data['taxValue'], 'String');
            }
            if (data.hasOwnProperty('billingAddress')) {
                obj['billingAddress'] = AddressRequest.constructFromObject(data['billingAddress']);
            }
            if (data.hasOwnProperty('shippingAddress')) {
                obj['shippingAddress'] = AddressRequest.constructFromObject(data['shippingAddress']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
CustomerRequest.prototype['email'] = undefined;

/**
 * @member {String} name
 */
CustomerRequest.prototype['name'] = undefined;

/**
 * @member {String} phoneNumber
 */
CustomerRequest.prototype['phoneNumber'] = undefined;

/**
 * @member {String} referenceNumber
 */
CustomerRequest.prototype['referenceNumber'] = undefined;

/**
 * @member {module:model/CustomerRequest.TaxStatusEnum} taxStatus
 */
CustomerRequest.prototype['taxStatus'] = undefined;

/**
 * @member {module:model/CustomerRequest.TaxIdEnum} taxId
 */
CustomerRequest.prototype['taxId'] = undefined;

/**
 * @member {String} taxValue
 */
CustomerRequest.prototype['taxValue'] = undefined;

/**
 * @member {module:model/AddressRequest} billingAddress
 */
CustomerRequest.prototype['billingAddress'] = undefined;

/**
 * @member {module:model/AddressRequest} shippingAddress
 */
CustomerRequest.prototype['shippingAddress'] = undefined;





/**
 * Allowed values for the <code>taxStatus</code> property.
 * @enum {String}
 * @readonly
 */
CustomerRequest['TaxStatusEnum'] = {

    /**
     * value: "TAXABLE"
     * @const
     */
    "TAXABLE": "TAXABLE",

    /**
     * value: "EXEMPT"
     * @const
     */
    "EXEMPT": "EXEMPT"
};


/**
 * Allowed values for the <code>taxId</code> property.
 * @enum {String}
 * @readonly
 */
CustomerRequest['TaxIdEnum'] = {

    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE",

    /**
     * value: "EIN"
     * @const
     */
    "EIN": "EIN",

    /**
     * value: "GST"
     * @const
     */
    "GST": "GST"
};



export default CustomerRequest;

