import { JsonApiDocBase } from './base';
import { JsonApiErrors } from '../core';

export interface JsonApiDocWithErrors extends JsonApiDocBase {
  errors: JsonApiErrors;
}
