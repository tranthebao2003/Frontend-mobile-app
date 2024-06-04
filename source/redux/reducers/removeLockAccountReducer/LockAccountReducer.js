import {
  LOCK_ACCOUNT_REQUEST,
  LOCK_ACCOUNT_SUCCESS,
  LOCK_ACCOUNT_FAILURE,
  LOCK_ACCOUNT_RESET,
} from "../../types/typesRemoveLockAccount/TypesLockAccount";

const initialState = {
  loadingLock: false,
  reponseSuccessLock: false,
  errorLock: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOCK_ACCOUNT_REQUEST:
      return { ...state, loadingLock: true };

    case LOCK_ACCOUNT_SUCCESS:
      return {
        ...state,
        loadingLock: false,
        reponseSuccessLock: true,
        errorLock: null,
      };

    case LOCK_ACCOUNT_FAILURE:
      return { ...state, loadingLock: false, errorLock: payload };
      
    case LOCK_ACCOUNT_RESET:
      return { ...state, loadingLock: false, errorLock: null, reponseSuccessLock: false };

    default:
      return state;
  }
};
