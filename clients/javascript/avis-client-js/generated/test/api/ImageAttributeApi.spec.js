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

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD.
    define(["expect.js", process.cwd() + "/src/index"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require("expect.js"), require(process.cwd() + "/src/index"));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Avis);
  }
})(this, function (expect, Avis) {
  "use strict";

  var instance;

  beforeEach(function () {
    instance = new Avis.ImageAttributeApi();
  });

  var getProperty = function (object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === "function") return object[getter]();
    else return object[property];
  };

  var setProperty = function (object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === "function") object[setter](value);
    else object[property] = value;
  };

  describe("ImageAttributeApi", function () {
    describe("imageAttributeCreate", function () {
      it("should call imageAttributeCreate successfully", function (done) {
        //uncomment below and update the code to test imageAttributeCreate
        //instance.imageAttributeCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("imageAttributeDestroy", function () {
      it("should call imageAttributeDestroy successfully", function (done) {
        //uncomment below and update the code to test imageAttributeDestroy
        //instance.imageAttributeDestroy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("imageAttributeList", function () {
      it("should call imageAttributeList successfully", function (done) {
        //uncomment below and update the code to test imageAttributeList
        //instance.imageAttributeList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("imageAttributePartialUpdate", function () {
      it("should call imageAttributePartialUpdate successfully", function (done) {
        //uncomment below and update the code to test imageAttributePartialUpdate
        //instance.imageAttributePartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("imageAttributeRetrieve", function () {
      it("should call imageAttributeRetrieve successfully", function (done) {
        //uncomment below and update the code to test imageAttributeRetrieve
        //instance.imageAttributeRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("imageAttributeUpdate", function () {
      it("should call imageAttributeUpdate successfully", function (done) {
        //uncomment below and update the code to test imageAttributeUpdate
        //instance.imageAttributeUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});