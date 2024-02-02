# coding: utf-8

# flake8: noqa
"""
    avis

    VUE Autonomous Visual Inspection System (AVIS)

    The version of the OpenAPI document: 0.1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


# import models into model package
from avis_client.models.azure_ml_inference_request import AzureMLInferenceRequest
from avis_client.models.binary_class_enum import BinaryClassEnum
from avis_client.models.binary_class_inspection_result import (
    BinaryClassInspectionResult,
)
from avis_client.models.binary_class_inspection_result_request import (
    BinaryClassInspectionResultRequest,
)
from avis_client.models.binary_class_inspection_result_typed import (
    BinaryClassInspectionResultTyped,
)
from avis_client.models.binary_class_inspection_result_typed_request import (
    BinaryClassInspectionResultTypedRequest,
)
from avis_client.models.blank_enum import BlankEnum
from avis_client.models.case import Case
from avis_client.models.case_request import CaseRequest
from avis_client.models.case_validation_status import CaseValidationStatus
from avis_client.models.classification_result import ClassificationResult
from avis_client.models.classification_result_request import ClassificationResultRequest
from avis_client.models.classification_result_status import ClassificationResultStatus
from avis_client.models.credentials_request import CredentialsRequest
from avis_client.models.custom_user import CustomUser
from avis_client.models.custom_user_request import CustomUserRequest
from avis_client.models.email_address import EmailAddress
from avis_client.models.format_enum import FormatEnum
from avis_client.models.image import Image
from avis_client.models.image_quality_gate import ImageQualityGate
from avis_client.models.image_quality_gate_request import ImageQualityGateRequest
from avis_client.models.image_quality_gate_result import ImageQualityGateResult
from avis_client.models.image_request import ImageRequest
from avis_client.models.inspection_metadata import InspectionMetadata
from avis_client.models.inspection_metadata_request import InspectionMetadataRequest
from avis_client.models.inspection_metadata_schema import InspectionMetadataSchema
from avis_client.models.inspection_metadata_schema_request import (
    InspectionMetadataSchemaRequest,
)
from avis_client.models.inspection_object import InspectionObject
from avis_client.models.inspection_object_request import InspectionObjectRequest
from avis_client.models.inspection_object_type import InspectionObjectType
from avis_client.models.inspection_object_type_request import (
    InspectionObjectTypeRequest,
)
from avis_client.models.inspection_process_blueprint import InspectionProcessBlueprint
from avis_client.models.inspection_process_blueprint_request import (
    InspectionProcessBlueprintRequest,
)
from avis_client.models.inspection_result_polymorphic import InspectionResultPolymorphic
from avis_client.models.inspection_result_polymorphic_request import (
    InspectionResultPolymorphicRequest,
)
from avis_client.models.inspection_status import InspectionStatus
from avis_client.models.inspection_status_enum import InspectionStatusEnum
from avis_client.models.ml_model import MLModel
from avis_client.models.ml_model_request import MLModelRequest
from avis_client.models.ml_model_type import MLModelType
from avis_client.models.ml_model_type_request import MLModelTypeRequest
from avis_client.models.membership import Membership
from avis_client.models.membership_request import MembershipRequest
from avis_client.models.patched_binary_class_inspection_result_request import (
    PatchedBinaryClassInspectionResultRequest,
)
from avis_client.models.patched_binary_class_inspection_result_typed_request import (
    PatchedBinaryClassInspectionResultTypedRequest,
)
from avis_client.models.patched_case_request import PatchedCaseRequest
from avis_client.models.patched_classification_result_request import (
    PatchedClassificationResultRequest,
)
from avis_client.models.patched_image_quality_gate_request import (
    PatchedImageQualityGateRequest,
)
from avis_client.models.patched_image_request import PatchedImageRequest
from avis_client.models.patched_inspection_metadata_request import (
    PatchedInspectionMetadataRequest,
)
from avis_client.models.patched_inspection_metadata_schema_request import (
    PatchedInspectionMetadataSchemaRequest,
)
from avis_client.models.patched_inspection_object_request import (
    PatchedInspectionObjectRequest,
)
from avis_client.models.patched_inspection_object_type_request import (
    PatchedInspectionObjectTypeRequest,
)
from avis_client.models.patched_inspection_process_blueprint_request import (
    PatchedInspectionProcessBlueprintRequest,
)
from avis_client.models.patched_inspection_result_polymorphic_request import (
    PatchedInspectionResultPolymorphicRequest,
)
from avis_client.models.patched_ml_model_request import PatchedMLModelRequest
from avis_client.models.patched_ml_model_type_request import PatchedMLModelTypeRequest
from avis_client.models.patched_rating_inspection_result_request import (
    PatchedRatingInspectionResultRequest,
)
from avis_client.models.patched_rating_inspection_result_typed_request import (
    PatchedRatingInspectionResultTypedRequest,
)
from avis_client.models.quality_enum import QualityEnum
from avis_client.models.rating_inspection_result import RatingInspectionResult
from avis_client.models.rating_inspection_result_request import (
    RatingInspectionResultRequest,
)
from avis_client.models.rating_inspection_result_typed import (
    RatingInspectionResultTyped,
)
from avis_client.models.rating_inspection_result_typed_request import (
    RatingInspectionResultTypedRequest,
)
from avis_client.models.status_enum import StatusEnum
from avis_client.models.team import Team
from avis_client.models.team_request import TeamRequest
from avis_client.models.type_enum import TypeEnum
from avis_client.models.user_api_key_create import UserAPIKeyCreate
from avis_client.models.validation_status_enum import ValidationStatusEnum