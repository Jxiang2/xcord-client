import type {Socket} from "socket.io-client";
import io from "socket.io-client";
import {UserDetails} from "../react-app-env";

let socket: Socket | null = null;

export const connectWithSocketServer = (userDetails: UserDetails) => {
  const additionalInfo = {
    auth: {token: userDetails?.token}
  };

  // connecting to socket server on localhost:8000
  socket = io("http://localhost:8080", additionalInfo);

  // events
  socket.on("connect", () => console.log(socket, "connected to socket io server"));
};
