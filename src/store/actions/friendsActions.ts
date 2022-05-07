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
      (data: { targetMail: string }, handleCloseDialog: () => void) => dispatch(sendFriendInvite(data, handleCloseDialog)),
    acceptFriendInviteAction:
      (data: { id: string }) => dispatch(acceptFriendInvite(data)),
    rejectFriendInviteAction:
      (data: { id: string }) => dispatch(rejectFriendInvite(data)),
  };
};

const acceptFriendInvite = (data: { id: string }) => {
  return async (dispatch: Dispatch) => {
    const response: any = await api.acceptFriendInvite(data);
    console.log(response);

    if (response?.error) {
      dispatch(openAlertMessage({message: response.exception?.response?.data}));
    } else {
      dispatch(openAlertMessage({message: "Invitation accepted"}));
    }
  };
};

const rejectFriendInvite = (data: { id: string }) => {
  return async (dispatch: Dispatch) => {
    const response: any = await api.rejectFriendInvite(data);

    if (response?.error) {
      dispatch(openAlertMessage({message: response.exception?.response?.data}));
    } else {
      dispatch(openAlertMessage({message: "Invitation rejected"}));
    }
  };
};

export const setPendingFriendsInvite = (pendingFriendsInvites: any) => {
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INVITES,
    payload: pendingFriendsInvites
  };
};

const sendFriendInvite = (data: { targetMail: string }, handleCloseDialog: () => void) => {
  return async (dispatch: Dispatch) => {
    const response: any = await api.sendFriendInvite(data);

    if (response?.error) {
      dispatch(openAlertMessage({message: response.exception?.response?.data}));
    } else {
      dispatch(openAlertMessage({message: "Invitation has been sent"}));
      handleCloseDialog();
    }
  };
};

