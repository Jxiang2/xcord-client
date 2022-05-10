import {composeWithDevTools} from "redux-devtools-extension"; // browser devtools
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";
import friendsReducer from "./reducers/friendsReducer";
import chatReducer from "./reducers/chatReducer";

// add reducers
const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  friends: friendsReducer,
  chat: chatReducer
});

// initialize store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;