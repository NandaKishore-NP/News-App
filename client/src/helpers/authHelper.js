// import { initiateSocketConnection } from "./socketHelper";

// const isLoggedIn = () => {
//   return JSON.parse(localStorage.getItem("user"));
// };

// const loginUser = (user) => {
//   localStorage.setItem("user", JSON.stringify(user));
//   initiateSocketConnection();
// };

// const logoutUser = () => {
//   localStorage.removeItem("user");
//   initiateSocketConnection();
// };

// export { loginUser, isLoggedIn, logoutUser };

import { initiateSocketConnection } from "./socketHelper";

const isLoggedIn = () => {
    const user = localStorage.getItem("user");
    try {
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error("Error parsing user data:", error);
      return null;
    }
  };
  
  const loginUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    initiateSocketConnection();
  };
  
  const logoutUser = () => {
    localStorage.removeItem("user");
    initiateSocketConnection();
  };
  
  export { loginUser, isLoggedIn, logoutUser };