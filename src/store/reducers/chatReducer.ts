import {chatActions} from "../actions/chatActions";
import {IChatActionPayload, IReduxAction} from "../../react-app-env";

const initState = {
  chosenChatDetails: null,
  chatType: null,
  messages: []
};

const chatReducer = (state = initState, action: IReduxAction) => {
  switch (action.type) {
    case chatActions.SET_CHOSEN_CHAT_DETAILS:
      const payload = action.payload as IChatActionPayload;
      return {
        ...state,
        chosenChatDetails: payload.chatDetails,
        chatType: payload.chatType,
        messages: [],
      };
    case chatActions.SET_MESSAGES:
      return {
        ...state,
        messages: action.payload
      };
    default:
      return state;
  }
};

export default chatReducer;