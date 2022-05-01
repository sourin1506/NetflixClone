import React, { useContext } from "react";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
import { LoggedContext } from "../context/loggedstatus";

const ProtectedRoute = ({ children, ...rest }) => {
  const { islogged } = useContext(LoggedContext);
  return islogged ? children : <Navigate to="/signup" {...rest} />;
};

export default ProtectedRoute;
