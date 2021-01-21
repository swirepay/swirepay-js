/**
 * Swirepay Payment API
 * Swirepay REST APIs' are resource-oriented URLs that accept JSON-encoded request bodies, return JSON-encoded responses, and use standard HTTP response codes, authentication, and verbs. You can use the Swirepay API in test mode, which does not affect your live data or interact with the banking networks. The `API key` you use to authenticate the request determines whether the request is live mode or test mode.
 *
 * OpenAPI spec version: 1.4.0
 * Contact: apiteam@swirepay.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import CustomerRequest from '../model/CustomerRequest';
import CustomerResponse from '../model/CustomerResponse';

/**
* Customer service.
* @module api/CustomerApi
* @version 1.4.0
*/
export default class CustomerApi {

    /**
    * Constructs a new CustomerApi. 
    * @alias module:api/CustomerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addCustomer operation.
     * @callback module:api/CustomerApi~addCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a customer
     * Adds a customer to an account
     * @param {module:api/CustomerApi~addCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerResponse}
     */
    addCustomer(body, xApiKey, callback) {
      let postBody = body;

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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CustomerResponse;

      return this.apiClient.callApi(
        '/customer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getCustomer operation.
     * @callback module:api/CustomerApi~getCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get customers
     * Get customers
     * @param {module:api/CustomerApi~getCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerResponse}
     */
    getCustomer(xApiKey, callback) {
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
      let returnType = CustomerResponse;

      return this.apiClient.callApi(
        '/customer', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
