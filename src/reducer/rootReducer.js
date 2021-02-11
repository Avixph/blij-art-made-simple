import { combineReducers } from "redux";
import artDeptReducers from "./artDeptReducers";

const rootReducer = combineReducers({
  artDept: artDeptReducers,
});

export default rootReducer;
