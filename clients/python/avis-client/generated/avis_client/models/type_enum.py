# coding: utf-8

"""
    avis

    VUE Autonomous Visual Inspection System (AVIS)

    The version of the OpenAPI document: 0.5.0
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


class TypeEnum(str, Enum):
    """
    * `RatingInspectionResult` - RatingInspectionResult
    """

    """
    allowed enum values
    """
    RATINGINSPECTIONRESULT = 'RatingInspectionResult'

    @classmethod
    def from_json(cls, json_str: str) -> Self:
        """Create an instance of TypeEnum from a JSON string"""
        return cls(json.loads(json_str))


