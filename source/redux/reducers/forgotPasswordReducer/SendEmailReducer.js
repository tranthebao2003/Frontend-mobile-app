import {
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE,
  SEND_EMAIL_RESET,
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
        ...state,
        loading: true,
      };
    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        navigateContinue: true,
      };
    case SEND_EMAIL_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case SEND_EMAIL_RESET:
      return {
        ...state,
        loading: false,
        navigateContinue: false,
        error: null,
      };

    default:
      return state;
  }
};
