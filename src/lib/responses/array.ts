import { JsonApiAttributesObject, JsonApiPrimaryData } from '../core';
import { JsonApiDocWithData } from '../docs';
import { JsonApiDataTypeEnum, JsonApiHttpDataTypeEnum } from '../enums';


export type JsonApiResponseArray<T extends JsonApiAttributesObject = JsonApiAttributesObject>
  = JsonApiDocWithData<JsonApiPrimaryData<string, T, JsonApiDataTypeEnum.Array, JsonApiHttpDataTypeEnum.Response>>;
