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

from avis_client.models.azure_ml_inference_request import AzureMLInferenceRequest

class TestAzureMLInferenceRequest(unittest.TestCase):
    """AzureMLInferenceRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> AzureMLInferenceRequest:
        """Test AzureMLInferenceRequest
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `AzureMLInferenceRequest`
        """
        model = AzureMLInferenceRequest()
        if include_optional:
            return AzureMLInferenceRequest(
                input_data = None,
                params = None
            )
        else:
            return AzureMLInferenceRequest(
                input_data = None,
        )
        """

    def testAzureMLInferenceRequest(self):
        """Test AzureMLInferenceRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
