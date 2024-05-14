# coding: utf-8

"""
    avis

    VUE Autonomous Visual Inspection System (AVIS)

    The version of the OpenAPI document: 0.8.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from avis_client.models.configuration_type_request import ConfigurationTypeRequest


class TestConfigurationTypeRequest(unittest.TestCase):
    """ConfigurationTypeRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ConfigurationTypeRequest:
        """Test ConfigurationTypeRequest
        include_option is a boolean, when False only required
        params are included, when True both required and
        optional params are included"""
        # uncomment below to create an instance of `ConfigurationTypeRequest`
        """
        model = ConfigurationTypeRequest()
        if include_optional:
            return ConfigurationTypeRequest(
                team = 56,
                name = '0',
                metadata_schema = 56,
                quality_criteria = 56,
                product_category = 56,
                image_attribute_categories = [
                    56
                    ],
                description = '',
                is_default = True
            )
        else:
            return ConfigurationTypeRequest(
                team = 56,
                name = '0',
        )
        """

    def testConfigurationTypeRequest(self):
        """Test ConfigurationTypeRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == "__main__":
    unittest.main()
