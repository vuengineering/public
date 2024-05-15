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
import ImageAttributeCategory from '../model/ImageAttributeCategory';
import ImageAttributeCategoryRequest from '../model/ImageAttributeCategoryRequest';
import PaginatedImageAttributeCategoryList from '../model/PaginatedImageAttributeCategoryList';
import PatchedImageAttributeCategoryRequest from '../model/PatchedImageAttributeCategoryRequest';

/**
* ImageAttributeCategory service.
* @module api/ImageAttributeCategoryApi
* @version 0.8.0
*/
export default class ImageAttributeCategoryApi {

    /**
    * Constructs a new ImageAttributeCategoryApi. 
    * @alias module:api/ImageAttributeCategoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the imageAttributeCategoryCreate operation.
     * @callback module:api/ImageAttributeCategoryApi~imageAttributeCategoryCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageAttributeCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A base viewset that allows reading, creating and updating objects. The following functionalities are added by the mixins:  * CreateModelMixin: allows creating objects * UpdateModelMixin: allows updating objects * DestroyModelMixin: allows deleting objects * OptimizedReadOnlyTracedViewSet: allows reading objects and adds tracing and optimized queryset fetching (with the use of the `fields` query parameter)
     * @param {module:model/ImageAttributeCategoryRequest} imageAttributeCategoryRequest 
     * @param {module:api/ImageAttributeCategoryApi~imageAttributeCategoryCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageAttributeCategory}
     */
    imageAttributeCategoryCreate(imageAttributeCategoryRequest, callback) {
      let postBody = imageAttributeCategoryRequest;
      // verify the required parameter 'imageAttributeCategoryRequest' is set
      if (imageAttributeCategoryRequest === undefined || imageAttributeCategoryRequest === null) {
        throw new Error("Missing the required parameter 'imageAttributeCategoryRequest' when calling imageAttributeCategoryCreate");
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
      let returnType = ImageAttributeCategory;
      return this.apiClient.callApi(
        '/api/image-attribute-category/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the imageAttributeCategoryDestroy operation.
     * @callback module:api/ImageAttributeCategoryApi~imageAttributeCategoryDestroyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A base viewset that allows reading, creating and updating objects. The following functionalities are added by the mixins:  * CreateModelMixin: allows creating objects * UpdateModelMixin: allows updating objects * DestroyModelMixin: allows deleting objects * OptimizedReadOnlyTracedViewSet: allows reading objects and adds tracing and optimized queryset fetching (with the use of the `fields` query parameter)
     * @param {Number} id A unique integer value identifying this image attribute category.
     * @param {module:api/ImageAttributeCategoryApi~imageAttributeCategoryDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    imageAttributeCategoryDestroy(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling imageAttributeCategoryDestroy");
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
        '/api/image-attribute-category/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the imageAttributeCategoryList operation.
     * @callback module:api/ImageAttributeCategoryApi~imageAttributeCategoryListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedImageAttributeCategoryList} data The data returned by the service call.
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
     * @param {module:api/ImageAttributeCategoryApi~imageAttributeCategoryListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedImageAttributeCategoryList}
     */
    imageAttributeCategoryList(opts, callback) {
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
      let returnType = PaginatedImageAttributeCategoryList;
      return this.apiClient.callApi(
        '/api/image-attribute-category/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the imageAttributeCategoryPartialUpdate operation.
     * @callback module:api/ImageAttributeCategoryApi~imageAttributeCategoryPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageAttributeCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A base viewset that allows reading, creating and updating objects. The following functionalities are added by the mixins:  * CreateModelMixin: allows creating objects * UpdateModelMixin: allows updating objects * DestroyModelMixin: allows deleting objects * OptimizedReadOnlyTracedViewSet: allows reading objects and adds tracing and optimized queryset fetching (with the use of the `fields` query parameter)
     * @param {Number} id A unique integer value identifying this image attribute category.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedImageAttributeCategoryRequest} [patchedImageAttributeCategoryRequest] 
     * @param {module:api/ImageAttributeCategoryApi~imageAttributeCategoryPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageAttributeCategory}
     */
    imageAttributeCategoryPartialUpdate(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedImageAttributeCategoryRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling imageAttributeCategoryPartialUpdate");
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
      let returnType = ImageAttributeCategory;
      return this.apiClient.callApi(
        '/api/image-attribute-category/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the imageAttributeCategoryRetrieve operation.
     * @callback module:api/ImageAttributeCategoryApi~imageAttributeCategoryRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageAttributeCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A base viewset that allows reading, creating and updating objects. The following functionalities are added by the mixins:  * CreateModelMixin: allows creating objects * UpdateModelMixin: allows updating objects * DestroyModelMixin: allows deleting objects * OptimizedReadOnlyTracedViewSet: allows reading objects and adds tracing and optimized queryset fetching (with the use of the `fields` query parameter)
     * @param {Number} id A unique integer value identifying this image attribute category.
     * @param {Object} opts Optional parameters
     * @param {String} [fields] 
     * @param {module:api/ImageAttributeCategoryApi~imageAttributeCategoryRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageAttributeCategory}
     */
    imageAttributeCategoryRetrieve(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling imageAttributeCategoryRetrieve");
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
      let returnType = ImageAttributeCategory;
      return this.apiClient.callApi(
        '/api/image-attribute-category/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the imageAttributeCategoryUpdate operation.
     * @callback module:api/ImageAttributeCategoryApi~imageAttributeCategoryUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageAttributeCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A base viewset that allows reading, creating and updating objects. The following functionalities are added by the mixins:  * CreateModelMixin: allows creating objects * UpdateModelMixin: allows updating objects * DestroyModelMixin: allows deleting objects * OptimizedReadOnlyTracedViewSet: allows reading objects and adds tracing and optimized queryset fetching (with the use of the `fields` query parameter)
     * @param {Number} id A unique integer value identifying this image attribute category.
     * @param {module:model/ImageAttributeCategoryRequest} imageAttributeCategoryRequest 
     * @param {module:api/ImageAttributeCategoryApi~imageAttributeCategoryUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageAttributeCategory}
     */
    imageAttributeCategoryUpdate(id, imageAttributeCategoryRequest, callback) {
      let postBody = imageAttributeCategoryRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling imageAttributeCategoryUpdate");
      }
      // verify the required parameter 'imageAttributeCategoryRequest' is set
      if (imageAttributeCategoryRequest === undefined || imageAttributeCategoryRequest === null) {
        throw new Error("Missing the required parameter 'imageAttributeCategoryRequest' when calling imageAttributeCategoryUpdate");
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
      let returnType = ImageAttributeCategory;
      return this.apiClient.callApi(
        '/api/image-attribute-category/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
