import { JsonApiObject } from './value';
import { JsonApiPagination } from './pagination';

export type JsonApiMetaObject = JsonApiObject & { pagination: JsonApiPagination };
