import chatTypes from "./chat.types";

export const startGetChats = (data) => {
  return {
    type: chatTypes.START_GET_CHATS,
    payload: data,
  };
};

export const setChats = (data) => {
  return {
    type: chatTypes.SET_CHATS,
    payload: data,
  };
};

export const setChatDetails = (data) => {
  return {
    type: chatTypes.SET_CHAT_DETAILS,
    payload: data,
  };
};
