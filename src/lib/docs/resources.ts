import { JsonApiResourceObject, JsonApiValue } from '../core';
import { JsonApiDocWithErrors } from './with-error';
import { JsonApiDocWithMeta } from './with-meta';
import { JsonApiDocWithData } from './with-data';

export type JsonApiResourceDoc = JsonApiDocWithErrors | JsonApiDocWithMeta | JsonApiDocWithData;

export type JsonApiSingleResourceDoc<T extends string = string, A extends Record<string, JsonApiValue> = Record<string, JsonApiValue>> = JsonApiDocWithData<JsonApiResourceObject<T, A>>;

export type JsonApiCollectionResourceDoc<T extends string = string, A extends Record<string, JsonApiValue> = Record<string, JsonApiValue>> = JsonApiDocWithData<Array<JsonApiResourceObject<T, A>>>;
