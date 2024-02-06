# coding: utf-8

"""
    avis

    VUE Autonomous Visual Inspection System (AVIS)

    The version of the OpenAPI document: 0.1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json


from typing import Any, ClassVar, Dict, List, Optional
from pydantic import BaseModel, StrictInt, StrictStr, field_validator
from pydantic import Field
from typing_extensions import Annotated
from avis_client.models.binary_class_enum import BinaryClassEnum
from avis_client.models.type_enum import TypeEnum

try:
    from typing import Self
except ImportError:
    from typing_extensions import Self


class BinaryClassInspectionResultRequest(BaseModel):
    """
    BinaryClassInspectionResultRequest
    """  # noqa: E501

    team: StrictInt
    reported_by: Optional[StrictInt] = None
    image: Optional[StrictInt] = None
    type: Optional[TypeEnum] = None
    confidence: Annotated[str, Field(strict=True)]
    comment: Optional[StrictStr] = None
    binary_class: Optional[BinaryClassEnum] = None
    __properties: ClassVar[List[str]] = [
        "team",
        "reported_by",
        "image",
        "type",
        "confidence",
        "comment",
        "binary_class",
    ]

    @field_validator("confidence")
    def confidence_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if not re.match(r"^-?\d{0,1}(?:\.\d{0,4})?$", value):
            raise ValueError(
                r"must validate the regular expression /^-?\d{0,1}(?:\.\d{0,4})?$/"
            )
        return value

    model_config = {
        "populate_by_name": True,
        "validate_assignment": True,
        "protected_namespaces": (),
    }

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Self:
        """Create an instance of BinaryClassInspectionResultRequest from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        _dict = self.model_dump(
            by_alias=True,
            exclude={},
            exclude_none=True,
        )
        # set to None if reported_by (nullable) is None
        # and model_fields_set contains the field
        if self.reported_by is None and "reported_by" in self.model_fields_set:
            _dict["reported_by"] = None

        # set to None if image (nullable) is None
        # and model_fields_set contains the field
        if self.image is None and "image" in self.model_fields_set:
            _dict["image"] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Dict) -> Self:
        """Create an instance of BinaryClassInspectionResultRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate(
            {
                "team": obj.get("team"),
                "reported_by": obj.get("reported_by"),
                "image": obj.get("image"),
                "type": obj.get("type"),
                "confidence": obj.get("confidence"),
                "comment": obj.get("comment"),
                "binary_class": obj.get("binary_class"),
            }
        )
        return _obj
