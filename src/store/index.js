import { combineReducers, createStore } from "redux";
import { boardReducer } from "./boardReducer";
import { idReducer } from "./idReducer";

const rootReducer = combineReducers({
  boardReducer,
  idReducer,
});

export const store = createStore(rootReducer);
