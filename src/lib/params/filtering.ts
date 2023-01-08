import { JsonApiPrimitiveBase } from '../core';
import { JsonApiParamFilterTypeEnum } from '../enums';

export type JsonApiParamFilteringData = {
  type: JsonApiParamFilterTypeEnum;
  value: JsonApiPrimitiveBase;
  or?: string[];
}

export type JsonApiParamFiltering = Record<string, JsonApiParamFilteringData>;
