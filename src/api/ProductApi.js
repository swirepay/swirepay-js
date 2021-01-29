/**
 * Swirepay Payment API
 * Swirepay REST APIs' are resource-oriented URLs that accept JSON-encoded request bodies, return JSON-encoded responses, and use standard HTTP response codes, authentication, and verbs. You can use the Swirepay API in test mode, which does not affect your live data or interact with the banking networks. The `API key` you use to authenticate the request determines whether the request is live mode or test mode.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swirepay.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import ProductResponse from '../model/ProductResponse';

/**
* Product service.
* @module api/ProductApi
* @version 1.0.0
*/
export default class ProductApi {

    /**
    * Constructs a new ProductApi. 
    * @alias module:api/ProductApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getProduct operation.
     * @callback module:api/ProductApi~getProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get product
     * Get product
     * @param {module:api/ProductApi~getProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductResponse}
     */
    getProduct(xApiKey, callback) {
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
      let returnType = ProductResponse;

      return this.apiClient.callApi(
        '/product', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
