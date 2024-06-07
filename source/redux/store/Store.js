import { applyMiddleware, combineReducers, createStore } from "redux";
import LoginReducers from "../reducers/LoginReducers";
import KeyBoardReducer from "../reducers/KeyBoardReducer";
import InfoUserReducer from "../reducers/InfoUserReducer";
import ListActiveReducer from"../reducers/ListActiveReducer";
import ListActiveCreatedReducer from"../reducers/ListActiveCreatedReducer";
import CreateStudentReducer from"../reducers/reducerCreateUser/CreateStudentReducer";
import CreateDoanTruongReducer from"../reducers/reducerCreateUser/CreateDoanTruongReducer";
import CreateActiveReducer from"../reducers/CreateActiveReducer";
import AcceptActiveByDTReducer from"../reducers/putReducer/putAcceptReducer/AcceptActiveByDTReducer";
import AcceptActiveByStudentReducer from"../reducers/putReducer/putAcceptReducer/AcceptActiveByStudentReducer";
import GetAllAccountStudentAndDTReducer from"../reducers/GetAllAccountStudentAndDTReducer";
import SendEmailReducer from"../reducers/forgotPasswordReducer/SendEmailReducer";
import ResetPasswordReducer from"../reducers/forgotPasswordReducer/ResetPasswordReducer";
import RemoveActiveReducer from"../reducers/removeEditActiveReducer/RemoveActiveReducer";
import EditActiveReducer from"../reducers/removeEditActiveReducer/EditActiveReducer";
import RemoveAccountReducer from"../reducers/removeLockAccountReducer/RemoveAccountReducer";
import LockAccountReducer from"../reducers/removeLockAccountReducer/LockAccountReducer";
import ThongKeAdminDTReducer from"../reducers/thongKeReducer/ThongKeAdminDTReducer";
import EditStudentReducer from"../reducers/editAccountStudentDTReducer/EditStudentReducer";
import EditDTACReducer from"../reducers/editAccountStudentDTReducer/EditDTACReducer";
import ActiveParticipatedReducer from"../reducers/ActiveParticipatedReducer";
import RegisterActiveReducer from"../reducers/registerCancelActiveReducer/RegisterActiveReducer";
import CancelActiveReducer from"../reducers/registerCancelActiveReducer/CancelActiveReducer";
import ThongKeTruongCLBReducer from"../reducers/thongKeReducer/ThongKeTruongCLBReducer";
import NotificationStudentDTReducer from"../reducers/NotificationStudentDTReducer";


import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    keyboardShow: KeyBoardReducer,
    authReducer: LoginReducers,
    infoUser: InfoUserReducer,
    listActiveReducer: ListActiveReducer,
    listActiveCreatedReducer: ListActiveCreatedReducer,
    createStudentReducer: CreateStudentReducer,
    createDoanTruongReducer: CreateDoanTruongReducer,
    createActiveReducer: CreateActiveReducer,
    acceptActiveByDTReducer: AcceptActiveByDTReducer,
    acceptActiveByStudentReducer: AcceptActiveByStudentReducer,
    getAllAccountStudentAndDTReducer: GetAllAccountStudentAndDTReducer,
    sendEmailReducer: SendEmailReducer,
    resetPasswordReducer: ResetPasswordReducer,
    removeActiveReducer: RemoveActiveReducer,
    editActiveReducer: EditActiveReducer,
    removeAccountReducer: RemoveAccountReducer,
    lockAccountReducer: LockAccountReducer,
    thongKeAdminDTReducer: ThongKeAdminDTReducer,
    editStudentReducer: EditStudentReducer,
    editDTACReducer: EditDTACReducer,
    activeParticipatedReducer: ActiveParticipatedReducer,
    registerActiveReducer: RegisterActiveReducer,
    cancelActiveReducer: CancelActiveReducer,
    thongKeTruongCLBReducer: ThongKeTruongCLBReducer,
    notificationStudentDTReducer: NotificationStudentDTReducer,
})

export default Store = createStore(rootReducer, applyMiddleware(thunk))