# coding: utf-8

"""
    avis

    VUE Autonomous Visual Inspection System (AVIS)

    The version of the OpenAPI document: 0.7.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from datetime import datetime
from typing import Any, ClassVar, Dict, List, Optional
from pydantic import BaseModel, StrictInt, StrictStr
from pydantic import Field
from typing_extensions import Annotated
from avis_client.models.format_enum import FormatEnum
from avis_client.models.validation_status_enum import ValidationStatusEnum
try:
    from typing import Self
except ImportError:
    from typing_extensions import Self

class Image(BaseModel):
    """
    Image
    """ # noqa: E501
    id: StrictInt
    team: StrictInt
    inspection: Optional[StrictInt] = None
    uploaded_by: Optional[StrictInt] = None
    results: Optional[List[StrictInt]] = None
    created_at: Optional[datetime]
    updated_at: Optional[datetime]
    format: Optional[FormatEnum] = None
    capture_datetime: datetime
    file: StrictStr
    part_id: Optional[Annotated[str, Field(strict=True, max_length=255)]] = None
    validation_status: Optional[ValidationStatusEnum] = None
    __properties: ClassVar[List[str]] = ["id", "team", "inspection", "uploaded_by", "results", "created_at", "updated_at", "format", "capture_datetime", "file", "part_id", "validation_status"]

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
        """Create an instance of Image from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        """
        _dict = self.model_dump(
            by_alias=True,
            exclude={
                "id",
                "created_at",
                "updated_at",
            },
            exclude_none=True,
        )
        # set to None if inspection (nullable) is None
        # and model_fields_set contains the field
        if self.inspection is None and "inspection" in self.model_fields_set:
            _dict['inspection'] = None

        # set to None if uploaded_by (nullable) is None
        # and model_fields_set contains the field
        if self.uploaded_by is None and "uploaded_by" in self.model_fields_set:
            _dict['uploaded_by'] = None

        # set to None if created_at (nullable) is None
        # and model_fields_set contains the field
        if self.created_at is None and "created_at" in self.model_fields_set:
            _dict['created_at'] = None

        # set to None if updated_at (nullable) is None
        # and model_fields_set contains the field
        if self.updated_at is None and "updated_at" in self.model_fields_set:
            _dict['updated_at'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Dict) -> Self:
        """Create an instance of Image from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "team": obj.get("team"),
            "inspection": obj.get("inspection"),
            "uploaded_by": obj.get("uploaded_by"),
            "results": obj.get("results"),
            "created_at": obj.get("created_at"),
            "updated_at": obj.get("updated_at"),
            "format": obj.get("format"),
            "capture_datetime": obj.get("capture_datetime"),
            "file": obj.get("file"),
            "part_id": obj.get("part_id"),
            "validation_status": obj.get("validation_status")
        })
        return _obj


