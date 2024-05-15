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

from avis_client.models.paginated_configuration_type_list import PaginatedConfigurationTypeList

class TestPaginatedConfigurationTypeList(unittest.TestCase):
    """PaginatedConfigurationTypeList unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PaginatedConfigurationTypeList:
        """Test PaginatedConfigurationTypeList
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PaginatedConfigurationTypeList`
        """
        model = PaginatedConfigurationTypeList()
        if include_optional:
            return PaginatedConfigurationTypeList(
                count = 123,
                next = 'http://api.example.org/accounts/?page=4',
                previous = 'http://api.example.org/accounts/?page=2',
                results = [
                    avis_client.models.configuration_type.ConfigurationType(
                        id = 56, 
                        team = 56, 
                        name = '', 
                        metadata_schema = 56, 
                        quality_criteria = 56, 
                        product_category = 56, 
                        image_attribute_categories = [
                            56
                            ], 
                        created_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                        updated_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                        description = '', 
                        is_default = True, )
                    ]
            )
        else:
            return PaginatedConfigurationTypeList(
                count = 123,
                results = [
                    avis_client.models.configuration_type.ConfigurationType(
                        id = 56, 
                        team = 56, 
                        name = '', 
                        metadata_schema = 56, 
                        quality_criteria = 56, 
                        product_category = 56, 
                        image_attribute_categories = [
                            56
                            ], 
                        created_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                        updated_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                        description = '', 
                        is_default = True, )
                    ],
        )
        """

    def testPaginatedConfigurationTypeList(self):
        """Test PaginatedConfigurationTypeList"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
