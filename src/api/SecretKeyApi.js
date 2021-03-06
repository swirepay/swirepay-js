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
import SecretKeyListResponse from '../model/SecretKeyListResponse';
import SecretKeyRequest from '../model/SecretKeyRequest';
import SecretKeyResponse from '../model/SecretKeyResponse';

/**
* SecretKey service.
* @module api/SecretKeyApi
* @version 1.0.0
*/
export default class SecretKeyApi {

    /**
    * Constructs a new SecretKeyApi. 
    * @alias module:api/SecretKeyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAllSecretKey operation.
     * @callback module:api/SecretKeyApi~getAllSecretKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecretKeyListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Secret Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.size 
     * @param {module:api/SecretKeyApi~getAllSecretKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecretKeyListResponse}
     */
    getAllSecretKey(opts, callback) {
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
      let returnType = SecretKeyListResponse;
      return this.apiClient.callApi(
        '/secret-key', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the rollSecretKeyByGid operation.
     * @callback module:api/SecretKeyApi~rollSecretKeyByGidCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecretKeyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Roll Secret Key by Gid
     * @param {String} gid 
     * @param {Object} opts Optional parameters
     * @param {module:model/SecretKeyRequest} opts.secretKeyRequest 
     * @param {module:api/SecretKeyApi~rollSecretKeyByGidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecretKeyResponse}
     */
    rollSecretKeyByGid(gid, opts, callback) {
      opts = opts || {};
      let postBody = opts['secretKeyRequest'];
      // verify the required parameter 'gid' is set
      if (gid === undefined || gid === null) {
        throw new Error("Missing the required parameter 'gid' when calling rollSecretKeyByGid");
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

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SecretKeyResponse;
      return this.apiClient.callApi(
        '/secret-key/{gid}/roll', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
