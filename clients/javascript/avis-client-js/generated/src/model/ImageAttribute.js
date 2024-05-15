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
 * The ImageAttribute model module.
 * @module model/ImageAttribute
 * @version 0.8.0
 */
class ImageAttribute {
    /**
     * Constructs a new <code>ImageAttribute</code>.
     * @alias module:model/ImageAttribute
     * @param id {Number} 
     * @param team {Number} 
     * @param category {Number} 
     * @param createdAt {Date} 
     * @param updatedAt {Date} 
     */
    constructor(id, team, category, createdAt, updatedAt) { 
        
        ImageAttribute.initialize(this, id, team, category, createdAt, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, team, category, createdAt, updatedAt) { 
        obj['id'] = id;
        obj['team'] = team;
        obj['category'] = category;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
    }

    /**
     * Constructs a <code>ImageAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImageAttribute} obj Optional instance to populate.
     * @return {module:model/ImageAttribute} The populated <code>ImageAttribute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImageAttribute();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('team')) {
                obj['team'] = ApiClient.convertToType(data['team'], 'Number');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'Number');
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
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ImageAttribute</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ImageAttribute</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ImageAttribute.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['results'])) {
            throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}

ImageAttribute.RequiredProperties = ["id", "team", "category", "created_at", "updated_at"];

/**
 * @member {Number} id
 */
ImageAttribute.prototype['id'] = undefined;

/**
 * @member {Number} team
 */
ImageAttribute.prototype['team'] = undefined;

/**
 * @member {Number} category
 */
ImageAttribute.prototype['category'] = undefined;

/**
 * @member {Array.<Number>} results
 */
ImageAttribute.prototype['results'] = undefined;

/**
 * @member {Date} created_at
 */
ImageAttribute.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
ImageAttribute.prototype['updated_at'] = undefined;

/**
 * @member {String} value
 */
ImageAttribute.prototype['value'] = undefined;






export default ImageAttribute;

