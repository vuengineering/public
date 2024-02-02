# avis-client
VUE Autonomous Visual Inspection System (AVIS)

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.1.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python 3.7+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/vuengineering/public.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/vuengineering/public.git`)

Then import the package:
```python
import avis_client
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import avis_client
```

### Tests

Execute `pytest` to run the tests.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import time
import avis_client
from avis_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = avis_client.Configuration(
    host = "http://localhost:8000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'


# Enter a context with an instance of the API client
with avis_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = avis_client.ApiKeysApi(api_client)
    credentials_request = avis_client.CredentialsRequest() # CredentialsRequest |

    try:
        api_response = api_instance.api_key_create(credentials_request)
        print("The response of ApiKeysApi->api_key_create:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ApiKeysApi->api_key_create: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8000*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApiKeysApi* | [**api_key_create**](docs/ApiKeysApi.md#api_key_create) | **POST** /api/api-keys/ |
*ApiKeysApi* | [**api_key_revoke**](docs/ApiKeysApi.md#api_key_revoke) | **POST** /api/api-keys/{id}/revoke/ |
*CaseApi* | [**case_create**](docs/CaseApi.md#case_create) | **POST** /api/case/ |
*CaseApi* | [**case_destroy**](docs/CaseApi.md#case_destroy) | **DELETE** /api/case/{id}/ |
*CaseApi* | [**case_inspection_status_list**](docs/CaseApi.md#case_inspection_status_list) | **GET** /api/case/inspection_status/ |
*CaseApi* | [**case_list**](docs/CaseApi.md#case_list) | **GET** /api/case/ |
*CaseApi* | [**case_partial_update**](docs/CaseApi.md#case_partial_update) | **PATCH** /api/case/{id}/ |
*CaseApi* | [**case_retrieve**](docs/CaseApi.md#case_retrieve) | **GET** /api/case/{id}/ |
*CaseApi* | [**case_send_validation_email_retrieve**](docs/CaseApi.md#case_send_validation_email_retrieve) | **GET** /api/case/{id}/send_validation_email/ |
*CaseApi* | [**case_update**](docs/CaseApi.md#case_update) | **PUT** /api/case/{id}/ |
*CaseApi* | [**case_validation_status_list**](docs/CaseApi.md#case_validation_status_list) | **GET** /api/case/validation_status/ |
*ImageApi* | [**image_create**](docs/ImageApi.md#image_create) | **POST** /api/image/ |
*ImageApi* | [**image_destroy**](docs/ImageApi.md#image_destroy) | **DELETE** /api/image/{id}/ |
*ImageApi* | [**image_inspection_status_list**](docs/ImageApi.md#image_inspection_status_list) | **GET** /api/image/inspection_status/ |
*ImageApi* | [**image_list**](docs/ImageApi.md#image_list) | **GET** /api/image/ |
*ImageApi* | [**image_partial_update**](docs/ImageApi.md#image_partial_update) | **PATCH** /api/image/{id}/ |
*ImageApi* | [**image_quality_list**](docs/ImageApi.md#image_quality_list) | **GET** /api/image/quality/ |
*ImageApi* | [**image_retrieve**](docs/ImageApi.md#image_retrieve) | **GET** /api/image/{id}/ |
*ImageApi* | [**image_update**](docs/ImageApi.md#image_update) | **PUT** /api/image/{id}/ |
*ImagequalitygateApi* | [**imagequalitygate_create**](docs/ImagequalitygateApi.md#imagequalitygate_create) | **POST** /api/imagequalitygate/ |
*ImagequalitygateApi* | [**imagequalitygate_destroy**](docs/ImagequalitygateApi.md#imagequalitygate_destroy) | **DELETE** /api/imagequalitygate/{id}/ |
*ImagequalitygateApi* | [**imagequalitygate_list**](docs/ImagequalitygateApi.md#imagequalitygate_list) | **GET** /api/imagequalitygate/ |
*ImagequalitygateApi* | [**imagequalitygate_partial_update**](docs/ImagequalitygateApi.md#imagequalitygate_partial_update) | **PATCH** /api/imagequalitygate/{id}/ |
*ImagequalitygateApi* | [**imagequalitygate_retrieve**](docs/ImagequalitygateApi.md#imagequalitygate_retrieve) | **GET** /api/imagequalitygate/{id}/ |
*ImagequalitygateApi* | [**imagequalitygate_update**](docs/ImagequalitygateApi.md#imagequalitygate_update) | **PUT** /api/imagequalitygate/{id}/ |
*InspectionmetadataApi* | [**inspectionmetadata_create**](docs/InspectionmetadataApi.md#inspectionmetadata_create) | **POST** /api/inspectionmetadata/ |
*InspectionmetadataApi* | [**inspectionmetadata_destroy**](docs/InspectionmetadataApi.md#inspectionmetadata_destroy) | **DELETE** /api/inspectionmetadata/{id}/ |
*InspectionmetadataApi* | [**inspectionmetadata_list**](docs/InspectionmetadataApi.md#inspectionmetadata_list) | **GET** /api/inspectionmetadata/ |
*InspectionmetadataApi* | [**inspectionmetadata_partial_update**](docs/InspectionmetadataApi.md#inspectionmetadata_partial_update) | **PATCH** /api/inspectionmetadata/{id}/ |
*InspectionmetadataApi* | [**inspectionmetadata_retrieve**](docs/InspectionmetadataApi.md#inspectionmetadata_retrieve) | **GET** /api/inspectionmetadata/{id}/ |
*InspectionmetadataApi* | [**inspectionmetadata_update**](docs/InspectionmetadataApi.md#inspectionmetadata_update) | **PUT** /api/inspectionmetadata/{id}/ |
*InspectionmetadataschemaApi* | [**inspectionmetadataschema_create**](docs/InspectionmetadataschemaApi.md#inspectionmetadataschema_create) | **POST** /api/inspectionmetadataschema/ |
*InspectionmetadataschemaApi* | [**inspectionmetadataschema_destroy**](docs/InspectionmetadataschemaApi.md#inspectionmetadataschema_destroy) | **DELETE** /api/inspectionmetadataschema/{id}/ |
*InspectionmetadataschemaApi* | [**inspectionmetadataschema_list**](docs/InspectionmetadataschemaApi.md#inspectionmetadataschema_list) | **GET** /api/inspectionmetadataschema/ |
*InspectionmetadataschemaApi* | [**inspectionmetadataschema_partial_update**](docs/InspectionmetadataschemaApi.md#inspectionmetadataschema_partial_update) | **PATCH** /api/inspectionmetadataschema/{id}/ |
*InspectionmetadataschemaApi* | [**inspectionmetadataschema_retrieve**](docs/InspectionmetadataschemaApi.md#inspectionmetadataschema_retrieve) | **GET** /api/inspectionmetadataschema/{id}/ |
*InspectionmetadataschemaApi* | [**inspectionmetadataschema_update**](docs/InspectionmetadataschemaApi.md#inspectionmetadataschema_update) | **PUT** /api/inspectionmetadataschema/{id}/ |
*InspectionobjectApi* | [**inspectionobject_create**](docs/InspectionobjectApi.md#inspectionobject_create) | **POST** /api/inspectionobject/ |
*InspectionobjectApi* | [**inspectionobject_destroy**](docs/InspectionobjectApi.md#inspectionobject_destroy) | **DELETE** /api/inspectionobject/{id}/ |
*InspectionobjectApi* | [**inspectionobject_list**](docs/InspectionobjectApi.md#inspectionobject_list) | **GET** /api/inspectionobject/ |
*InspectionobjectApi* | [**inspectionobject_partial_update**](docs/InspectionobjectApi.md#inspectionobject_partial_update) | **PATCH** /api/inspectionobject/{id}/ |
*InspectionobjectApi* | [**inspectionobject_retrieve**](docs/InspectionobjectApi.md#inspectionobject_retrieve) | **GET** /api/inspectionobject/{id}/ |
*InspectionobjectApi* | [**inspectionobject_update**](docs/InspectionobjectApi.md#inspectionobject_update) | **PUT** /api/inspectionobject/{id}/ |
*InspectionobjecttypeApi* | [**inspectionobjecttype_create**](docs/InspectionobjecttypeApi.md#inspectionobjecttype_create) | **POST** /api/inspectionobjecttype/ |
*InspectionobjecttypeApi* | [**inspectionobjecttype_destroy**](docs/InspectionobjecttypeApi.md#inspectionobjecttype_destroy) | **DELETE** /api/inspectionobjecttype/{id}/ |
*InspectionobjecttypeApi* | [**inspectionobjecttype_list**](docs/InspectionobjecttypeApi.md#inspectionobjecttype_list) | **GET** /api/inspectionobjecttype/ |
*InspectionobjecttypeApi* | [**inspectionobjecttype_partial_update**](docs/InspectionobjecttypeApi.md#inspectionobjecttype_partial_update) | **PATCH** /api/inspectionobjecttype/{id}/ |
*InspectionobjecttypeApi* | [**inspectionobjecttype_retrieve**](docs/InspectionobjecttypeApi.md#inspectionobjecttype_retrieve) | **GET** /api/inspectionobjecttype/{id}/ |
*InspectionobjecttypeApi* | [**inspectionobjecttype_update**](docs/InspectionobjecttypeApi.md#inspectionobjecttype_update) | **PUT** /api/inspectionobjecttype/{id}/ |
*InspectionprocessblueprintApi* | [**inspectionprocessblueprint_create**](docs/InspectionprocessblueprintApi.md#inspectionprocessblueprint_create) | **POST** /api/inspectionprocessblueprint/ |
*InspectionprocessblueprintApi* | [**inspectionprocessblueprint_destroy**](docs/InspectionprocessblueprintApi.md#inspectionprocessblueprint_destroy) | **DELETE** /api/inspectionprocessblueprint/{id}/ |
*InspectionprocessblueprintApi* | [**inspectionprocessblueprint_list**](docs/InspectionprocessblueprintApi.md#inspectionprocessblueprint_list) | **GET** /api/inspectionprocessblueprint/ |
*InspectionprocessblueprintApi* | [**inspectionprocessblueprint_partial_update**](docs/InspectionprocessblueprintApi.md#inspectionprocessblueprint_partial_update) | **PATCH** /api/inspectionprocessblueprint/{id}/ |
*InspectionprocessblueprintApi* | [**inspectionprocessblueprint_retrieve**](docs/InspectionprocessblueprintApi.md#inspectionprocessblueprint_retrieve) | **GET** /api/inspectionprocessblueprint/{id}/ |
*InspectionprocessblueprintApi* | [**inspectionprocessblueprint_update**](docs/InspectionprocessblueprintApi.md#inspectionprocessblueprint_update) | **PUT** /api/inspectionprocessblueprint/{id}/ |
*InspectionresultApi* | [**inspectionresult_create**](docs/InspectionresultApi.md#inspectionresult_create) | **POST** /api/inspectionresult/ |
*InspectionresultApi* | [**inspectionresult_destroy**](docs/InspectionresultApi.md#inspectionresult_destroy) | **DELETE** /api/inspectionresult/{id}/ |
*InspectionresultApi* | [**inspectionresult_list**](docs/InspectionresultApi.md#inspectionresult_list) | **GET** /api/inspectionresult/ |
*InspectionresultApi* | [**inspectionresult_partial_update**](docs/InspectionresultApi.md#inspectionresult_partial_update) | **PATCH** /api/inspectionresult/{id}/ |
*InspectionresultApi* | [**inspectionresult_retrieve**](docs/InspectionresultApi.md#inspectionresult_retrieve) | **GET** /api/inspectionresult/{id}/ |
*InspectionresultApi* | [**inspectionresult_update**](docs/InspectionresultApi.md#inspectionresult_update) | **PUT** /api/inspectionresult/{id}/ |
*MembershipApi* | [**membership_create**](docs/MembershipApi.md#membership_create) | **POST** /api/membership/ |
*MembershipApi* | [**membership_destroy**](docs/MembershipApi.md#membership_destroy) | **DELETE** /api/membership/{id}/ |
*MembershipApi* | [**membership_list**](docs/MembershipApi.md#membership_list) | **GET** /api/membership/ |
*MembershipApi* | [**membership_retrieve**](docs/MembershipApi.md#membership_retrieve) | **GET** /api/membership/{id}/ |
*MembershipApi* | [**membership_update**](docs/MembershipApi.md#membership_update) | **PUT** /api/membership/{id}/ |
*MlApi* | [**ml_inspectionresult_create**](docs/MlApi.md#ml_inspectionresult_create) | **POST** /api/ml/inspectionresult/ |
*MlApi* | [**ml_inspectionresult_destroy**](docs/MlApi.md#ml_inspectionresult_destroy) | **DELETE** /api/ml/inspectionresult/{id}/ |
*MlApi* | [**ml_inspectionresult_list**](docs/MlApi.md#ml_inspectionresult_list) | **GET** /api/ml/inspectionresult/ |
*MlApi* | [**ml_inspectionresult_partial_update**](docs/MlApi.md#ml_inspectionresult_partial_update) | **PATCH** /api/ml/inspectionresult/{id}/ |
*MlApi* | [**ml_inspectionresult_retrieve**](docs/MlApi.md#ml_inspectionresult_retrieve) | **GET** /api/ml/inspectionresult/{id}/ |
*MlApi* | [**ml_inspectionresult_update**](docs/MlApi.md#ml_inspectionresult_update) | **PUT** /api/ml/inspectionresult/{id}/ |
*MlApi* | [**ml_model_create**](docs/MlApi.md#ml_model_create) | **POST** /api/ml/model/ |
*MlApi* | [**ml_model_destroy**](docs/MlApi.md#ml_model_destroy) | **DELETE** /api/ml/model/{id}/ |
*MlApi* | [**ml_model_inference**](docs/MlApi.md#ml_model_inference) | **POST** /api/ml/model/{id}/inference/ |
*MlApi* | [**ml_model_list**](docs/MlApi.md#ml_model_list) | **GET** /api/ml/model/ |
*MlApi* | [**ml_model_partial_update**](docs/MlApi.md#ml_model_partial_update) | **PATCH** /api/ml/model/{id}/ |
*MlApi* | [**ml_model_retrieve**](docs/MlApi.md#ml_model_retrieve) | **GET** /api/ml/model/{id}/ |
*MlApi* | [**ml_model_update**](docs/MlApi.md#ml_model_update) | **PUT** /api/ml/model/{id}/ |
*MlApi* | [**ml_modeltype_create**](docs/MlApi.md#ml_modeltype_create) | **POST** /api/ml/modeltype/ |
*MlApi* | [**ml_modeltype_destroy**](docs/MlApi.md#ml_modeltype_destroy) | **DELETE** /api/ml/modeltype/{id}/ |
*MlApi* | [**ml_modeltype_list**](docs/MlApi.md#ml_modeltype_list) | **GET** /api/ml/modeltype/ |
*MlApi* | [**ml_modeltype_partial_update**](docs/MlApi.md#ml_modeltype_partial_update) | **PATCH** /api/ml/modeltype/{id}/ |
*MlApi* | [**ml_modeltype_retrieve**](docs/MlApi.md#ml_modeltype_retrieve) | **GET** /api/ml/modeltype/{id}/ |
*MlApi* | [**ml_modeltype_update**](docs/MlApi.md#ml_modeltype_update) | **PUT** /api/ml/modeltype/{id}/ |
*TeamApi* | [**team_create**](docs/TeamApi.md#team_create) | **POST** /api/team/ |
*TeamApi* | [**team_destroy**](docs/TeamApi.md#team_destroy) | **DELETE** /api/team/{id}/ |
*TeamApi* | [**team_list**](docs/TeamApi.md#team_list) | **GET** /api/team/ |
*TeamApi* | [**team_retrieve**](docs/TeamApi.md#team_retrieve) | **GET** /api/team/{id}/ |
*TeamApi* | [**team_update**](docs/TeamApi.md#team_update) | **PUT** /api/team/{id}/ |
*UserApi* | [**user_email_list**](docs/UserApi.md#user_email_list) | **GET** /api/user/email/ |
*UserApi* | [**user_whoami_retrieve**](docs/UserApi.md#user_whoami_retrieve) | **GET** /api/user/whoami/ |


## Documentation For Models

 - [AzureMLInferenceRequest](docs/AzureMLInferenceRequest.md)
 - [BinaryClassEnum](docs/BinaryClassEnum.md)
 - [BinaryClassInspectionResult](docs/BinaryClassInspectionResult.md)
 - [BinaryClassInspectionResultRequest](docs/BinaryClassInspectionResultRequest.md)
 - [BinaryClassInspectionResultTyped](docs/BinaryClassInspectionResultTyped.md)
 - [BinaryClassInspectionResultTypedRequest](docs/BinaryClassInspectionResultTypedRequest.md)
 - [BlankEnum](docs/BlankEnum.md)
 - [Case](docs/Case.md)
 - [CaseRequest](docs/CaseRequest.md)
 - [CaseValidationStatus](docs/CaseValidationStatus.md)
 - [ClassificationResult](docs/ClassificationResult.md)
 - [ClassificationResultRequest](docs/ClassificationResultRequest.md)
 - [ClassificationResultStatus](docs/ClassificationResultStatus.md)
 - [CredentialsRequest](docs/CredentialsRequest.md)
 - [CustomUser](docs/CustomUser.md)
 - [CustomUserRequest](docs/CustomUserRequest.md)
 - [EmailAddress](docs/EmailAddress.md)
 - [FormatEnum](docs/FormatEnum.md)
 - [Image](docs/Image.md)
 - [ImageQualityGate](docs/ImageQualityGate.md)
 - [ImageQualityGateRequest](docs/ImageQualityGateRequest.md)
 - [ImageQualityGateResult](docs/ImageQualityGateResult.md)
 - [ImageRequest](docs/ImageRequest.md)
 - [InspectionMetadata](docs/InspectionMetadata.md)
 - [InspectionMetadataRequest](docs/InspectionMetadataRequest.md)
 - [InspectionMetadataSchema](docs/InspectionMetadataSchema.md)
 - [InspectionMetadataSchemaRequest](docs/InspectionMetadataSchemaRequest.md)
 - [InspectionObject](docs/InspectionObject.md)
 - [InspectionObjectRequest](docs/InspectionObjectRequest.md)
 - [InspectionObjectType](docs/InspectionObjectType.md)
 - [InspectionObjectTypeRequest](docs/InspectionObjectTypeRequest.md)
 - [InspectionProcessBlueprint](docs/InspectionProcessBlueprint.md)
 - [InspectionProcessBlueprintRequest](docs/InspectionProcessBlueprintRequest.md)
 - [InspectionResultPolymorphic](docs/InspectionResultPolymorphic.md)
 - [InspectionResultPolymorphicRequest](docs/InspectionResultPolymorphicRequest.md)
 - [InspectionStatus](docs/InspectionStatus.md)
 - [InspectionStatusEnum](docs/InspectionStatusEnum.md)
 - [MLModel](docs/MLModel.md)
 - [MLModelRequest](docs/MLModelRequest.md)
 - [MLModelType](docs/MLModelType.md)
 - [MLModelTypeRequest](docs/MLModelTypeRequest.md)
 - [Membership](docs/Membership.md)
 - [MembershipRequest](docs/MembershipRequest.md)
 - [PatchedBinaryClassInspectionResultRequest](docs/PatchedBinaryClassInspectionResultRequest.md)
 - [PatchedBinaryClassInspectionResultTypedRequest](docs/PatchedBinaryClassInspectionResultTypedRequest.md)
 - [PatchedCaseRequest](docs/PatchedCaseRequest.md)
 - [PatchedClassificationResultRequest](docs/PatchedClassificationResultRequest.md)
 - [PatchedImageQualityGateRequest](docs/PatchedImageQualityGateRequest.md)
 - [PatchedImageRequest](docs/PatchedImageRequest.md)
 - [PatchedInspectionMetadataRequest](docs/PatchedInspectionMetadataRequest.md)
 - [PatchedInspectionMetadataSchemaRequest](docs/PatchedInspectionMetadataSchemaRequest.md)
 - [PatchedInspectionObjectRequest](docs/PatchedInspectionObjectRequest.md)
 - [PatchedInspectionObjectTypeRequest](docs/PatchedInspectionObjectTypeRequest.md)
 - [PatchedInspectionProcessBlueprintRequest](docs/PatchedInspectionProcessBlueprintRequest.md)
 - [PatchedInspectionResultPolymorphicRequest](docs/PatchedInspectionResultPolymorphicRequest.md)
 - [PatchedMLModelRequest](docs/PatchedMLModelRequest.md)
 - [PatchedMLModelTypeRequest](docs/PatchedMLModelTypeRequest.md)
 - [PatchedRatingInspectionResultRequest](docs/PatchedRatingInspectionResultRequest.md)
 - [PatchedRatingInspectionResultTypedRequest](docs/PatchedRatingInspectionResultTypedRequest.md)
 - [QualityEnum](docs/QualityEnum.md)
 - [RatingInspectionResult](docs/RatingInspectionResult.md)
 - [RatingInspectionResultRequest](docs/RatingInspectionResultRequest.md)
 - [RatingInspectionResultTyped](docs/RatingInspectionResultTyped.md)
 - [RatingInspectionResultTypedRequest](docs/RatingInspectionResultTypedRequest.md)
 - [StatusEnum](docs/StatusEnum.md)
 - [Team](docs/Team.md)
 - [TeamRequest](docs/TeamRequest.md)
 - [TypeEnum](docs/TypeEnum.md)
 - [UserAPIKeyCreate](docs/UserAPIKeyCreate.md)
 - [ValidationStatusEnum](docs/ValidationStatusEnum.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="ApiKeyAuth"></a>
### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-Api-Key
- **Location**: HTTP header

<a id="cookieAuth"></a>
### cookieAuth

- **Type**: API key
- **API key parameter name**: sessionid
- **Location**:


## Author