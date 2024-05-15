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

from avis_client.models.quality_criteria_request import QualityCriteriaRequest

class TestQualityCriteriaRequest(unittest.TestCase):
    """QualityCriteriaRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> QualityCriteriaRequest:
        """Test QualityCriteriaRequest
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `QualityCriteriaRequest`
        """
        model = QualityCriteriaRequest()
        if include_optional:
            return QualityCriteriaRequest(
                team = 56,
                configurations = [
                    56
                    ],
                good_quality_classes = [
                    '0'
                    ],
                uncertain_quality_classes = [
                    '0'
                    ],
                bad_quality_classes = [
                    '0'
                    ]
            )
        else:
            return QualityCriteriaRequest(
                team = 56,
                good_quality_classes = [
                    '0'
                    ],
                uncertain_quality_classes = [
                    '0'
                    ],
                bad_quality_classes = [
                    '0'
                    ],
        )
        """

    def testQualityCriteriaRequest(self):
        """Test QualityCriteriaRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
