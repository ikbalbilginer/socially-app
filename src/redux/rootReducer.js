import { combineReducers } from "redux";

import authReducer from "./Auth/auth.reducer";
import chatReducer from "./Chat/chat.reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
});

// export default persistReducer(configStorage, rootReducer);
export default rootReducer;
