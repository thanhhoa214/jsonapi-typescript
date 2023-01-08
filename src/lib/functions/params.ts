import {
  JsonApiParamFieldset,
  JsonApiParamFiltering,
  JsonApiParamInclusion,
  JsonApiParamPagination,
  JsonApiParamPaginationOption,
  JsonApiParams,
  JsonApiParamSorting
} from '../params';
import { JsonApiPrimitiveBase } from '../core';

export function transformParams(params: JsonApiParams = {}): Record<string, JsonApiPrimitiveBase> {
  const map: Record<string, JsonApiPrimitiveBase> = {};

  const { filtering, pagination, sorting, inclusion, fieldset } = params;

  if (filtering) {
    Object.assign(map, transformParamFiltering(filtering));
  }

  if (pagination) {
    Object.assign(map, transformParamPagination(pagination));
  }

  if (sorting) {
    Object.assign(map, transformParamSorting(sorting));
  }

  if (inclusion) {
    Object.assign(map, transformParamInclusion(inclusion));
  }

  if (fieldset) {
    Object.assign(map, transformParamFieldset(fieldset));
  }

  return map;
}

export function transformParamInclusion(inclusion: JsonApiParamInclusion): Record<string, JsonApiPrimitiveBase> {
  const map: Record<string, JsonApiPrimitiveBase> = {};

  for (const key in inclusion) {
    const fields: string[][] = inclusion[key];
    map[`include[${key}]`] = fields.map((depth) => depth.join('.')).join(',');
  }

  return map;
}

export function transformParamSorting(sorting: JsonApiParamSorting): Record<string, JsonApiPrimitiveBase> {
  const map: Record<string, JsonApiPrimitiveBase> = {};

  const { direction, fieldNames } = sorting;

  map['sort'] = `${direction}${fieldNames.join(',')}`;

  return map;
}

export function transformParamFieldset(fieldset: JsonApiParamFieldset): Record<string, JsonApiPrimitiveBase> {
  const map: Record<string, JsonApiPrimitiveBase> = {};

  for (const key in fieldset) {
    const fields: string[] = fieldset[key];
    map[`fields[${key}]`] = fields.join(',');
  }

  return map;
}

export function transformParamFiltering(filtering: JsonApiParamFiltering): Record<string, JsonApiPrimitiveBase> {
  const map: Record<string, JsonApiPrimitiveBase> = {};

  for (const key in filtering) {
    const { type, value, or } = filtering[key];
    const filterKey = or ? `${key}_${or.join('_')}` : `${key}`;
    map[`filter[${filterKey}_${type}]`] = value;
  }

  return map;
}

export function transformParamPagination(pagination: JsonApiParamPagination): Record<string, JsonApiPrimitiveBase> {
  const map: Record<string, JsonApiPrimitiveBase> = {};

  for (const key in pagination) {
    map[`page[${key}]`] = pagination[key as JsonApiParamPaginationOption] as JsonApiPrimitiveBase;
  }

  return map;
}
