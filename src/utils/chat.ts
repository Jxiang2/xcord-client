import store from "../store/store";
import {IChatBetweenUsers, IReduxState} from "../react-app-env";
import {setMessages} from "../store/actions/chatActions";

export const updateChatHistoryIfActive = (data: IChatBetweenUsers) => {
  const {participants, messages} = data;
  const storeStates = store.getState() as IReduxState;
  const userID = storeStates.auth.userDetails?._id;

  if (participants.length === 2) {
    // direct message between 2 users
    const receiverId = storeStates.chat.chosenChatDetails?.id;

    // check if the userId is online & check if the conversation scope is correct
    if (receiverId && userID) {
      const usersInConversation = [receiverId, userID];

      const result = participants.every((participantId: string) => {
        return usersInConversation.includes(participantId);
      });

      if (result) {
        store.dispatch(setMessages(messages));
      }
    }
  } else {
    // TODO
    // group message between multiple users
  }

};
