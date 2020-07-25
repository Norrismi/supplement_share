import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./components/Store/Reducers";

import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance,
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebaseConfig from "./config/firebaseConfig";
import firebase from "firebase/app";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, firebaseConfig),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}


const rrfProps = {
  firebase,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance
};



ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();


// const store = createStore(
//   rootReducer,
//   {},
//   compose(
//     applyMiddleware(
//       ReduxThunk.withExtraArgument({ getFirebase, getFirestore })),
//     reduxFirestore(firebase, firebaseConfig),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// //construct required properties
// const profileSpecificProps = {
//   userProfile: 'users',
//   userFirestoreForProfile: true,
//   enableRedirectHandling: false,
//   resetBeforeLogin: false
// }


// // second congig property added
// const rrfProps = {
//   firebase,
//   //config: firebaseConfig,
//   config: profileSpecificProps,
//   dispatch: store.dispatch,
//   createFirestoreInstance
// };

// ReactDOM.render(
//   <Provider store={store}>
//     <ReactReduxFirebaseProvider {...rrfProps}>
     
//         <App />
   
//     </ReactReduxFirebaseProvider>
//   </Provider>,
//   document.getElementById("root")
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


