import axios from "axios";
import React, { useState, Children, useEffect } from "react";
import { DashboardService } from "../services";

export const AuthenticationContext = React.createContext({
  isLoggedIn: false,
  user: null,
  login: (_) => null,
  logout: () => null,
  dashboardData: null,
});

export const AuthenticationProvider = (props) => {
  const [user, setUser] = useState();
  const [dashboardData, setDashboardData] = useState();

  const login = async (user) => {
    axios.defaults.headers["Authorization"] =
      "Bearer " + (await window.localStorage.getItem("AccessToken"));
    setUser(user);
    return Promise.resolve(true);
  };

  const logout = async () => {
    await window.localStorage.removeItem("User");
    await window.localStorage.removeItem("AccessToken");
    axios.defaults.headers["Authorization"] = null;
    setUser(null);
    return Promise.resolve(true);
  };

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  return (
    <AuthenticationContext.Provider
      value={{ login, logout, user, isLoggedIn: !!user, dashboardData }}
    >
      {Children.only(props.children)}
    </AuthenticationContext.Provider>
  );
};
