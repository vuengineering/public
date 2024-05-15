# coding: utf-8

"""
    avis

    VUE Autonomous Visual Inspection System (AVIS)

    The version of the OpenAPI document: 0.8.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest
import datetime

from avis_client.models.patched_product_request import PatchedProductRequest

class TestPatchedProductRequest(unittest.TestCase):
    """PatchedProductRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PatchedProductRequest:
        """Test PatchedProductRequest
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PatchedProductRequest`
        """
        model = PatchedProductRequest()
        if include_optional:
            return PatchedProductRequest(
                team = 56,
                category = 56,
                inspections = [
                    56
                    ],
                identifier = '',
                display_name = '',
                description = ''
            )
        else:
            return PatchedProductRequest(
        )
        """

    def testPatchedProductRequest(self):
        """Test PatchedProductRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
