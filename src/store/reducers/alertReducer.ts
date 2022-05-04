import {IReduxAction} from "../../react-app-env";
import {alertActions} from "../actions/alertAction";

const initState = {
  showAlert: false,
  alertContent: null
};

const alertReducer = (state = initState, action: IReduxAction) => {
  switch (action.type) {
    case alertActions.OPEN_ALERT_MESSAGE:
      console.log(action.payload);
      return {...state, showAlert: true, alertContent: action.payload};
    case alertActions.CLOSE_ALERT_MESSAGE:
      return {...state, showAlert: false, alertContent: null};
    default:
      return state;
  }
};

export default alertReducer;