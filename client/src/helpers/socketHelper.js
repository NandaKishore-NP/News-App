import { io } from "socket.io-client";
import { BASE_URL } from "../config";
import { isLoggedIn } from "./authHelper";

export let socket;

export const initiateSocketConnection = () => {
  const user = isLoggedIn();

  if (user) {
    socket = io(BASE_URL, {
      auth: {
        token: user.token,
      },
    });
  } else {
    // Handle the case when the user is not logged in
    // For example, you can choose to not initiate the socket connection
    console.log("User is not logged in");
  }
};

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
};