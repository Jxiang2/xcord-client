import type {Socket} from "socket.io-client";
import io from "socket.io-client";
import {IDirectMessageData, UserDetails} from "../react-app-env";
import store from "../store/store";
import {
  setFriends,
  setOnlineUsers,
  setPendingFriendsInvites
} from "../store/actions/friendsActions";

let socket: Socket | null = null;

export const connectWithSocketServer = (userDetails: UserDetails) => {
  const additionalInfo = {auth: {token: userDetails?.token}};

  // connecting to socket server on localhost:8000
  socket = io("http://localhost:8080", additionalInfo);

  // events
  socket.on("connect", () => {
    console.log(socket, "connected to socket io server");
  });

  socket.on("friends-invitations", (data) => {
    const {pendingInvites} = data;
    store.dispatch(setPendingFriendsInvites(pendingInvites));
  });

  socket.on("friend-list", data => {
    const {friends} = data;
    store.dispatch(setFriends(friends));
  });

  socket.on("online-users", (data) => {
    const {onlineUsers} = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  });
};

// client emitters
export const sendDirectMessage = (data: IDirectMessageData) => {
  console.log(data);
  socket?.emit("direct-message", data);
};
