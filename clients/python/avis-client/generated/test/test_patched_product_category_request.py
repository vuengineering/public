# coding: utf-8

"""
    avis

    VUE Autonomous Visual Inspection System (AVIS)

    The version of the OpenAPI document: 0.6.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest
import datetime

from avis_client.models.patched_product_category_request import PatchedProductCategoryRequest

class TestPatchedProductCategoryRequest(unittest.TestCase):
    """PatchedProductCategoryRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PatchedProductCategoryRequest:
        """Test PatchedProductCategoryRequest
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PatchedProductCategoryRequest`
        """
        model = PatchedProductCategoryRequest()
        if include_optional:
            return PatchedProductCategoryRequest(
                team = 56,
                instances = [
                    56
                    ],
                name = '',
                display_name = '',
                description = ''
            )
        else:
            return PatchedProductCategoryRequest(
        )
        """

    def testPatchedProductCategoryRequest(self):
        """Test PatchedProductCategoryRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()