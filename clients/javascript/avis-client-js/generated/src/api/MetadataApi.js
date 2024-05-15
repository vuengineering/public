/**
 * avis
 * VUE Autonomous Visual Inspection System (AVIS)
 *
 * The version of the OpenAPI document: 0.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Metadata from '../model/Metadata';
import MetadataRequest from '../model/MetadataRequest';
import PaginatedMetadataList from '../model/PaginatedMetadataList';
import PatchedMetadataRequest from '../model/PatchedMetadataRequest';

/**
* Metadata service.
* @module api/MetadataApi
* @version 0.8.0
*/
export default class MetadataApi {

    /**
    * Constructs a new MetadataApi. 
    * @alias module:api/MetadataApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the metadataCreate operation.
     * @callback module:api/MetadataApi~metadataCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Metadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A base viewset that allows reading, creating and updating objects. The following functionalities are added by the mixins:  * CreateModelMixin: allows creating objects * UpdateModelMixin: allows updating objects * DestroyModelMixin: allows deleting objects * OptimizedReadOnlyTracedViewSet: allows reading objects and adds tracing and optimized queryset fetching (with the use of the `fields` query parameter)
     * @param {module:model/MetadataRequest} metadataRequest 
     * @param {module:api/MetadataApi~metadataCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Metadata}
     */
    metadataCreate(metadataRequest, callback) {
      let postBody = metadataRequest;
      // verify the required parameter 'metadataRequest' is set
      if (metadataRequest === undefined || metadataRequest === null) {
        throw new Error("Missing the required parameter 'metadataRequest' when calling metadataCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'ApiKeyAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Metadata;
      return this.apiClient.callApi(
        '/api/metadata/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the metadataDestroy operation.
     * @callback module:api/MetadataApi~metadataDestroyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A base viewset that allows reading, creating and updating objects. The following functionalities are added by the mixins:  * CreateModelMixin: allows creating objects * UpdateModelMixin: allows updating objects * DestroyModelMixin: allows deleting objects * OptimizedReadOnlyTracedViewSet: allows reading objects and adds tracing and optimized queryset fetching (with the use of the `fields` query parameter)
     * @param {Number} id A unique integer value identifying this metadata.
     * @param {module:api/MetadataApi~metadataDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    metadataDestroy(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling metadataDestroy");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/metadata/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the metadataList operation.
     * @callback module:api/MetadataApi~metadataListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedMetadataList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A base viewset that allows reading, creating and updating objects. The following functionalities are added by the mixins:  * CreateModelMixin: allows creating objects * UpdateModelMixin: allows updating objects * DestroyModelMixin: allows deleting objects * OptimizedReadOnlyTracedViewSet: allows reading objects and adds tracing and optimized queryset fetching (with the use of the `fields` query parameter)
     * @param {Object} opts Optional parameters
     * @param {String} [fields] 
     * @param {Array.<Number>} [id] Multiple values may be separated by commas.
     * @param {String} [ordering] Which field to use when ordering the results.
     * @param {Number} [page] A page number within the paginated result set.
     * @param {Number} [pageSize] Number of results to return per page.
     * @param {module:api/MetadataApi~metadataListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedMetadataList}
     */
    metadataList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'fields': opts['fields'],
        'id': this.apiClient.buildCollectionParam(opts['id'], 'csv'),
        'ordering': opts['ordering'],
        'page': opts['page'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedMetadataList;
      return this.apiClient.callApi(
        '/api/metadata/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the metadataPartialUpdate operation.
     * @callback module:api/MetadataApi~metadataPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Metadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A base viewset that allows reading, creating and updating objects. The following functionalities are added by the mixins:  * CreateModelMixin: allows creating objects * UpdateModelMixin: allows updating objects * DestroyModelMixin: allows deleting objects * OptimizedReadOnlyTracedViewSet: allows reading objects and adds tracing and optimized queryset fetching (with the use of the `fields` query parameter)
     * @param {Number} id A unique integer value identifying this metadata.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedMetadataRequest} [patchedMetadataRequest] 
     * @param {module:api/MetadataApi~metadataPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Metadata}
     */
    metadataPartialUpdate(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedMetadataRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling metadataPartialUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'ApiKeyAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Metadata;
      return this.apiClient.callApi(
        '/api/metadata/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the metadataRetrieve operation.
     * @callback module:api/MetadataApi~metadataRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Metadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A base viewset that allows reading, creating and updating objects. The following functionalities are added by the mixins:  * CreateModelMixin: allows creating objects * UpdateModelMixin: allows updating objects * DestroyModelMixin: allows deleting objects * OptimizedReadOnlyTracedViewSet: allows reading objects and adds tracing and optimized queryset fetching (with the use of the `fields` query parameter)
     * @param {Number} id A unique integer value identifying this metadata.
     * @param {Object} opts Optional parameters
     * @param {String} [fields] 
     * @param {module:api/MetadataApi~metadataRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Metadata}
     */
    metadataRetrieve(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling metadataRetrieve");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Metadata;
      return this.apiClient.callApi(
        '/api/metadata/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the metadataUpdate operation.
     * @callback module:api/MetadataApi~metadataUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Metadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A base viewset that allows reading, creating and updating objects. The following functionalities are added by the mixins:  * CreateModelMixin: allows creating objects * UpdateModelMixin: allows updating objects * DestroyModelMixin: allows deleting objects * OptimizedReadOnlyTracedViewSet: allows reading objects and adds tracing and optimized queryset fetching (with the use of the `fields` query parameter)
     * @param {Number} id A unique integer value identifying this metadata.
     * @param {module:model/MetadataRequest} metadataRequest 
     * @param {module:api/MetadataApi~metadataUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Metadata}
     */
    metadataUpdate(id, metadataRequest, callback) {
      let postBody = metadataRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling metadataUpdate");
      }
      // verify the required parameter 'metadataRequest' is set
      if (metadataRequest === undefined || metadataRequest === null) {
        throw new Error("Missing the required parameter 'metadataRequest' when calling metadataUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'ApiKeyAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Metadata;
      return this.apiClient.callApi(
        '/api/metadata/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
