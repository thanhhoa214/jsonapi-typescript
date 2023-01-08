import { JsonApiAttributesObject, JsonApiPrimaryData } from '../core';
import { JsonApiDocWithData } from '../docs';
import { JsonApiDataTypeEnum, JsonApiHttpDataTypeEnum } from '../enums';

export type JsonApiResponse<T extends JsonApiAttributesObject = JsonApiAttributesObject>
  = JsonApiDocWithData<JsonApiPrimaryData<string, T, JsonApiDataTypeEnum.Object, JsonApiHttpDataTypeEnum.Response>>;
