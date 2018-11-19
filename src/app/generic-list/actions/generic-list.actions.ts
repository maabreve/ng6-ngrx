import { Action } from '@ngrx/store';

export enum GenericListActionTypes {
    SEARCH = 'Search',
    PAGINATION = 'Pagination'
}


export class LoadSearch implements Action {
    readonly type = GenericListActionTypes.SEARCH;
    constructor(public payload?: any) {
    }
}

export class LoadPagination implements Action {
    readonly type = GenericListActionTypes.PAGINATION;
    constructor(public payload?: any) { }
}

export type Actions
  = LoadSearch
  | LoadPagination;
