import React, { useState, Children, useEffect } from "react";

import { MessageService } from "../services/index";
import { socket } from "../socket";

export const MessageContext = React.createContext({
  sendMessage: () => null,
  receiveMessage: () => null,
  getMessages: () => null,
  setChatName: () => null,
  setMessagesForUser: () => null,
  messages: [],
  chatWith: "",
  allMessages: [],
});

export const MessageProvider = (props) => {
  const [messages, setMessages] = useState([]);
  const [allMessages, setAllMessages] = useState([]);
  const [chatWith, setChatWith] = useState("");

  const sendMessage = ({
    roomId,
    usersIds,
    message,
    messages,
    id,
    userNames,
    time,
  }) => {
    MessageService.saveMessageToDB({
      messages: [
        {
          id,
          message,
          createdAt: Date.now(),
        },
      ],
      usersIds,
      userNames,
      owner: id,
    });
    if (message) {
      const messageWithId = { message, id };
      setMessages([...messages, messageWithId]);
      try {
        socket.emit("private message", {
          roomId,
          from: id,
          message,
          to: usersIds.filter((userid) => userid !== id).join(""),
        });
        return Promise.resolve(true);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const setChatName = (name) => {
    setChatWith(name);
    return Promise.resolve(true);
  };

  const receiveMessage = (messages) => {
    socket.on("private message", ({ message, from }) => {
      setMessages([...messages, { message }]);
    });
    return Promise.resolve(true);
  };

  const getMessages = async ({ messages, name }) => {
    if (messages?.length > 0) {
      setMessages(messages);
    }
    return Promise.resolve(true);
  };

  const setMessagesForUser = (allUserMessages) => {
    setAllMessages(allUserMessages);
    return Promise.resolve(true);
  };

  return (
    <MessageContext.Provider
      value={{
        sendMessage,
        receiveMessage,
        messages,
        getMessages,
        chatWith,
        setChatName,
        allMessages,
        setMessagesForUser,
      }}
    >
      {Children.only(props.children)}
    </MessageContext.Provider>
  );
};
