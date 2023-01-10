import { all, takeLatest, call, put } from "redux-saga/effects";
import chatTypes from "./chat.types";
import { setChats } from "./chat.actions";
import { handleGetAllChats } from "./chat.helpers";

// ROOM DETAILS

function* startGetChats({ payload }) {
  try {
    const chats = yield handleGetAllChats(payload);
    yield put(setChats(chats));
  } catch (err) {
    console.log("chats er :", err);
  }
}
export function* onStartGetChats() {
  yield takeLatest(chatTypes.START_GET_CHATS, startGetChats);
}

export default function* chatSagas() {
  yield all([call(onStartGetChats)]);
}
