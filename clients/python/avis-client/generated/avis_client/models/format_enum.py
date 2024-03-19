# coding: utf-8

"""
    avis

    VUE Autonomous Visual Inspection System (AVIS)

    The version of the OpenAPI document: 0.6.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import json
import pprint
import re  # noqa: F401
from enum import Enum



try:
    from typing import Self
except ImportError:
    from typing_extensions import Self


class FormatEnum(str, Enum):
    """
    * `image/png` - png * `image/tiff` - tiff * `image/jpeg` - jpeg * `image/bmp` - bmp
    """

    """
    allowed enum values
    """
    IMAGE_SLASH_PNG = 'image/png'
    IMAGE_SLASH_TIFF = 'image/tiff'
    IMAGE_SLASH_JPEG = 'image/jpeg'
    IMAGE_SLASH_BMP = 'image/bmp'

    @classmethod
    def from_json(cls, json_str: str) -> Self:
        """Create an instance of FormatEnum from a JSON string"""
        return cls(json.loads(json_str))


