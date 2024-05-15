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
 * The QualityCriteriaRequest model module.
 * @module model/QualityCriteriaRequest
 * @version 0.8.0
 */
class QualityCriteriaRequest {
    /**
     * Constructs a new <code>QualityCriteriaRequest</code>.
     * @alias module:model/QualityCriteriaRequest
     * @param team {Number} 
     * @param goodQualityClasses {Array.<String>} 
     * @param uncertainQualityClasses {Array.<String>} 
     * @param badQualityClasses {Array.<String>} 
     */
    constructor(team, goodQualityClasses, uncertainQualityClasses, badQualityClasses) { 
        
        QualityCriteriaRequest.initialize(this, team, goodQualityClasses, uncertainQualityClasses, badQualityClasses);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, team, goodQualityClasses, uncertainQualityClasses, badQualityClasses) { 
        obj['team'] = team;
        obj['good_quality_classes'] = goodQualityClasses;
        obj['uncertain_quality_classes'] = uncertainQualityClasses;
        obj['bad_quality_classes'] = badQualityClasses;
    }

    /**
     * Constructs a <code>QualityCriteriaRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QualityCriteriaRequest} obj Optional instance to populate.
     * @return {module:model/QualityCriteriaRequest} The populated <code>QualityCriteriaRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QualityCriteriaRequest();

            if (data.hasOwnProperty('team')) {
                obj['team'] = ApiClient.convertToType(data['team'], 'Number');
            }
            if (data.hasOwnProperty('configurations')) {
                obj['configurations'] = ApiClient.convertToType(data['configurations'], ['Number']);
            }
            if (data.hasOwnProperty('good_quality_classes')) {
                obj['good_quality_classes'] = ApiClient.convertToType(data['good_quality_classes'], ['String']);
            }
            if (data.hasOwnProperty('uncertain_quality_classes')) {
                obj['uncertain_quality_classes'] = ApiClient.convertToType(data['uncertain_quality_classes'], ['String']);
            }
            if (data.hasOwnProperty('bad_quality_classes')) {
                obj['bad_quality_classes'] = ApiClient.convertToType(data['bad_quality_classes'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QualityCriteriaRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QualityCriteriaRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of QualityCriteriaRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['configurations'])) {
            throw new Error("Expected the field `configurations` to be an array in the JSON data but got " + data['configurations']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['good_quality_classes'])) {
            throw new Error("Expected the field `good_quality_classes` to be an array in the JSON data but got " + data['good_quality_classes']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['uncertain_quality_classes'])) {
            throw new Error("Expected the field `uncertain_quality_classes` to be an array in the JSON data but got " + data['uncertain_quality_classes']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bad_quality_classes'])) {
            throw new Error("Expected the field `bad_quality_classes` to be an array in the JSON data but got " + data['bad_quality_classes']);
        }

        return true;
    }


}

QualityCriteriaRequest.RequiredProperties = ["team", "good_quality_classes", "uncertain_quality_classes", "bad_quality_classes"];

/**
 * @member {Number} team
 */
QualityCriteriaRequest.prototype['team'] = undefined;

/**
 * @member {Array.<Number>} configurations
 */
QualityCriteriaRequest.prototype['configurations'] = undefined;

/**
 * @member {Array.<String>} good_quality_classes
 */
QualityCriteriaRequest.prototype['good_quality_classes'] = undefined;

/**
 * @member {Array.<String>} uncertain_quality_classes
 */
QualityCriteriaRequest.prototype['uncertain_quality_classes'] = undefined;

/**
 * @member {Array.<String>} bad_quality_classes
 */
QualityCriteriaRequest.prototype['bad_quality_classes'] = undefined;






export default QualityCriteriaRequest;

