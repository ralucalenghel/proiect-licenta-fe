import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import App from "./App";
import servicesReducer from "./store/reducers/services";
import serviceReducer from "./store/reducers/service";
import operationsReducer from "./store/reducers/operations";
import operationReducer from "./store/reducers/operation";
import serviceLogReducer from "./store/reducers/serviceLog";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

export const serviceUrl = "http://localhost:8080/api/";
export const operationsUrl = "http://localhost:8080/api/";

// const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

const rootReducer = combineReducers({
  services: servicesReducer,
  service: serviceReducer,
  operations: operationsReducer,
  serviceLog: serviceLogReducer,
  operationList: operationReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
reportWebVitals();
