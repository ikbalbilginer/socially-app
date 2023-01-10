import chatTypes from "./chat.types";

const INITIAL_STATE = {
  chats: [],
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case chatTypes.START_GET_CHATS:
      return {
        ...state,
        loading: true,
      };
    case chatTypes.SET_CHATS:
      return {
        ...state,
        loading: false,
        chats: action.payload,
      };
    case chatTypes.SET_CHAT_DETAILS:
      return {
        ...state,
        loading: false,
        chatDetails: action.payload,
      };

    default:
      return state;
  }
};

export default chatReducer;
