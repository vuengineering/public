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

from avis_client.models.result_request import ResultRequest

class TestResultRequest(unittest.TestCase):
    """ResultRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ResultRequest:
        """Test ResultRequest
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ResultRequest`
        """
        model = ResultRequest()
        if include_optional:
            return ResultRequest(
                team = 56,
                reported_by = 56,
                inferred_by = 56,
                image = 56,
                image_attributes = [
                    56
                    ],
                status = None,
                failure_reason = '',
                comment = ''
            )
        else:
            return ResultRequest(
                team = 56,
        )
        """

    def testResultRequest(self):
        """Test ResultRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
