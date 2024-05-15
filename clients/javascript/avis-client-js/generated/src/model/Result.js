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
import PatchedResultRequestStatus from "./PatchedResultRequestStatus";

/**
 * The Result model module.
 * @module model/Result
 * @version 0.8.0
 */
class Result {
  /**
   * Constructs a new <code>Result</code>.
   * @alias module:model/Result
   * @param id {Number}
   * @param team {Number}
   * @param createdAt {Date}
   * @param updatedAt {Date}
   */
  constructor(id, team, createdAt, updatedAt) {
    Result.initialize(this, id, team, createdAt, updatedAt);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, id, team, createdAt, updatedAt) {
    obj["id"] = id;
    obj["team"] = team;
    obj["created_at"] = createdAt;
    obj["updated_at"] = updatedAt;
  }

  /**
   * Constructs a <code>Result</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Result} obj Optional instance to populate.
   * @return {module:model/Result} The populated <code>Result</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Result();

      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("team")) {
        obj["team"] = ApiClient.convertToType(data["team"], "Number");
      }
      if (data.hasOwnProperty("reported_by")) {
        obj["reported_by"] = ApiClient.convertToType(
          data["reported_by"],
          "Number",
        );
      }
      if (data.hasOwnProperty("inferred_by")) {
        obj["inferred_by"] = ApiClient.convertToType(
          data["inferred_by"],
          "Number",
        );
      }
      if (data.hasOwnProperty("image")) {
        obj["image"] = ApiClient.convertToType(data["image"], "Number");
      }
      if (data.hasOwnProperty("image_attributes")) {
        obj["image_attributes"] = ApiClient.convertToType(
          data["image_attributes"],
          ["Number"],
        );
      }
      if (data.hasOwnProperty("created_at")) {
        obj["created_at"] = ApiClient.convertToType(data["created_at"], "Date");
      }
      if (data.hasOwnProperty("updated_at")) {
        obj["updated_at"] = ApiClient.convertToType(data["updated_at"], "Date");
      }
      if (data.hasOwnProperty("status")) {
        obj["status"] = PatchedResultRequestStatus.constructFromObject(
          data["status"],
        );
      }
      if (data.hasOwnProperty("failure_reason")) {
        obj["failure_reason"] = ApiClient.convertToType(
          data["failure_reason"],
          "String",
        );
      }
      if (data.hasOwnProperty("comment")) {
        obj["comment"] = ApiClient.convertToType(data["comment"], "String");
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Result</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Result</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of Result.RequiredProperties) {
      if (!data[property]) {
        throw new Error(
          "The required field `" +
            property +
            "` is not found in the JSON data: " +
            JSON.stringify(data),
        );
      }
    }
    // ensure the json data is an array
    if (!Array.isArray(data["image_attributes"])) {
      throw new Error(
        "Expected the field `image_attributes` to be an array in the JSON data but got " +
          data["image_attributes"],
      );
    }
    // validate the optional field `status`
    if (data["status"]) {
      // data not null
      PatchedResultRequestStatus.validateJSON(data["status"]);
    }
    // ensure the json data is a string
    if (
      data["failure_reason"] &&
      !(
        typeof data["failure_reason"] === "string" ||
        data["failure_reason"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `failure_reason` to be a primitive type in the JSON string but got " +
          data["failure_reason"],
      );
    }
    // ensure the json data is a string
    if (
      data["comment"] &&
      !(
        typeof data["comment"] === "string" || data["comment"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `comment` to be a primitive type in the JSON string but got " +
          data["comment"],
      );
    }

    return true;
  }
}

Result.RequiredProperties = ["id", "team", "created_at", "updated_at"];

/**
 * @member {Number} id
 */
Result.prototype["id"] = undefined;

/**
 * @member {Number} team
 */
Result.prototype["team"] = undefined;

/**
 * @member {Number} reported_by
 */
Result.prototype["reported_by"] = undefined;

/**
 * @member {Number} inferred_by
 */
Result.prototype["inferred_by"] = undefined;

/**
 * @member {Number} image
 */
Result.prototype["image"] = undefined;

/**
 * @member {Array.<Number>} image_attributes
 */
Result.prototype["image_attributes"] = undefined;

/**
 * @member {Date} created_at
 */
Result.prototype["created_at"] = undefined;

/**
 * @member {Date} updated_at
 */
Result.prototype["updated_at"] = undefined;

/**
 * @member {module:model/PatchedResultRequestStatus} status
 */
Result.prototype["status"] = undefined;

/**
 * @member {String} failure_reason
 */
Result.prototype["failure_reason"] = undefined;

/**
 * @member {String} comment
 */
Result.prototype["comment"] = undefined;

export default Result;
