import { GenericListActionTypes } from '../actions/generic-list.actions';

export interface State {
  searchText: string;
  pagination: number;
}

export const initialState: State = {
  searchText: '',
  pagination: 0
};

export const genericListReducer = (state: State = initialState, action): State => {
  switch (action.type) {
    case GenericListActionTypes.SEARCH:
      const newGenericListSearch = Object.assign({}, state, { searchText: action.payload });
      console.log('generic list reducer', newGenericListSearch);
      return Object.assign({}, state, newGenericListSearch);
    case GenericListActionTypes.PAGINATION:
      const newGenericListPagination = Object.assign({}, state, { pagination: action.payload });
      console.log('generic list reducer', newGenericListPagination);
      return Object.assign({}, state,  newGenericListPagination);
    default:
    console.log('default reducer');
    return state;
  }
};

export const getSearchText = (state: State) => state.searchText;
export const getPagination = (state: State) => state.pagination;

