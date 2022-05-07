import {Dispatch} from "@reduxjs/toolkit";
import {openAlertMessage} from "./alertAction";
import api from "../../utils/api";
import {Friends, IPendingInvite} from "../../react-app-env";

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIENDS_INVITES: "FRIENDS.SET_PENDING_FRIENDS_INVITES",
  SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS"
};

export const getActions = (dispatch: Dispatch<any>) => {
  return {
    sendFriendInviteAction:
      (data: { targetMail: string }) => dispatch(sendFriendInvite(data)),
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
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage({message: "Invitation accepted"}));
    }
  };
};

const rejectFriendInvite = (data: { id: string }) => {
  return async (dispatch: Dispatch) => {
    const response: any = await api.rejectFriendInvite(data);
    console.log(response);

    if (response?.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage({message: "Invitation rejected"}));
    }
  };
};

export const setPendingFriendsInvites = (pendingFriendsInvites: IPendingInvite[]) => {
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INVITES,
    payload: pendingFriendsInvites
  };
};

export const setFriends = (friends: Friends) => {
  console.log(friends);
  return {
    type: friendsActions.SET_FRIENDS,
    payload: friends
  };
};

const sendFriendInvite = (data: { targetMail: string }) => {
  return async (dispatch: Dispatch) => {
    const response: any = await api.sendFriendInvite(data);

    if (response?.error) {
      console.log(response.exception?.response?.data);
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage({message: "Invitation has been sent"}));
    }
  };
};

