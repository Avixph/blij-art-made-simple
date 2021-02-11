import * as actions from "../actions/deptActions";

export const initialState = {
  artDept: [],
  loading: false,
  pageError: false,
};

export default function artDeptReducers(state = initialState, action) {
  switch (action.type) {
    case actions.Get_ArtDept:
      return { ...state, loading: true };
    case actions.Get_ArtDept_Success:
      return { artDept: action.payload, loading: false, pageError: false };
    case actions.Get_ArtDept_Fail:
      return { ...state, loading: false, pageError: true };

    default:
      return state;
  }
}
