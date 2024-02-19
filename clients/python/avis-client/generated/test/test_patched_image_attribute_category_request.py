# coding: utf-8

"""
    avis

    VUE Autonomous Visual Inspection System (AVIS)

    The version of the OpenAPI document: 0.4.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest
import datetime

from avis_client.models.patched_image_attribute_category_request import PatchedImageAttributeCategoryRequest

class TestPatchedImageAttributeCategoryRequest(unittest.TestCase):
    """PatchedImageAttributeCategoryRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PatchedImageAttributeCategoryRequest:
        """Test PatchedImageAttributeCategoryRequest
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PatchedImageAttributeCategoryRequest`
        """
        model = PatchedImageAttributeCategoryRequest()
        if include_optional:
            return PatchedImageAttributeCategoryRequest(
                team = 56,
                name = '',
                description = '',
                ml_model = 56
            )
        else:
            return PatchedImageAttributeCategoryRequest(
        )
        """

    def testPatchedImageAttributeCategoryRequest(self):
        """Test PatchedImageAttributeCategoryRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()