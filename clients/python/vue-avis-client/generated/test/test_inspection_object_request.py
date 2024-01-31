# coding: utf-8

"""
    avis

    VUE Autonomous Visual Inspection System (AVIS)

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest
import datetime

from vue_avis_client.models.inspection_object_request import InspectionObjectRequest

class TestInspectionObjectRequest(unittest.TestCase):
    """InspectionObjectRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> InspectionObjectRequest:
        """Test InspectionObjectRequest
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `InspectionObjectRequest`
        """
        model = InspectionObjectRequest()
        if include_optional:
            return InspectionObjectRequest(
                team = 56,
                type = 56,
                cases = [
                    56
                    ],
                identifier = '',
                display_name = '',
                description = ''
            )
        else:
            return InspectionObjectRequest(
                team = 56,
                identifier = '',
        )
        """

    def testInspectionObjectRequest(self):
        """Test InspectionObjectRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()