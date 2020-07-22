import authReducer from "./authReducer";
import supplementReducer from "./supplementReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  supplement: supplementReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
