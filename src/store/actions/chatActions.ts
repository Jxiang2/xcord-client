import {Dispatch} from "@reduxjs/toolkit";

export const chatTypes = {
  DIRECT: "DIRECT",
  GROUP: "GROUP"
};

export const chatActions = {
  SET_CHOSEN_CHAT_DETAILS: "CHAT.SET_CHOSEN_CHAT_DETAILS",
  SET_MESSAGES: "CHAT.SET_MESSAGES",
  SET_CHAT_TYPE: "CHAT.SET_CHAT_TYPE",
};

export const getActions = (dispatch: Dispatch) => {
  return {
    setChosenChatDetailsAction:
      (details: { id: string, name: string }, chatType: string) => dispatch(setChosenChatDetails(details, chatType)),
  };
};

export const setChosenChatDetails = (chatDetails: { id: string, name: string }, type: string) => {
  return {
    type: chatActions.SET_CHOSEN_CHAT_DETAILS,
    chatType: type,
    chatDetails: chatDetails,
  };
};

export const setMessages = (messages: Array<any>) => {
  return {
    type: chatActions.SET_MESSAGES,
    messages: messages,
  };
};