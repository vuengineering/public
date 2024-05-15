/**
 * avis
 * VUE Autonomous Visual Inspection System (AVIS)
 *
 * The version of the OpenAPI document: 0.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AzureMLInferenceRequest from './model/AzureMLInferenceRequest';
import BlankEnum from './model/BlankEnum';
import ConfigurationStatistics from './model/ConfigurationStatistics';
import ConfigurationStatisticsRequest from './model/ConfigurationStatisticsRequest';
import ConfigurationType from './model/ConfigurationType';
import ConfigurationTypeRequest from './model/ConfigurationTypeRequest';
import CustomUser from './model/CustomUser';
import CustomUserRequest from './model/CustomUserRequest';
import EmailAddress from './model/EmailAddress';
import FormatEnum from './model/FormatEnum';
import Image from './model/Image';
import ImageAttribute from './model/ImageAttribute';
import ImageAttributeCategory from './model/ImageAttributeCategory';
import ImageAttributeCategoryRequest from './model/ImageAttributeCategoryRequest';
import ImageAttributeRequest from './model/ImageAttributeRequest';
import ImageRequest from './model/ImageRequest';
import Inspection from './model/Inspection';
import InspectionImagesStatistics from './model/InspectionImagesStatistics';
import InspectionImagesStatisticsRequest from './model/InspectionImagesStatisticsRequest';
import InspectionRequest from './model/InspectionRequest';
import InspectionStatistics from './model/InspectionStatistics';
import InspectionStatisticsRequest from './model/InspectionStatisticsRequest';
import InspectionValidationStatus from './model/InspectionValidationStatus';
import MLModel from './model/MLModel';
import MLModelRequest from './model/MLModelRequest';
import MLModelType from './model/MLModelType';
import MLModelTypeRequest from './model/MLModelTypeRequest';
import Membership from './model/Membership';
import MembershipRequest from './model/MembershipRequest';
import Metadata from './model/Metadata';
import MetadataRequest from './model/MetadataRequest';
import MetadataSchema from './model/MetadataSchema';
import MetadataSchemaRequest from './model/MetadataSchemaRequest';
import PaginatedConfigurationStatisticsList from './model/PaginatedConfigurationStatisticsList';
import PaginatedConfigurationTypeList from './model/PaginatedConfigurationTypeList';
import PaginatedImageAttributeCategoryList from './model/PaginatedImageAttributeCategoryList';
import PaginatedImageAttributeList from './model/PaginatedImageAttributeList';
import PaginatedImageList from './model/PaginatedImageList';
import PaginatedInspectionImagesStatisticsList from './model/PaginatedInspectionImagesStatisticsList';
import PaginatedInspectionList from './model/PaginatedInspectionList';
import PaginatedInspectionStatisticsList from './model/PaginatedInspectionStatisticsList';
import PaginatedInspectionValidationStatusList from './model/PaginatedInspectionValidationStatusList';
import PaginatedMLModelList from './model/PaginatedMLModelList';
import PaginatedMLModelTypeList from './model/PaginatedMLModelTypeList';
import PaginatedMembershipList from './model/PaginatedMembershipList';
import PaginatedMetadataList from './model/PaginatedMetadataList';
import PaginatedMetadataSchemaList from './model/PaginatedMetadataSchemaList';
import PaginatedProductCategoryList from './model/PaginatedProductCategoryList';
import PaginatedProductList from './model/PaginatedProductList';
import PaginatedQualityCriteriaList from './model/PaginatedQualityCriteriaList';
import PaginatedQualityCriteriaResultList from './model/PaginatedQualityCriteriaResultList';
import PaginatedResultList from './model/PaginatedResultList';
import PaginatedTeamList from './model/PaginatedTeamList';
import PatchedConfigurationTypeRequest from './model/PatchedConfigurationTypeRequest';
import PatchedImageAttributeCategoryRequest from './model/PatchedImageAttributeCategoryRequest';
import PatchedImageAttributeRequest from './model/PatchedImageAttributeRequest';
import PatchedImageRequest from './model/PatchedImageRequest';
import PatchedInspectionRequest from './model/PatchedInspectionRequest';
import PatchedMLModelRequest from './model/PatchedMLModelRequest';
import PatchedMLModelTypeRequest from './model/PatchedMLModelTypeRequest';
import PatchedMetadataRequest from './model/PatchedMetadataRequest';
import PatchedMetadataSchemaRequest from './model/PatchedMetadataSchemaRequest';
import PatchedProductCategoryRequest from './model/PatchedProductCategoryRequest';
import PatchedProductRequest from './model/PatchedProductRequest';
import PatchedQualityCriteriaRequest from './model/PatchedQualityCriteriaRequest';
import PatchedResultRequest from './model/PatchedResultRequest';
import PatchedResultRequestStatus from './model/PatchedResultRequestStatus';
import Product from './model/Product';
import ProductCategory from './model/ProductCategory';
import ProductCategoryRequest from './model/ProductCategoryRequest';
import ProductRequest from './model/ProductRequest';
import QualityCriteria from './model/QualityCriteria';
import QualityCriteriaRequest from './model/QualityCriteriaRequest';
import QualityCriteriaResult from './model/QualityCriteriaResult';
import QualityEnum from './model/QualityEnum';
import Result from './model/Result';
import ResultRequest from './model/ResultRequest';
import StatusEnum from './model/StatusEnum';
import Team from './model/Team';
import TeamRequest from './model/TeamRequest';
import UserAPIKeyCreate from './model/UserAPIKeyCreate';
import UserAPIKeyCreateRequest from './model/UserAPIKeyCreateRequest';
import ValidationStatusEnum from './model/ValidationStatusEnum';
import ApiKeysApi from './api/ApiKeysApi';
import ConfigurationApi from './api/ConfigurationApi';
import ImageApi from './api/ImageApi';
import ImageAttributeApi from './api/ImageAttributeApi';
import ImageAttributeCategoryApi from './api/ImageAttributeCategoryApi';
import InspectionApi from './api/InspectionApi';
import MembershipApi from './api/MembershipApi';
import MetadataApi from './api/MetadataApi';
import MetadataSchemaApi from './api/MetadataSchemaApi';
import MlApi from './api/MlApi';
import ProductApi from './api/ProductApi';
import ProductCategoryApi from './api/ProductCategoryApi';
import QualityCriteriaApi from './api/QualityCriteriaApi';
import ResultApi from './api/ResultApi';
import StatisticsApi from './api/StatisticsApi';
import TeamsApi from './api/TeamsApi';
import UserApi from './api/UserApi';


/**
* VUE Autonomous Visual Inspection System (AVIS).<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ViunAvisClientJs = require('index'); // See note below*.
* var xxxSvc = new ViunAvisClientJs.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ViunAvisClientJs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ViunAvisClientJs.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ViunAvisClientJs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.8.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AzureMLInferenceRequest model constructor.
     * @property {module:model/AzureMLInferenceRequest}
     */
    AzureMLInferenceRequest,

    /**
     * The BlankEnum model constructor.
     * @property {module:model/BlankEnum}
     */
    BlankEnum,

    /**
     * The ConfigurationStatistics model constructor.
     * @property {module:model/ConfigurationStatistics}
     */
    ConfigurationStatistics,

    /**
     * The ConfigurationStatisticsRequest model constructor.
     * @property {module:model/ConfigurationStatisticsRequest}
     */
    ConfigurationStatisticsRequest,

    /**
     * The ConfigurationType model constructor.
     * @property {module:model/ConfigurationType}
     */
    ConfigurationType,

    /**
     * The ConfigurationTypeRequest model constructor.
     * @property {module:model/ConfigurationTypeRequest}
     */
    ConfigurationTypeRequest,

    /**
     * The CustomUser model constructor.
     * @property {module:model/CustomUser}
     */
    CustomUser,

    /**
     * The CustomUserRequest model constructor.
     * @property {module:model/CustomUserRequest}
     */
    CustomUserRequest,

    /**
     * The EmailAddress model constructor.
     * @property {module:model/EmailAddress}
     */
    EmailAddress,

    /**
     * The FormatEnum model constructor.
     * @property {module:model/FormatEnum}
     */
    FormatEnum,

    /**
     * The Image model constructor.
     * @property {module:model/Image}
     */
    Image,

    /**
     * The ImageAttribute model constructor.
     * @property {module:model/ImageAttribute}
     */
    ImageAttribute,

    /**
     * The ImageAttributeCategory model constructor.
     * @property {module:model/ImageAttributeCategory}
     */
    ImageAttributeCategory,

    /**
     * The ImageAttributeCategoryRequest model constructor.
     * @property {module:model/ImageAttributeCategoryRequest}
     */
    ImageAttributeCategoryRequest,

    /**
     * The ImageAttributeRequest model constructor.
     * @property {module:model/ImageAttributeRequest}
     */
    ImageAttributeRequest,

    /**
     * The ImageRequest model constructor.
     * @property {module:model/ImageRequest}
     */
    ImageRequest,

    /**
     * The Inspection model constructor.
     * @property {module:model/Inspection}
     */
    Inspection,

    /**
     * The InspectionImagesStatistics model constructor.
     * @property {module:model/InspectionImagesStatistics}
     */
    InspectionImagesStatistics,

    /**
     * The InspectionImagesStatisticsRequest model constructor.
     * @property {module:model/InspectionImagesStatisticsRequest}
     */
    InspectionImagesStatisticsRequest,

    /**
     * The InspectionRequest model constructor.
     * @property {module:model/InspectionRequest}
     */
    InspectionRequest,

    /**
     * The InspectionStatistics model constructor.
     * @property {module:model/InspectionStatistics}
     */
    InspectionStatistics,

    /**
     * The InspectionStatisticsRequest model constructor.
     * @property {module:model/InspectionStatisticsRequest}
     */
    InspectionStatisticsRequest,

    /**
     * The InspectionValidationStatus model constructor.
     * @property {module:model/InspectionValidationStatus}
     */
    InspectionValidationStatus,

    /**
     * The MLModel model constructor.
     * @property {module:model/MLModel}
     */
    MLModel,

    /**
     * The MLModelRequest model constructor.
     * @property {module:model/MLModelRequest}
     */
    MLModelRequest,

    /**
     * The MLModelType model constructor.
     * @property {module:model/MLModelType}
     */
    MLModelType,

    /**
     * The MLModelTypeRequest model constructor.
     * @property {module:model/MLModelTypeRequest}
     */
    MLModelTypeRequest,

    /**
     * The Membership model constructor.
     * @property {module:model/Membership}
     */
    Membership,

    /**
     * The MembershipRequest model constructor.
     * @property {module:model/MembershipRequest}
     */
    MembershipRequest,

    /**
     * The Metadata model constructor.
     * @property {module:model/Metadata}
     */
    Metadata,

    /**
     * The MetadataRequest model constructor.
     * @property {module:model/MetadataRequest}
     */
    MetadataRequest,

    /**
     * The MetadataSchema model constructor.
     * @property {module:model/MetadataSchema}
     */
    MetadataSchema,

    /**
     * The MetadataSchemaRequest model constructor.
     * @property {module:model/MetadataSchemaRequest}
     */
    MetadataSchemaRequest,

    /**
     * The PaginatedConfigurationStatisticsList model constructor.
     * @property {module:model/PaginatedConfigurationStatisticsList}
     */
    PaginatedConfigurationStatisticsList,

    /**
     * The PaginatedConfigurationTypeList model constructor.
     * @property {module:model/PaginatedConfigurationTypeList}
     */
    PaginatedConfigurationTypeList,

    /**
     * The PaginatedImageAttributeCategoryList model constructor.
     * @property {module:model/PaginatedImageAttributeCategoryList}
     */
    PaginatedImageAttributeCategoryList,

    /**
     * The PaginatedImageAttributeList model constructor.
     * @property {module:model/PaginatedImageAttributeList}
     */
    PaginatedImageAttributeList,

    /**
     * The PaginatedImageList model constructor.
     * @property {module:model/PaginatedImageList}
     */
    PaginatedImageList,

    /**
     * The PaginatedInspectionImagesStatisticsList model constructor.
     * @property {module:model/PaginatedInspectionImagesStatisticsList}
     */
    PaginatedInspectionImagesStatisticsList,

    /**
     * The PaginatedInspectionList model constructor.
     * @property {module:model/PaginatedInspectionList}
     */
    PaginatedInspectionList,

    /**
     * The PaginatedInspectionStatisticsList model constructor.
     * @property {module:model/PaginatedInspectionStatisticsList}
     */
    PaginatedInspectionStatisticsList,

    /**
     * The PaginatedInspectionValidationStatusList model constructor.
     * @property {module:model/PaginatedInspectionValidationStatusList}
     */
    PaginatedInspectionValidationStatusList,

    /**
     * The PaginatedMLModelList model constructor.
     * @property {module:model/PaginatedMLModelList}
     */
    PaginatedMLModelList,

    /**
     * The PaginatedMLModelTypeList model constructor.
     * @property {module:model/PaginatedMLModelTypeList}
     */
    PaginatedMLModelTypeList,

    /**
     * The PaginatedMembershipList model constructor.
     * @property {module:model/PaginatedMembershipList}
     */
    PaginatedMembershipList,

    /**
     * The PaginatedMetadataList model constructor.
     * @property {module:model/PaginatedMetadataList}
     */
    PaginatedMetadataList,

    /**
     * The PaginatedMetadataSchemaList model constructor.
     * @property {module:model/PaginatedMetadataSchemaList}
     */
    PaginatedMetadataSchemaList,

    /**
     * The PaginatedProductCategoryList model constructor.
     * @property {module:model/PaginatedProductCategoryList}
     */
    PaginatedProductCategoryList,

    /**
     * The PaginatedProductList model constructor.
     * @property {module:model/PaginatedProductList}
     */
    PaginatedProductList,

    /**
     * The PaginatedQualityCriteriaList model constructor.
     * @property {module:model/PaginatedQualityCriteriaList}
     */
    PaginatedQualityCriteriaList,

    /**
     * The PaginatedQualityCriteriaResultList model constructor.
     * @property {module:model/PaginatedQualityCriteriaResultList}
     */
    PaginatedQualityCriteriaResultList,

    /**
     * The PaginatedResultList model constructor.
     * @property {module:model/PaginatedResultList}
     */
    PaginatedResultList,

    /**
     * The PaginatedTeamList model constructor.
     * @property {module:model/PaginatedTeamList}
     */
    PaginatedTeamList,

    /**
     * The PatchedConfigurationTypeRequest model constructor.
     * @property {module:model/PatchedConfigurationTypeRequest}
     */
    PatchedConfigurationTypeRequest,

    /**
     * The PatchedImageAttributeCategoryRequest model constructor.
     * @property {module:model/PatchedImageAttributeCategoryRequest}
     */
    PatchedImageAttributeCategoryRequest,

    /**
     * The PatchedImageAttributeRequest model constructor.
     * @property {module:model/PatchedImageAttributeRequest}
     */
    PatchedImageAttributeRequest,

    /**
     * The PatchedImageRequest model constructor.
     * @property {module:model/PatchedImageRequest}
     */
    PatchedImageRequest,

    /**
     * The PatchedInspectionRequest model constructor.
     * @property {module:model/PatchedInspectionRequest}
     */
    PatchedInspectionRequest,

    /**
     * The PatchedMLModelRequest model constructor.
     * @property {module:model/PatchedMLModelRequest}
     */
    PatchedMLModelRequest,

    /**
     * The PatchedMLModelTypeRequest model constructor.
     * @property {module:model/PatchedMLModelTypeRequest}
     */
    PatchedMLModelTypeRequest,

    /**
     * The PatchedMetadataRequest model constructor.
     * @property {module:model/PatchedMetadataRequest}
     */
    PatchedMetadataRequest,

    /**
     * The PatchedMetadataSchemaRequest model constructor.
     * @property {module:model/PatchedMetadataSchemaRequest}
     */
    PatchedMetadataSchemaRequest,

    /**
     * The PatchedProductCategoryRequest model constructor.
     * @property {module:model/PatchedProductCategoryRequest}
     */
    PatchedProductCategoryRequest,

    /**
     * The PatchedProductRequest model constructor.
     * @property {module:model/PatchedProductRequest}
     */
    PatchedProductRequest,

    /**
     * The PatchedQualityCriteriaRequest model constructor.
     * @property {module:model/PatchedQualityCriteriaRequest}
     */
    PatchedQualityCriteriaRequest,

    /**
     * The PatchedResultRequest model constructor.
     * @property {module:model/PatchedResultRequest}
     */
    PatchedResultRequest,

    /**
     * The PatchedResultRequestStatus model constructor.
     * @property {module:model/PatchedResultRequestStatus}
     */
    PatchedResultRequestStatus,

    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product,

    /**
     * The ProductCategory model constructor.
     * @property {module:model/ProductCategory}
     */
    ProductCategory,

    /**
     * The ProductCategoryRequest model constructor.
     * @property {module:model/ProductCategoryRequest}
     */
    ProductCategoryRequest,

    /**
     * The ProductRequest model constructor.
     * @property {module:model/ProductRequest}
     */
    ProductRequest,

    /**
     * The QualityCriteria model constructor.
     * @property {module:model/QualityCriteria}
     */
    QualityCriteria,

    /**
     * The QualityCriteriaRequest model constructor.
     * @property {module:model/QualityCriteriaRequest}
     */
    QualityCriteriaRequest,

    /**
     * The QualityCriteriaResult model constructor.
     * @property {module:model/QualityCriteriaResult}
     */
    QualityCriteriaResult,

    /**
     * The QualityEnum model constructor.
     * @property {module:model/QualityEnum}
     */
    QualityEnum,

    /**
     * The Result model constructor.
     * @property {module:model/Result}
     */
    Result,

    /**
     * The ResultRequest model constructor.
     * @property {module:model/ResultRequest}
     */
    ResultRequest,

    /**
     * The StatusEnum model constructor.
     * @property {module:model/StatusEnum}
     */
    StatusEnum,

    /**
     * The Team model constructor.
     * @property {module:model/Team}
     */
    Team,

    /**
     * The TeamRequest model constructor.
     * @property {module:model/TeamRequest}
     */
    TeamRequest,

    /**
     * The UserAPIKeyCreate model constructor.
     * @property {module:model/UserAPIKeyCreate}
     */
    UserAPIKeyCreate,

    /**
     * The UserAPIKeyCreateRequest model constructor.
     * @property {module:model/UserAPIKeyCreateRequest}
     */
    UserAPIKeyCreateRequest,

    /**
     * The ValidationStatusEnum model constructor.
     * @property {module:model/ValidationStatusEnum}
     */
    ValidationStatusEnum,

    /**
    * The ApiKeysApi service constructor.
    * @property {module:api/ApiKeysApi}
    */
    ApiKeysApi,

    /**
    * The ConfigurationApi service constructor.
    * @property {module:api/ConfigurationApi}
    */
    ConfigurationApi,

    /**
    * The ImageApi service constructor.
    * @property {module:api/ImageApi}
    */
    ImageApi,

    /**
    * The ImageAttributeApi service constructor.
    * @property {module:api/ImageAttributeApi}
    */
    ImageAttributeApi,

    /**
    * The ImageAttributeCategoryApi service constructor.
    * @property {module:api/ImageAttributeCategoryApi}
    */
    ImageAttributeCategoryApi,

    /**
    * The InspectionApi service constructor.
    * @property {module:api/InspectionApi}
    */
    InspectionApi,

    /**
    * The MembershipApi service constructor.
    * @property {module:api/MembershipApi}
    */
    MembershipApi,

    /**
    * The MetadataApi service constructor.
    * @property {module:api/MetadataApi}
    */
    MetadataApi,

    /**
    * The MetadataSchemaApi service constructor.
    * @property {module:api/MetadataSchemaApi}
    */
    MetadataSchemaApi,

    /**
    * The MlApi service constructor.
    * @property {module:api/MlApi}
    */
    MlApi,

    /**
    * The ProductApi service constructor.
    * @property {module:api/ProductApi}
    */
    ProductApi,

    /**
    * The ProductCategoryApi service constructor.
    * @property {module:api/ProductCategoryApi}
    */
    ProductCategoryApi,

    /**
    * The QualityCriteriaApi service constructor.
    * @property {module:api/QualityCriteriaApi}
    */
    QualityCriteriaApi,

    /**
    * The ResultApi service constructor.
    * @property {module:api/ResultApi}
    */
    ResultApi,

    /**
    * The StatisticsApi service constructor.
    * @property {module:api/StatisticsApi}
    */
    StatisticsApi,

    /**
    * The TeamsApi service constructor.
    * @property {module:api/TeamsApi}
    */
    TeamsApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};
