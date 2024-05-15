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

import ApiClient from '../ApiClient';

/**
 * The PatchedMetadataRequest model module.
 * @module model/PatchedMetadataRequest
 * @version 0.8.0
 */
class PatchedMetadataRequest {
    /**
     * Constructs a new <code>PatchedMetadataRequest</code>.
     * @alias module:model/PatchedMetadataRequest
     */
    constructor() { 
        
        PatchedMetadataRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedMetadataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedMetadataRequest} obj Optional instance to populate.
     * @return {module:model/PatchedMetadataRequest} The populated <code>PatchedMetadataRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedMetadataRequest();

            if (data.hasOwnProperty('team')) {
                obj['team'] = ApiClient.convertToType(data['team'], 'Number');
            }
            if (data.hasOwnProperty('configurations')) {
                obj['configurations'] = ApiClient.convertToType(data['configurations'], ['Number']);
            }
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = ApiClient.convertToType(data['schema'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PatchedMetadataRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PatchedMetadataRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['configurations'])) {
            throw new Error("Expected the field `configurations` to be an array in the JSON data but got " + data['configurations']);
        }

        return true;
    }


}



/**
 * @member {Number} team
 */
PatchedMetadataRequest.prototype['team'] = undefined;

/**
 * @member {Array.<Number>} configurations
 */
PatchedMetadataRequest.prototype['configurations'] = undefined;

/**
 * @member {Number} schema
 */
PatchedMetadataRequest.prototype['schema'] = undefined;

/**
 * @member {Object} data
 */
PatchedMetadataRequest.prototype['data'] = undefined;






export default PatchedMetadataRequest;

