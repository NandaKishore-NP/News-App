import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.jsx";
import PostView from "./pages/views/PostView.jsx";
import CreatePostView from "./pages/views/CreatePostView.jsx";
import ProfileView from "./pages/views/ProfileView.jsx";
import LoginView from "./pages/views/LoginView.jsx";
import SignupView from "./pages/views/SignupView.jsx";
import ExploreView from "./pages/views/ExploreView.jsx";
import PrivateRoute from "./pages/PrivateRoute.jsx";
import SearchView from "./pages/views/SearchView.jsx";
import MessengerView from "./pages/views/MessengerView.jsx";
import { initiateSocketConnection } from "./helpers/socketHelper.js";

function App() {
  initiateSocketConnection();

  return React.createElement(
    ThemeProvider,
    { theme: theme },
    React.createElement(
      BrowserRouter,
      null,
      React.createElement(
        React.Fragment,
        null,
        React.createElement(CssBaseline, null),
        React.createElement(
          Routes,
          null,
          React.createElement(Route, {
            path: "/",
            element: React.createElement(ExploreView, null),
          }),
          React.createElement(Route, {
            path: "/posts/:id",
            element: React.createElement(PostView, null),
          }),
          React.createElement(Route, {
            path: "/posts/create",
            element: React.createElement(
              PrivateRoute,
              null,
              React.createElement(CreatePostView, null)
            ),
          }),
          React.createElement(Route, {
            path: "/messenger",
            element: React.createElement(
              PrivateRoute,
              null,
              React.createElement(MessengerView, null)
            ),
          }),
          React.createElement(Route, {
            path: "/search",
            element: React.createElement(SearchView, null),
          }),
          React.createElement(Route, {
            path: "/users/:id",
            element: React.createElement(ProfileView, null),
          }),
          React.createElement(Route, {
            path: "/login",
            element: React.createElement(LoginView, null),
          }),
          React.createElement(Route, {
            path: "/signup",
            element: React.createElement(SignupView, null),
          })
        )
      )
    )
  );
}

export default App;
