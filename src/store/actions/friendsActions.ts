import {Dispatch} from "@reduxjs/toolkit";
import {openAlertMessage} from "./alertAction";
import api from "../../utils/api";

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIENDS_INVITES: "FRIENDS.SET_PENDING_FRIENDS_INVITES",
  SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS"
};

export const getActions = (dispatch: Dispatch<any>) => {
  return {
    sendFriendInviteAction:
      (data: { mail: string }, closeDialogHandler: () => void) => dispatch(sendFriendInvite(data, closeDialogHandler))
  };
};

const sendFriendInvite = (data: { mail: string }, closeDialogHandler: () => void) => {
  return async (dispatch: Dispatch) => {
    const response: any = await api.sendFriendInvite(data);

    if (response?.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("Invitation has been sent"));
      closeDialogHandler();
    }
  };
};

