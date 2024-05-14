# coding: utf-8

"""
    avis

    VUE Autonomous Visual Inspection System (AVIS)

    The version of the OpenAPI document: 0.8.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from avis_client.api.product_api import ProductApi


class TestProductApi(unittest.TestCase):
    """ProductApi unit test stubs"""

    def setUp(self) -> None:
        self.api = ProductApi()

    def tearDown(self) -> None:
        pass

    def test_product_create(self) -> None:
        """Test case for product_create"""
        pass

    def test_product_destroy(self) -> None:
        """Test case for product_destroy"""
        pass

    def test_product_list(self) -> None:
        """Test case for product_list"""
        pass

    def test_product_partial_update(self) -> None:
        """Test case for product_partial_update"""
        pass

    def test_product_retrieve(self) -> None:
        """Test case for product_retrieve"""
        pass

    def test_product_update(self) -> None:
        """Test case for product_update"""
        pass


if __name__ == "__main__":
    unittest.main()
