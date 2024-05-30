import { applyMiddleware, combineReducers, createStore } from "redux";
import LoginReducers from "../reducers/LoginReducers";
import KeyBoardReducer from "../reducers/KeyBoardReducer";
import InfoUserReducer from "../reducers/InfoUserReducer";
import ListActiveReducer from"../reducers/ListActiveReducer";
import ListActiveCreatedReducer from"../reducers/ListActiveCreatedReducer";
import CreateStudentReducer from"../reducers/reducerCreateUser/CreateStudentReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    keyboardShow: KeyBoardReducer,
    authReducer: LoginReducers,
    infoUser: InfoUserReducer,
    listActiveReducer: ListActiveReducer,
    listActiveCreatedReducer: ListActiveCreatedReducer,
    createStudentReducer: CreateStudentReducer
})

export default Store = createStore(rootReducer, applyMiddleware(thunk))