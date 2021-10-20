import axios from "axios";

import { TEST_URL } from "../constants";

const getUserInfo = async () => {
  try {
    const result = await axios.get(TEST_URL + "/users/me");
    if (result.data === null) {
      return Promise.reject(new Error("user is null"));
    }
    await window.localStorage.setItem("User", JSON.stringify(result.data.data));

    return Promise.resolve(result.data.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateProfileImage = async (fileUri) => {
  try {
    const image = {
      uri: fileUri,
      type: "image/jpg",
      name: "upload.jpg",
    };

    var data = new FormData();
    data.append("image", image);
    const result = await axios.post(TEST_URL + "/user/me/avatar", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (result?.data?.error) {
      return Promise.reject(Error(result.data.error.message));
    }
    return Promise.resolve(result.data.data.thumbnailUrl);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const ProfileService = {
  getUserInfo,
  updateProfileImage,
};
