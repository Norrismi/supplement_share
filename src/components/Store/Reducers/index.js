import authReducer from "./authReducer";
import supplementReducer from "./supplementReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  supplement: supplementReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
