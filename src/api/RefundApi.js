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


import ApiClient from "../ApiClient";
import RefundListResponse from '../model/RefundListResponse';
import RefundResponse from '../model/RefundResponse';

/**
* Refund service.
* @module api/RefundApi
* @version 1.0.0
*/
export default class RefundApi {

    /**
    * Constructs a new RefundApi. 
    * @alias module:api/RefundApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAllRefunds operation.
     * @callback module:api/RefundApi~getAllRefundsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RefundListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Refunds
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.size 
     * @param {module:api/RefundApi~getAllRefundsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RefundListResponse}
     */
    getAllRefunds(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'size': opts['size']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RefundListResponse;
      return this.apiClient.callApi(
        '/refund', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRefundByGid operation.
     * @callback module:api/RefundApi~getRefundByGidCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RefundResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get refund by Gid
     * @param {String} gid 
     * @param {module:api/RefundApi~getRefundByGidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RefundResponse}
     */
    getRefundByGid(gid, callback) {
      let postBody = null;
      // verify the required parameter 'gid' is set
      if (gid === undefined || gid === null) {
        throw new Error("Missing the required parameter 'gid' when calling getRefundByGid");
      }

      let pathParams = {
        'gid': gid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RefundResponse;
      return this.apiClient.callApi(
        '/refund/{gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
