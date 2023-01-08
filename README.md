# JSONAPI following jsonapi.org documentation

Example usage:

```ts
import {
  JsonApiParams,
  JsonApiResponseArray,
  transformParams,
} from 'jsonapi-typescript';

export interface SampleEntity extends Record<string, JsonApiPrimitive> {
  address: string;
  currency: string;
  network: string;
}

export type SampleResponse = JsonApiResponseArray<SampleEntity>;

const params: JsonApiParams = {};
fetch('/', { params });
```
