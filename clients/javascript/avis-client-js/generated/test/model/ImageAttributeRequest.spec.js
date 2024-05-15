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
    instance = new Avis.ImageAttributeRequest();
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

  describe("ImageAttributeRequest", function () {
    it("should create an instance of ImageAttributeRequest", function () {
      // uncomment below and update the code to test ImageAttributeRequest
      //var instance = new Avis.ImageAttributeRequest();
      //expect(instance).to.be.a(Avis.ImageAttributeRequest);
    });

    it('should have the property team (base name: "team")', function () {
      // uncomment below and update the code to test the property team
      //var instance = new Avis.ImageAttributeRequest();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function () {
      // uncomment below and update the code to test the property category
      //var instance = new Avis.ImageAttributeRequest();
      //expect(instance).to.be();
    });

    it('should have the property results (base name: "results")', function () {
      // uncomment below and update the code to test the property results
      //var instance = new Avis.ImageAttributeRequest();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function () {
      // uncomment below and update the code to test the property value
      //var instance = new Avis.ImageAttributeRequest();
      //expect(instance).to.be();
    });
  });
});
