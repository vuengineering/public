# coding: utf-8

"""
    avis

    VUE Autonomous Visual Inspection System (AVIS)

    The version of the OpenAPI document: 0.8.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from avis_client.api.image_api import ImageApi


class TestImageApi(unittest.TestCase):
    """ImageApi unit test stubs"""

    def setUp(self) -> None:
        self.api = ImageApi()

    def tearDown(self) -> None:
        pass

    def test_image_create(self) -> None:
        """Test case for image_create"""
        pass

    def test_image_destroy(self) -> None:
        """Test case for image_destroy"""
        pass

    def test_image_list(self) -> None:
        """Test case for image_list"""
        pass

    def test_image_partial_update(self) -> None:
        """Test case for image_partial_update"""
        pass

    def test_image_quality_list(self) -> None:
        """Test case for image_quality_list"""
        pass

    def test_image_retrieve(self) -> None:
        """Test case for image_retrieve"""
        pass

    def test_image_update(self) -> None:
        """Test case for image_update"""
        pass


if __name__ == "__main__":
    unittest.main()
