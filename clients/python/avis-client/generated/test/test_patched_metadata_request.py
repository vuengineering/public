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

from avis_client.models.patched_metadata_request import PatchedMetadataRequest

class TestPatchedMetadataRequest(unittest.TestCase):
    """PatchedMetadataRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PatchedMetadataRequest:
        """Test PatchedMetadataRequest
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PatchedMetadataRequest`
        """
        model = PatchedMetadataRequest()
        if include_optional:
            return PatchedMetadataRequest(
                team = 56,
                configurations = [
                    56
                    ],
                var_schema = 56,
                data = None
            )
        else:
            return PatchedMetadataRequest(
        )
        """

    def testPatchedMetadataRequest(self):
        """Test PatchedMetadataRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
