import { JsonApiResourceObject, JsonApiResourceObjectBase } from './resources';
import { JsonApiAttributesObject } from './attributes';
import { JsonApiDataTypeEnum, JsonApiHttpDataTypeEnum } from '../enums';

export type JsonApiPrimaryData<T extends string = string,
  A extends JsonApiAttributesObject = JsonApiAttributesObject,
  F extends JsonApiDataTypeEnum = JsonApiDataTypeEnum, H extends JsonApiHttpDataTypeEnum = JsonApiHttpDataTypeEnum> = F extends JsonApiDataTypeEnum.Object
  ? (H extends JsonApiHttpDataTypeEnum.Response ? JsonApiResourceObject<T, A> : JsonApiResourceObjectBase<T, A>)
  : (H extends JsonApiHttpDataTypeEnum.Response ? Array<JsonApiResourceObject<T, A>> : Array<JsonApiResourceObjectBase<T, A>>);
