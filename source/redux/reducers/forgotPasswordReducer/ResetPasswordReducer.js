import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_RESET
} from "../../types/typesforgotPassword/TypesResetPassword";
  
  const initialState = {
    loading: false,
    navigateContinue: false,
    error: null,
  };

  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case RESET_PASSWORD_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case RESET_PASSWORD_SUCCESS:
        return {
          ...state,
          navigateContinue: true,
          loading: false
        };
      case RESET_PASSWORD_FAILURE:
        return {
          ...state,
          error: payload,
          loading: false
        };
        case RESET_PASSWORD_RESET:
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
  