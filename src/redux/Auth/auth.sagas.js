import { all, put, takeLatest, call } from "redux-saga/effects";
import { setUserProfile } from "./auth.actions";
import authTypes from "./auth.types";
import { handleLogin } from "./auth.helpers";

function* startLogin({ payload }) {
  try {
    const response = yield handleLogin(payload);
    yield put(setUserProfile(response));
  } catch (err) {
    console.log("login error", err);
  }
}

export function* onStartLogin() {
  yield takeLatest(authTypes.START_LOGIN, startLogin);
}
export default function* userSagas() {
  yield all([call(onStartLogin)]);
}
