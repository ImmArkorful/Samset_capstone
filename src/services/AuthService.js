import axios from "axios";

import { TEST_URL } from "../constants/ApplicationConstants";

const login = async (username, password) => {
  try {
    const response = await axios.post(TEST_URL + "/users/login", {
      username,
      password,
    });
    const result = response.data;
    if (result?.message) {
      return Promise.reject(Error(result.message));
    }
    await window.localStorage.multiSet([
      ["User", JSON.stringify(result.data.user)],
      ["AccessToken", result.data.token],
    ]);
    return Promise.resolve(result.data.user);
  } catch (error) {
    return Promise.reject(error);
  }
};

const register = async (firstName, lastName, email, username, password) => {
  try {
    const response = await axios.post(TEST_URL + "/users", {
      firstName,
      lastName,
      email,
      username,
      password,
    });
    const result = response.data;
    if (result?.data?.error) {
      return Promise.reject(Error(result.data.error.message));
    }
    const user = await login(username, password);
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const AuthService = {
  login,
  register,
};