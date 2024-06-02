import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
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
          loading: true,
          navigateContinue: false,
          error: null
        };
      case RESET_PASSWORD_SUCCESS:
        return {
          loading: false,
          navigateContinue: true,
          error: null,
        };
      case RESET_PASSWORD_FAILURE:
        return {
          loading: false,
          navigateContinue: false,
          error: payload,
        };
      default:
          return state;
    }
  };
  