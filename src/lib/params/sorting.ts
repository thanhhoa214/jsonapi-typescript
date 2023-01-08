import { JsonApiParamSortDirectionEnum } from '../enums';

export type JsonApiParamSortingData = {
  direction: JsonApiParamSortDirectionEnum;
  fieldNames: string[];
}

export type JsonApiParamSorting = JsonApiParamSortingData;
