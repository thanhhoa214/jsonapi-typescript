import { JsonApiMetaObject } from './meta';

export type JsonApiLink = string | { href: string; meta?: JsonApiMetaObject };

export interface JsonApiLinks {
  self?: JsonApiLink; // the link that generated the current response document.
  related?: JsonApiLink; // a related resource link when the primary data represents a resource relationship.
}

export interface JsonApiPaginationLinks {
  first?: JsonApiLink | null; // the first page of data
  last?: JsonApiLink | null; // the last page of data
  prev?: JsonApiLink | null; // the previous page of data
  next?: JsonApiLink | null; // the next page of data
  current?: JsonApiLink | null; // the current page of data
}
