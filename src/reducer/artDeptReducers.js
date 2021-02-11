import * as actions from "../actions/deptActions";

export const initialState = {
  artDept: [],
  loading: false,
  pageError: false,
};

export default function artDeptReducers(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ARTDEPT:
      return { ...state, loading: true };
    case actions.GET_ARTDEPT_SUCCESS:
      return { artDept: action.payload, loading: false, pageError: false };
    case actions.GET_ARTDEPT_FAIL:
      return { ...state, loading: false, pageError: true };

    default:
      return state;
  }
}
