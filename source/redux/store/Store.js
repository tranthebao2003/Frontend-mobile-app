import { applyMiddleware, combineReducers, createStore } from "redux";
import UserReducers from "../reducers/UserReducers";
import KeyBoardReducer from "../reducers/KeyBoardReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    userData: UserReducers,
    keyboardShow: KeyBoardReducer
})

export const Store = createStore(rootReducer, applyMiddleware(thunk))