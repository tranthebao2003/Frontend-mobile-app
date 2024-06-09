import {
    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAILURE,
    CHANGE_PASSWORD_RESET,
  } from "../types/TypesChangePasword";
  
  const initialState = {
    loading: false,
    reponseSuccess: false,
    error: null,
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case CHANGE_PASSWORD_REQUEST:
        return { ...state, loading: true };
  
      case CHANGE_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          reponseSuccess: true,
          error: null,
        };
  
      case CHANGE_PASSWORD_FAILURE:
        return { ...state, loading: false, error: payload };
        
      case CHANGE_PASSWORD_RESET:
        return { ...state, loading: false, error: null, reponseSuccess: false };
  
      default:
        return state;
    }
  };
  