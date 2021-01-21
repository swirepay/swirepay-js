/**
 * Swirepay Payment API
 * Swirepay REST APIs' are resource-oriented URLs that accept JSON-encoded request bodies, return JSON-encoded responses, and use standard HTTP response codes, authentication, and verbs. You can use the Swirepay API in test mode, which does not affect your live data or interact with the banking networks. The `API key` you use to authenticate the request determines whether the request is live mode or test mode.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: apiteam@swirepay.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The UserResponse model module.
* @module model/UserResponse
* @version 1.3.0
*/
export default class UserResponse {
    /**
    * Constructs a new <code>UserResponse</code>.
    * @alias module:model/UserResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>UserResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UserResponse} obj Optional instance to populate.
    * @return {module:model/UserResponse} The populated <code>UserResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserResponse();
                        
            
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('familName')) {
                obj['familName'] = ApiClient.convertToType(data['familName'], 'String');
            }
            if (data.hasOwnProperty('fullName')) {
                obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
            }
            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('givenName')) {
                obj['givenName'] = ApiClient.convertToType(data['givenName'], 'String');
            }
            if (data.hasOwnProperty('isEmailConfirmed')) {
                obj['isEmailConfirmed'] = ApiClient.convertToType(data['isEmailConfirmed'], 'String');
            }
            if (data.hasOwnProperty('isTwoFactorEnabled')) {
                obj['isTwoFactorEnabled'] = ApiClient.convertToType(data['isTwoFactorEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('lastLogin')) {
                obj['lastLogin'] = ApiClient.convertToType(data['lastLogin'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Boolean} active
    */
    'active' = undefined;
    /**
    * @member {String} createdAt
    */
    'createdAt' = undefined;
    /**
    * @member {Boolean} deleted
    */
    'deleted' = undefined;
    /**
    * @member {String} familName
    */
    'familName' = undefined;
    /**
    * @member {String} fullName
    */
    'fullName' = undefined;
    /**
    * @member {String} gid
    */
    'gid' = undefined;
    /**
    * @member {String} givenName
    */
    'givenName' = undefined;
    /**
    * @member {String} isEmailConfirmed
    */
    'isEmailConfirmed' = undefined;
    /**
    * @member {Boolean} isTwoFactorEnabled
    */
    'isTwoFactorEnabled' = undefined;
    /**
    * @member {String} lastLogin
    */
    'lastLogin' = undefined;
    /**
    * @member {String} phoneNumber
    */
    'phoneNumber' = undefined;
    /**
    * @member {String} updatedAt
    */
    'updatedAt' = undefined;




}
