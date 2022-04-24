import { composeWithDevTools } from "redux-devtools-extension"; // browser devtools
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";

// add reducers
const rootReducer = combineReducers({
  auth: authReducer,
});

// initialize store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;