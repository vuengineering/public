# coding: utf-8

# flake8: noqa
"""
    avis

    VUE Autonomous Visual Inspection System (AVIS)

    The version of the OpenAPI document: 0.8.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


# import models into model package
from avis_client.models.azure_ml_inference_request import AzureMLInferenceRequest
from avis_client.models.blank_enum import BlankEnum
from avis_client.models.configuration_statistics import ConfigurationStatistics
from avis_client.models.configuration_statistics_request import (
    ConfigurationStatisticsRequest,
)
from avis_client.models.configuration_type import ConfigurationType
from avis_client.models.configuration_type_request import ConfigurationTypeRequest
from avis_client.models.custom_user import CustomUser
from avis_client.models.custom_user_request import CustomUserRequest
from avis_client.models.email_address import EmailAddress
from avis_client.models.format_enum import FormatEnum
from avis_client.models.image import Image
from avis_client.models.image_attribute import ImageAttribute
from avis_client.models.image_attribute_category import ImageAttributeCategory
from avis_client.models.image_attribute_category_request import (
    ImageAttributeCategoryRequest,
)
from avis_client.models.image_attribute_request import ImageAttributeRequest
from avis_client.models.image_request import ImageRequest
from avis_client.models.inspection import Inspection
from avis_client.models.inspection_images_statistics import InspectionImagesStatistics
from avis_client.models.inspection_images_statistics_request import (
    InspectionImagesStatisticsRequest,
)
from avis_client.models.inspection_request import InspectionRequest
from avis_client.models.inspection_statistics import InspectionStatistics
from avis_client.models.inspection_statistics_request import InspectionStatisticsRequest
from avis_client.models.inspection_validation_status import InspectionValidationStatus
from avis_client.models.ml_model import MLModel
from avis_client.models.ml_model_request import MLModelRequest
from avis_client.models.ml_model_type import MLModelType
from avis_client.models.ml_model_type_request import MLModelTypeRequest
from avis_client.models.membership import Membership
from avis_client.models.membership_request import MembershipRequest
from avis_client.models.metadata import Metadata
from avis_client.models.metadata_request import MetadataRequest
from avis_client.models.metadata_schema import MetadataSchema
from avis_client.models.metadata_schema_request import MetadataSchemaRequest
from avis_client.models.paginated_configuration_statistics_list import (
    PaginatedConfigurationStatisticsList,
)
from avis_client.models.paginated_configuration_type_list import (
    PaginatedConfigurationTypeList,
)
from avis_client.models.paginated_image_attribute_category_list import (
    PaginatedImageAttributeCategoryList,
)
from avis_client.models.paginated_image_attribute_list import (
    PaginatedImageAttributeList,
)
from avis_client.models.paginated_image_list import PaginatedImageList
from avis_client.models.paginated_inspection_images_statistics_list import (
    PaginatedInspectionImagesStatisticsList,
)
from avis_client.models.paginated_inspection_list import PaginatedInspectionList
from avis_client.models.paginated_inspection_statistics_list import (
    PaginatedInspectionStatisticsList,
)
from avis_client.models.paginated_inspection_validation_status_list import (
    PaginatedInspectionValidationStatusList,
)
from avis_client.models.paginated_ml_model_list import PaginatedMLModelList
from avis_client.models.paginated_ml_model_type_list import PaginatedMLModelTypeList
from avis_client.models.paginated_membership_list import PaginatedMembershipList
from avis_client.models.paginated_metadata_list import PaginatedMetadataList
from avis_client.models.paginated_metadata_schema_list import (
    PaginatedMetadataSchemaList,
)
from avis_client.models.paginated_product_category_list import (
    PaginatedProductCategoryList,
)
from avis_client.models.paginated_product_list import PaginatedProductList
from avis_client.models.paginated_quality_criteria_list import (
    PaginatedQualityCriteriaList,
)
from avis_client.models.paginated_quality_criteria_result_list import (
    PaginatedQualityCriteriaResultList,
)
from avis_client.models.paginated_result_list import PaginatedResultList
from avis_client.models.paginated_team_list import PaginatedTeamList
from avis_client.models.patched_configuration_type_request import (
    PatchedConfigurationTypeRequest,
)
from avis_client.models.patched_image_attribute_category_request import (
    PatchedImageAttributeCategoryRequest,
)
from avis_client.models.patched_image_attribute_request import (
    PatchedImageAttributeRequest,
)
from avis_client.models.patched_image_request import PatchedImageRequest
from avis_client.models.patched_inspection_request import PatchedInspectionRequest
from avis_client.models.patched_ml_model_request import PatchedMLModelRequest
from avis_client.models.patched_ml_model_type_request import PatchedMLModelTypeRequest
from avis_client.models.patched_metadata_request import PatchedMetadataRequest
from avis_client.models.patched_metadata_schema_request import (
    PatchedMetadataSchemaRequest,
)
from avis_client.models.patched_product_category_request import (
    PatchedProductCategoryRequest,
)
from avis_client.models.patched_product_request import PatchedProductRequest
from avis_client.models.patched_quality_criteria_request import (
    PatchedQualityCriteriaRequest,
)
from avis_client.models.patched_result_request import PatchedResultRequest
from avis_client.models.patched_result_request_status import PatchedResultRequestStatus
from avis_client.models.product import Product
from avis_client.models.product_category import ProductCategory
from avis_client.models.product_category_request import ProductCategoryRequest
from avis_client.models.product_request import ProductRequest
from avis_client.models.quality_criteria import QualityCriteria
from avis_client.models.quality_criteria_request import QualityCriteriaRequest
from avis_client.models.quality_criteria_result import QualityCriteriaResult
from avis_client.models.quality_enum import QualityEnum
from avis_client.models.result import Result
from avis_client.models.result_request import ResultRequest
from avis_client.models.status_enum import StatusEnum
from avis_client.models.team import Team
from avis_client.models.team_request import TeamRequest
from avis_client.models.user_api_key_create import UserAPIKeyCreate
from avis_client.models.user_api_key_create_request import UserAPIKeyCreateRequest
from avis_client.models.validation_status_enum import ValidationStatusEnum
