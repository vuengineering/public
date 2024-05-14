# coding: utf-8

"""
    avis

    VUE Autonomous Visual Inspection System (AVIS)

    The version of the OpenAPI document: 0.8.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from avis_client.models.paginated_image_attribute_category_list import (
    PaginatedImageAttributeCategoryList,
)


class TestPaginatedImageAttributeCategoryList(unittest.TestCase):
    """PaginatedImageAttributeCategoryList unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PaginatedImageAttributeCategoryList:
        """Test PaginatedImageAttributeCategoryList
        include_option is a boolean, when False only required
        params are included, when True both required and
        optional params are included"""
        # uncomment below to create an instance of `PaginatedImageAttributeCategoryList`
        """
        model = PaginatedImageAttributeCategoryList()
        if include_optional:
            return PaginatedImageAttributeCategoryList(
                count = 123,
                next = 'http://api.example.org/accounts/?page=4',
                previous = 'http://api.example.org/accounts/?page=2',
                results = [
                    avis_client.models.image_attribute_category.ImageAttributeCategory(
                        id = 56,
                        team = 56,
                        created_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                        updated_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                        name = '',
                        description = '',
                        ml_model = 56, )
                    ]
            )
        else:
            return PaginatedImageAttributeCategoryList(
                count = 123,
                results = [
                    avis_client.models.image_attribute_category.ImageAttributeCategory(
                        id = 56,
                        team = 56,
                        created_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                        updated_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                        name = '',
                        description = '',
                        ml_model = 56, )
                    ],
        )
        """

    def testPaginatedImageAttributeCategoryList(self):
        """Test PaginatedImageAttributeCategoryList"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == "__main__":
    unittest.main()
