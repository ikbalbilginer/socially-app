import authTypes from "./auth.types";

export const startLogin = (data) => {
  return {
    type: authTypes.START_LOGIN,
    payload: data,
  };
};

export const setUserProfile = (data) => {
  return {
    type: authTypes.SET_USER_PROFILE,
    payload: data,
  };
};
