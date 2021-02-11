import { combineReducers } from "redux";
import artDeptReducers from "./artDeptReducers";

const rootReducer = combineReducers({
  posts: artDeptReducers,
});

export default rootReducer;
