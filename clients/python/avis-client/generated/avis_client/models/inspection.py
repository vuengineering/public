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
from pydantic import BaseModel, StrictInt
try:
    from typing import Self
except ImportError:
    from typing_extensions import Self

class Inspection(BaseModel):
    """
    Inspection
    """ # noqa: E501
    id: StrictInt
    team: StrictInt
    product: Optional[StrictInt] = None
    opened_by: Optional[StrictInt] = None
    closed_by: Optional[StrictInt] = None
    images: Optional[List[StrictInt]] = None
    created_at: Optional[datetime]
    updated_at: Optional[datetime]
    open_datetime: Optional[datetime]
    close_datetime: Optional[datetime] = None
    configuration: Optional[StrictInt] = None
    metadata: Optional[StrictInt] = None
    __properties: ClassVar[List[str]] = ["id", "team", "product", "opened_by", "closed_by", "images", "created_at", "updated_at", "open_datetime", "close_datetime", "configuration", "metadata"]

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
        """Create an instance of Inspection from a JSON string"""
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
        * OpenAPI `readOnly` fields are excluded.
        """
        _dict = self.model_dump(
            by_alias=True,
            exclude={
                "id",
                "created_at",
                "updated_at",
                "open_datetime",
            },
            exclude_none=True,
        )
        # set to None if product (nullable) is None
        # and model_fields_set contains the field
        if self.product is None and "product" in self.model_fields_set:
            _dict['product'] = None

        # set to None if opened_by (nullable) is None
        # and model_fields_set contains the field
        if self.opened_by is None and "opened_by" in self.model_fields_set:
            _dict['opened_by'] = None

        # set to None if closed_by (nullable) is None
        # and model_fields_set contains the field
        if self.closed_by is None and "closed_by" in self.model_fields_set:
            _dict['closed_by'] = None

        # set to None if created_at (nullable) is None
        # and model_fields_set contains the field
        if self.created_at is None and "created_at" in self.model_fields_set:
            _dict['created_at'] = None

        # set to None if updated_at (nullable) is None
        # and model_fields_set contains the field
        if self.updated_at is None and "updated_at" in self.model_fields_set:
            _dict['updated_at'] = None

        # set to None if open_datetime (nullable) is None
        # and model_fields_set contains the field
        if self.open_datetime is None and "open_datetime" in self.model_fields_set:
            _dict['open_datetime'] = None

        # set to None if close_datetime (nullable) is None
        # and model_fields_set contains the field
        if self.close_datetime is None and "close_datetime" in self.model_fields_set:
            _dict['close_datetime'] = None

        # set to None if configuration (nullable) is None
        # and model_fields_set contains the field
        if self.configuration is None and "configuration" in self.model_fields_set:
            _dict['configuration'] = None

        # set to None if metadata (nullable) is None
        # and model_fields_set contains the field
        if self.metadata is None and "metadata" in self.model_fields_set:
            _dict['metadata'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Dict) -> Self:
        """Create an instance of Inspection from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "team": obj.get("team"),
            "product": obj.get("product"),
            "opened_by": obj.get("opened_by"),
            "closed_by": obj.get("closed_by"),
            "images": obj.get("images"),
            "created_at": obj.get("created_at"),
            "updated_at": obj.get("updated_at"),
            "open_datetime": obj.get("open_datetime"),
            "close_datetime": obj.get("close_datetime"),
            "configuration": obj.get("configuration"),
            "metadata": obj.get("metadata")
        })
        return _obj


