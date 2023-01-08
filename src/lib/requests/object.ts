import { JsonApiAttributesObject, JsonApiPrimaryData } from '../core';
import { JsonApiDocWithData } from '../docs';
import { JsonApiDataTypeEnum, JsonApiHttpDataTypeEnum } from '../enums';

export type JsonApiRequest<T extends JsonApiAttributesObject = JsonApiAttributesObject>
  = JsonApiDocWithData<JsonApiPrimaryData<string, T, JsonApiDataTypeEnum.Object, JsonApiHttpDataTypeEnum.Request>>;
