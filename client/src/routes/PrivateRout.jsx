import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const PrivateRout = ({ roles }) => {
  const { role } = useContext(UserContext);
  console.log(role);
  console.log(roles);
  const isAuthorized = roles?.includes(role);
  return isAuthorized ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRout;
