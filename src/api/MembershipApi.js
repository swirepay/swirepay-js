/**
 * Swirepay Payment API
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


import ApiClient from "../ApiClient";
import MembershipResponse from '../model/MembershipResponse';

/**
* Membership service.
* @module api/MembershipApi
* @version 1.0.0
*/
export default class MembershipApi {

    /**
    * Constructs a new MembershipApi. 
    * @alias module:api/MembershipApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getMembership operation.
     * @callback module:api/MembershipApi~getMembershipCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MembershipResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get membership
     * Get membership
     * @param {String} xApiKey 
     * @param {module:api/MembershipApi~getMembershipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MembershipResponse}
     */
    getMembership(xApiKey, callback) {
      let postBody = null;
      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling getMembership");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'x-api-key': xApiKey
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MembershipResponse;
      return this.apiClient.callApi(
        '/membership', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
