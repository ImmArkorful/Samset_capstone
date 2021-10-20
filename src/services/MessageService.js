import axios from "axios";

import { TEST_URL } from "../constants/ApplicationConstants";

const postMessage = async ({ usersIds, messages, owner, userNames }) => {
  try {
    await axios.post(TEST_URL + "/savemessages", {
      usersIds,
      messages,
      owner,
      userNames,
    });
  } catch (e) {
    postMessage({ usersIds, messages, owner, userNames });
  }
};

const saveMessageToDB = async ({ usersIds, messages, owner, userNames }) => {
  postMessage({ usersIds, messages, owner, userNames });
};

const getMessagesForChat = async ({ chatFor }) => {
  try {
    const { data } = await axios.post(TEST_URL + "/getMessages", {
      chatFor,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getMessagesForUser = async () => {
  try {
    const { data } = await axios.get(TEST_URL + "/getMessages");
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const MessageService = {
  saveMessageToDB,
  getMessagesForChat,
  getMessagesForUser,
};
