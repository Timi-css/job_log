import { Route, Navigate } from "react-router-dom";
import { useUser } from "../auth/useUser";

import React from "react";
export const PrivateRoute = (props) => {
  const user = useUser();

  if (!user) <Navigate to="/login" />;

  return <Route {...props} />;
};
