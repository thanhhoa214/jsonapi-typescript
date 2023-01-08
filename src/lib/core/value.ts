export type JsonApiPrimitiveBase = string | number | boolean;

export type JsonApiPrimitive = JsonApiPrimitiveBase | null | undefined;

export interface JsonApiObject {
  [member: string]: JsonApiValue;
}
export type JsonApiArray = Array<JsonApiValue>

export type JsonApiValue = JsonApiPrimitive | JsonApiObject | JsonApiArray;
