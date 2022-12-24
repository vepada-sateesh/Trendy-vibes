/*
Dont make any changes to this file
*/

import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import {reducer as ProductReducer} from "./ProductReducer/reducer"

const rootReducer = combineReducers({
  auth: authReducer,
  ProductReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
