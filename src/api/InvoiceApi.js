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
import InvoiceListResponse from '../model/InvoiceListResponse';
import InvoiceRequest from '../model/InvoiceRequest';
import InvoiceResponse from '../model/InvoiceResponse';

/**
* Invoice service.
* @module api/InvoiceApi
* @version 1.0.0
*/
export default class InvoiceApi {

    /**
    * Constructs a new InvoiceApi. 
    * @alias module:api/InvoiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addInvoice operation.
     * @callback module:api/InvoiceApi~addInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new invoice
     * @param {module:model/InvoiceRequest} invoiceRequest 
     * @param {module:api/InvoiceApi~addInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceResponse}
     */
    addInvoice(invoiceRequest, callback) {
      let postBody = invoiceRequest;
      // verify the required parameter 'invoiceRequest' is set
      if (invoiceRequest === undefined || invoiceRequest === null) {
        throw new Error("Missing the required parameter 'invoiceRequest' when calling addInvoice");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InvoiceResponse;
      return this.apiClient.callApi(
        '/invoice', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllInvoices operation.
     * @callback module:api/InvoiceApi~getAllInvoicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Invoices
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.size 
     * @param {module:api/InvoiceApi~getAllInvoicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceListResponse}
     */
    getAllInvoices(opts, callback) {
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
      let returnType = InvoiceListResponse;
      return this.apiClient.callApi(
        '/invoice', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvoiceByGid operation.
     * @callback module:api/InvoiceApi~getInvoiceByGidCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get invoice by Gid
     * @param {String} gid 
     * @param {module:api/InvoiceApi~getInvoiceByGidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceResponse}
     */
    getInvoiceByGid(gid, callback) {
      let postBody = null;
      // verify the required parameter 'gid' is set
      if (gid === undefined || gid === null) {
        throw new Error("Missing the required parameter 'gid' when calling getInvoiceByGid");
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
      let returnType = InvoiceResponse;
      return this.apiClient.callApi(
        '/invoice/{gid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the payInvoice operation.
     * @callback module:api/InvoiceApi~payInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * pay for invoice
     * @param {String} gid 
     * @param {Object} opts Optional parameters
     * @param {module:model/InvoiceRequest} opts.invoiceRequest 
     * @param {module:api/InvoiceApi~payInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceResponse}
     */
    payInvoice(gid, opts, callback) {
      opts = opts || {};
      let postBody = opts['invoiceRequest'];
      // verify the required parameter 'gid' is set
      if (gid === undefined || gid === null) {
        throw new Error("Missing the required parameter 'gid' when calling payInvoice");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InvoiceResponse;
      return this.apiClient.callApi(
        '/invoice/{gid}/pay', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInvoiceActive operation.
     * @callback module:api/InvoiceApi~updateInvoiceActiveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update invoice to active
     * @param {String} gid 
     * @param {Object} opts Optional parameters
     * @param {module:model/InvoiceRequest} opts.invoiceRequest 
     * @param {module:api/InvoiceApi~updateInvoiceActiveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceResponse}
     */
    updateInvoiceActive(gid, opts, callback) {
      opts = opts || {};
      let postBody = opts['invoiceRequest'];
      // verify the required parameter 'gid' is set
      if (gid === undefined || gid === null) {
        throw new Error("Missing the required parameter 'gid' when calling updateInvoiceActive");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InvoiceResponse;
      return this.apiClient.callApi(
        '/invoice/{gid}/active', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInvoiceDraft operation.
     * @callback module:api/InvoiceApi~updateInvoiceDraftCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update invoice to draft
     * @param {String} gid 
     * @param {Object} opts Optional parameters
     * @param {module:model/InvoiceRequest} opts.invoiceRequest 
     * @param {module:api/InvoiceApi~updateInvoiceDraftCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceResponse}
     */
    updateInvoiceDraft(gid, opts, callback) {
      opts = opts || {};
      let postBody = opts['invoiceRequest'];
      // verify the required parameter 'gid' is set
      if (gid === undefined || gid === null) {
        throw new Error("Missing the required parameter 'gid' when calling updateInvoiceDraft");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InvoiceResponse;
      return this.apiClient.callApi(
        '/invoice/{gid}/draft', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
