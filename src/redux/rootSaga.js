import { all, call } from "redux-saga/effects";
import authSagas from "./Auth/auth.sagas";
import chatSagas from "./Chat/chat.sagas";

export default function* rootSaga() {
  yield all([call(authSagas), call(chatSagas)]);
}
