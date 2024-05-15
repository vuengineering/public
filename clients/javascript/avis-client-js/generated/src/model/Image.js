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
import FormatEnum from './FormatEnum';
import ValidationStatusEnum from './ValidationStatusEnum';

/**
 * The Image model module.
 * @module model/Image
 * @version 0.8.0
 */
class Image {
    /**
     * Constructs a new <code>Image</code>.
     * @alias module:model/Image
     * @param id {Number} 
     * @param team {Number} 
     * @param createdAt {Date} 
     * @param updatedAt {Date} 
     * @param captureDatetime {Date} 
     * @param file {String} 
     */
    constructor(id, team, createdAt, updatedAt, captureDatetime, file) { 
        
        Image.initialize(this, id, team, createdAt, updatedAt, captureDatetime, file);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, team, createdAt, updatedAt, captureDatetime, file) { 
        obj['id'] = id;
        obj['team'] = team;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
        obj['capture_datetime'] = captureDatetime;
        obj['file'] = file;
    }

    /**
     * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Image} obj Optional instance to populate.
     * @return {module:model/Image} The populated <code>Image</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Image();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('team')) {
                obj['team'] = ApiClient.convertToType(data['team'], 'Number');
            }
            if (data.hasOwnProperty('inspection')) {
                obj['inspection'] = ApiClient.convertToType(data['inspection'], 'Number');
            }
            if (data.hasOwnProperty('uploaded_by')) {
                obj['uploaded_by'] = ApiClient.convertToType(data['uploaded_by'], 'Number');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], ['Number']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = FormatEnum.constructFromObject(data['format']);
            }
            if (data.hasOwnProperty('capture_datetime')) {
                obj['capture_datetime'] = ApiClient.convertToType(data['capture_datetime'], 'Date');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], 'String');
            }
            if (data.hasOwnProperty('part_id')) {
                obj['part_id'] = ApiClient.convertToType(data['part_id'], 'String');
            }
            if (data.hasOwnProperty('validation_status')) {
                obj['validation_status'] = ValidationStatusEnum.constructFromObject(data['validation_status']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Image</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Image</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Image.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['results'])) {
            throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
        }
        // ensure the json data is a string
        if (data['file'] && !(typeof data['file'] === 'string' || data['file'] instanceof String)) {
            throw new Error("Expected the field `file` to be a primitive type in the JSON string but got " + data['file']);
        }
        // ensure the json data is a string
        if (data['part_id'] && !(typeof data['part_id'] === 'string' || data['part_id'] instanceof String)) {
            throw new Error("Expected the field `part_id` to be a primitive type in the JSON string but got " + data['part_id']);
        }

        return true;
    }


}

Image.RequiredProperties = ["id", "team", "created_at", "updated_at", "capture_datetime", "file"];

/**
 * @member {Number} id
 */
Image.prototype['id'] = undefined;

/**
 * @member {Number} team
 */
Image.prototype['team'] = undefined;

/**
 * @member {Number} inspection
 */
Image.prototype['inspection'] = undefined;

/**
 * @member {Number} uploaded_by
 */
Image.prototype['uploaded_by'] = undefined;

/**
 * @member {Array.<Number>} results
 */
Image.prototype['results'] = undefined;

/**
 * @member {Date} created_at
 */
Image.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Image.prototype['updated_at'] = undefined;

/**
 * @member {module:model/FormatEnum} format
 */
Image.prototype['format'] = undefined;

/**
 * @member {Date} capture_datetime
 */
Image.prototype['capture_datetime'] = undefined;

/**
 * @member {String} file
 */
Image.prototype['file'] = undefined;

/**
 * @member {String} part_id
 */
Image.prototype['part_id'] = undefined;

/**
 * @member {module:model/ValidationStatusEnum} validation_status
 */
Image.prototype['validation_status'] = undefined;






export default Image;

