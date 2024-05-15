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

from avis_client.models.custom_user_request import CustomUserRequest

class TestCustomUserRequest(unittest.TestCase):
    """CustomUserRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> CustomUserRequest:
        """Test CustomUserRequest
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `CustomUserRequest`
        """
        model = CustomUserRequest()
        if include_optional:
            return CustomUserRequest(
                first_name = '',
                last_name = '',
                email = ''
            )
        else:
            return CustomUserRequest(
        )
        """

    def testCustomUserRequest(self):
        """Test CustomUserRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
