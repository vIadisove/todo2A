import {combineReducers, createStore} from "redux";
import {boardReducer} from "./boardReducer";

const rootReducer = combineReducers({
    boardReducer,
})

export const store = createStore(rootReducer)