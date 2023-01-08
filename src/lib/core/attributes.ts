import { JsonApiValue } from './value';

export type JsonApiAttributesObject<A extends Record<string, JsonApiValue> = Record<string, JsonApiValue>> = {
  [K in keyof A]: A[K];
};
