import {authActions} from "../actions/authActions";
import type {IReduxAction} from "../../react-app-env";

const initState = {
  userDetails: null
};

const authReducer = (state = initState, action: IReduxAction) => {
  switch (action.type) {
    case authActions.SET_USER_DETAILS:
      return {...state, userDetails: action.payload};
    default:
      return state;
  }
};

export default authReducer;