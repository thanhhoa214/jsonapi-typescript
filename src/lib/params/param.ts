import { JsonApiParamFieldset } from './fieldset';
import { JsonApiParamPagination } from './pagination';
import { JsonApiParamSorting } from './sorting';
import { JsonApiParamInclusion } from './inclusion';
import { JsonApiParamFiltering } from './filtering';

export interface JsonApiParams {
  fieldset?: JsonApiParamFieldset;
  pagination?: JsonApiParamPagination;
  sorting?: JsonApiParamSorting;
  inclusion?: JsonApiParamInclusion;
  filtering?: JsonApiParamFiltering;
}
