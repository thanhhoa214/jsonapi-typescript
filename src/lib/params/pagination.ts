import { JsonApiPrimitive } from '../core';

export type JsonApiParamPaginationOption = 'size' | 'number' | 'limit' | 'offset' | 'cursor';

export type JsonApiParamPagination = Record<JsonApiParamPaginationOption, JsonApiPrimitive>;
