import * as actions from "../actions/searchActions";

export const initialState = {
  artSearch: [],
  loading: false,
  pageError: false,
};

export default function artSearchReducers(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ARTSEARCH:
      return { ...state, loading: true };
    case actions.GET_ARTSEARCH_SUCCESS:
      return { artSearch: action.payload, loading: false, pageError: false };
    case actions.GET_ARTSEARCH_FAIL:
      return { ...state, loading: false, pageError: true };
    default:
      return state;
  }
}
