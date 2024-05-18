import { applyMiddleware, combineReducers, createStore } from "redux";
import UserReducers from "../reducers/UserReducers";
import KeyBoardReducer from "../reducers/KeyBoardReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    keyboardShow: KeyBoardReducer,
    authReducer: UserReducers
})

export const Store = createStore(rootReducer, applyMiddleware(thunk))