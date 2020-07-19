import authReducer from "./authReducer";
import supplementReducer from "./supplementReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  supplement: supplementReducer,
});

export default rootReducer;
