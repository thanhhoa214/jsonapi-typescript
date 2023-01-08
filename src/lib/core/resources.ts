import { JsonApiAttributesObject } from './attributes';
import { JsonApiMetaObject } from './meta';
import { JsonApiLinks } from './links';

export interface JsonApiResourceObjectBase<T extends string = string,
  A extends JsonApiAttributesObject = JsonApiAttributesObject> {
  type: T;
  attributes?: JsonApiAttributesObject<A>;
  relationships?: JsonApiRelationshipsObject;
  links?: JsonApiLinks;
  meta?: JsonApiMetaObject;
}

export interface JsonApiResourceObject<T extends string = string,
  A extends JsonApiAttributesObject = JsonApiAttributesObject> extends JsonApiResourceObjectBase<T, A> {
  id: string;
}

export interface JsonApiResourceIdentifierObject<T extends string = string> {
  id: string;
  type: T;
  meta?: JsonApiMetaObject;
}

export type JsonApiResourceLinkage =
  | null
  | never[]
  | JsonApiResourceIdentifierObject
  | JsonApiResourceIdentifierObject[];

export interface JsonApiRelationshipsWithLinks {
  links: JsonApiLinks;
}

export interface JsonApiRelationshipsWithData {
  data: JsonApiResourceLinkage;
}

export interface JsonApiRelationshipsWithMeta {
  meta: JsonApiMetaObject;
}

export type JsonApiRelationshipsObject = Record<string, JsonApiRelationshipsWithData | JsonApiRelationshipsWithLinks | JsonApiRelationshipsWithMeta>;
