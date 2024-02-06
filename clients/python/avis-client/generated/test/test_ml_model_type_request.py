# coding: utf-8

"""
    avis

    VUE Autonomous Visual Inspection System (AVIS)

    The version of the OpenAPI document: 0.1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from avis_client.models.ml_model_type_request import MLModelTypeRequest


class TestMLModelTypeRequest(unittest.TestCase):
    """MLModelTypeRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> MLModelTypeRequest:
        """Test MLModelTypeRequest
        include_option is a boolean, when False only required
        params are included, when True both required and
        optional params are included"""
        # uncomment below to create an instance of `MLModelTypeRequest`
        """
        model = MLModelTypeRequest()
        if include_optional:
            return MLModelTypeRequest(
                slug = 'z',
                name = '',
                description = ''
            )
        else:
            return MLModelTypeRequest(
        )
        """

    def testMLModelTypeRequest(self):
        """Test MLModelTypeRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == "__main__":
    unittest.main()
