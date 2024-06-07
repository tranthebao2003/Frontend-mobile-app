import {
    CANCEL_ACTIVE_REQUEST,
    CANCEL_ACTIVE_SUCCESS,
    CANCEL_ACTIVE_FAILURE,
    CANCEL_ACTIVE_RESET,
  } from "../../types/typesRegisterCancelActive/TypesRegisterActive";
  
  const initialState = {
    loadingCancel: false,
    reponseSuccessCancel: false,
    errorCancel: null,
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case CANCEL_ACTIVE_REQUEST:
        return { ...state, loadingCancel: true, reponseSuccessCancel: false };

      case CANCEL_ACTIVE_SUCCESS:
        return {
          ...state,
          loadingCancel: false,
          reponseSuccessCancel: true,
          errorCancel: null,
        };

      case CANCEL_ACTIVE_FAILURE:
        return { ...state, loadingCancel: false, errorCancel: payload };

      case CANCEL_ACTIVE_RESET:
        return {
          ...state,
          loadingCancel: false,
          reponseSuccessCancel: false,
          errorCancel: null,
        };

      default:
        return state;
    }
  };
  