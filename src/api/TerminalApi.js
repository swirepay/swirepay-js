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

import ApiClient from "../ApiClient";
import TerminalResponse from '../model/TerminalResponse';

/**
* Terminal service.
* @module api/TerminalApi
* @version 1.3.0
*/
export default class TerminalApi {

    /**
    * Constructs a new TerminalApi. 
    * @alias module:api/TerminalApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getTerminal operation.
     * @callback module:api/TerminalApi~getTerminalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TerminalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get terminal
     * Get terminal
     * @param {module:api/TerminalApi~getTerminalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TerminalResponse}
     */
    getTerminal(xApiKey, callback) {
      let postBody = null;

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
      let returnType = TerminalResponse;

      return this.apiClient.callApi(
        '/terminal', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
