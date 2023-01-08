import { JsonApiImplementationInfo, JsonApiLinks, JsonApiMetaObject, JsonApiPaginationLinks } from '../core';

export interface JsonApiDocBase {
  jsonapi?: JsonApiImplementationInfo;
  links?: JsonApiLinks | JsonApiPaginationLinks;
  meta?: JsonApiMetaObject;
}
