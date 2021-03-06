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
import CustomerListResponse from '../model/CustomerListResponse';
import CustomerRequest from '../model/CustomerRequest';
import CustomerResponse from '../model/CustomerResponse';

/**
* Customer service.
* @module api/CustomerApi
* @version 1.0.0
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
     * Add a new customer
     * @param {module:model/CustomerRequest} customerRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.destinationAccount If processing on behalf of another Swirepay affiliate account
     * @param {module:api/CustomerApi~addCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerResponse}
     */
    addCustomer(customerRequest, opts, callback) {
      opts = opts || {};
      let postBody = customerRequest;
      // verify the required parameter 'customerRequest' is set
      if (customerRequest === undefined || customerRequest === null) {
        throw new Error("Missing the required parameter 'customerRequest' when calling addCustomer");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'destination_account': opts['destinationAccount']
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
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomerByGid operation.
     * @callback module:api/CustomerApi~deleteCustomerByGidCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete customer by Gid
     * @param {String} gid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.destinationAccount If processing on behalf of another Swirepay affiliate account
     * @param {module:api/CustomerApi~deleteCustomerByGidCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCustomerByGid(gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'gid' is set
      if (gid === undefined || gid === null) {
        throw new Error("Missing the required parameter 'gid' when calling deleteCustomerByGid");
      }

      let pathParams = {
        'gid': gid
      };
      let queryParams = {
      };
      let headerParams = {
        'destination_account': opts['destinationAccount']
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/customer/{gid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllCustomers operation.
     * @callback module:api/CustomerApi~getAllCustomersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all customers
     * Get customers
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.size 
     * @param {String} opts.destinationAccount If processing on behalf of another Swirepay affiliate account
     * @param {module:api/CustomerApi~getAllCustomersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerListResponse}
     */
    getAllCustomers(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'size': opts['size']
      };
      let headerParams = {
        'destination_account': opts['destinationAccount']
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CustomerListResponse;
      return this.apiClient.callApi(
        '/customer', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerByGid operation.
     * @callback module:api/CustomerApi~getCustomerByGidCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Customer by Gid
     * @param {String} gid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.destinationAccount If processing on behalf of another Swirepay affiliate account
     * @param {module:api/CustomerApi~getCustomerByGidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerResponse}
     */
    getCustomerByGid(gid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'gid' is set
      if (gid === undefined || gid === null) {
        throw new Error("Missing the required parameter 'gid' when calling getCustomerByGid");
      }

      let pathParams = {
        'gid': gid
      };
      let queryParams = {
      };
      let headerParams = {
        'destination_account': opts['destinationAccount']
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CustomerResponse;
      return this.apiClient.callApi(
        '/customer/{gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCustomer operation.
     * @callback module:api/CustomerApi~updateCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Customer by Gid
     * @param {String} gid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.destinationAccount If processing on behalf of another Swirepay affiliate account
     * @param {module:model/CustomerRequest} opts.customerRequest 
     * @param {module:api/CustomerApi~updateCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerResponse}
     */
    updateCustomer(gid, opts, callback) {
      opts = opts || {};
      let postBody = opts['customerRequest'];
      // verify the required parameter 'gid' is set
      if (gid === undefined || gid === null) {
        throw new Error("Missing the required parameter 'gid' when calling updateCustomer");
      }

      let pathParams = {
        'gid': gid
      };
      let queryParams = {
      };
      let headerParams = {
        'destination_account': opts['destinationAccount']
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CustomerResponse;
      return this.apiClient.callApi(
        '/customer/{gid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
