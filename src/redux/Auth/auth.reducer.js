import authTypes from "./auth.types";

const INITIAL_STATE = {
  loading: false,
  user: undefined,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authTypes.START_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case authTypes.SET_USER_PROFILE:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
