export interface JsonApiPagination {
  first?: number; // the first page of data
  last?: number; // the last page of data
  prev?: number; // the previous page of data
  next?: number; // the next page of data
  current?: number; // the current page of data
  records?: number; // the total page of data
}
