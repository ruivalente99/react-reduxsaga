import { combineReducers } from "redux";
import issues from "./issues";

const rootReducer = combineReducers({
  issues: issues,
});

export default rootReducer;
