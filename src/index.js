import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";

import { Provider } from "react-redux";

// Reducer - holds state
// function widgetReducer(
//   state = [{ name: "First Widget" }, { name: "Second Widget" }],
//   action
// ) {
//   switch (action.type) {
//     case "CREATE_WIDGET":
//       return state.concat(action.payload);
//     default:
//       return state;
//   }
// }

// function messageReducer(state= {message: ''}, action) {
//   case "USER_FETCH_SUCCESSFUL":
//     return {...state, message: 'User fetched successfully'}
// }

// function githubReducer(state = { users: [], error: "" }, action) {
//   switch (action.type) {
//     case "USER_FETCH_SUCCESSFUL":
//       return { ...state, users: state.users.concat(action.payload) };
//     case "USER_FETCH_ERROR":
//       return { ...state, error: action.payload };
//     default:
//       return state;
//   }
// }

// const rootReducer = combineReducers({
//   github: githubReducer,
//   widgets: widgetReducer,
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// let store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
