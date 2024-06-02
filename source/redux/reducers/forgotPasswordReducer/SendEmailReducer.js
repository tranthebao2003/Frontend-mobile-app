import {
    SEND_EMAIL_REQUEST,
    SEND_EMAIL_SUCCESS,
    SEND_EMAIL_FAILURE,
  } from "../../types/typesforgotPassword/TypesSendEmail";
  
  const initialState = {
    loading: false,
    navigateContinue: false,
    error: null,
  };

  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case SEND_EMAIL_REQUEST:
        return {
          loading: true,
          navigateContinue: false,
          error: null
        };
      case SEND_EMAIL_SUCCESS:
        return {
          loading: false,
          navigateContinue: true,
          error: null,
        };
      case SEND_EMAIL_FAILURE:
        return {
          loading: false,
          navigateContinue: false,
          error: payload,
        };
      default:
          return state;
    }
  };
  