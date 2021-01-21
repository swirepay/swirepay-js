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
import PlanResponse from '../model/PlanResponse';

/**
* Plan service.
* @module api/PlanApi
* @version 1.3.0
*/
export default class PlanApi {

    /**
    * Constructs a new PlanApi. 
    * @alias module:api/PlanApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getPlan operation.
     * @callback module:api/PlanApi~getPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PlanResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get plan
     * Get plan
     * @param {module:api/PlanApi~getPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PlanResponse}
     */
    getPlan(xApiKey, callback) {
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
      let returnType = PlanResponse;

      return this.apiClient.callApi(
        '/plan', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
