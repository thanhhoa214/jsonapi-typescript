import { JsonApiIncluded, JsonApiPrimaryData } from '../core';
import { JsonApiDocBase } from './base';

export interface JsonApiDocWithData<T extends JsonApiPrimaryData = JsonApiPrimaryData> extends JsonApiDocBase {
  data: T;
  included?: JsonApiIncluded;
}
