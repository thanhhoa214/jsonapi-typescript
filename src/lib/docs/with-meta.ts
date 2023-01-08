import { JsonApiMetaObject } from '../core';
import { JsonApiDocBase } from './base';

export interface JsonApiDocWithMeta extends JsonApiDocBase {
  meta: JsonApiMetaObject;
}
