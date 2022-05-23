import store from "../store/store";
import {IChatBetweenUsers, IReduxState} from "../react-app-env";
import {setMessages} from "../store/actions/chatActions";

export const updateDirectChatHistoryIfActive = (data: IChatBetweenUsers) => {
  const {participants, messages} = data;
  const storeStates = store.getState() as IReduxState;

  const receiverId = storeStates.chat.chosenChatDetails?.id;
  const userID = storeStates.auth.userDetails?._id;

  // check if the userId is online & check if the scope of conversation is correct
  if (receiverId && userID) {
    const usersInConversation = [receiverId, userID];

    const result = participants.every((participantId: string) => {
      return usersInConversation.includes(participantId);
    });

    if (result) {
      store.dispatch(setMessages(messages));
    }
  }
};
