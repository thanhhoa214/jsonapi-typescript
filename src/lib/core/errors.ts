import { JsonApiMetaObject } from './meta';
import { JsonApiLinks } from './links';

export interface JsonApiErrorObject {
  id?: number | string;
  links?: JsonApiLinks;
  status?: string;
  code?: string;
  title?: string;
  detail?: string;
  source?: {
    pointer?: never;
    parameter?: string;
  };
  meta?: JsonApiMetaObject;
}

export type JsonApiErrors = JsonApiErrorObject[];
