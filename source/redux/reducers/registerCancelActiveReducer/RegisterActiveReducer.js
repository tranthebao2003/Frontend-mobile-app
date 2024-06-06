import {
    REGISTER_ACTIVE_REQUEST,
    REGISTER_ACTIVE_SUCCESS,
    REGISTER_ACTIVE_FAILURE,
    REGISTER_ACTIVE_RESET,
  } from "../../types/typesRegisterCancelActive/TypesRegisterActive";
  
  const initialState = {
    loading: false,
    reponseSuccess: false,
    error: null,
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case REGISTER_ACTIVE_REQUEST:
        return { ...state, loading: true, reponseSuccess: false };
  
      case REGISTER_ACTIVE_SUCCESS:
        return {
          ...state,
          loading: false,
          reponseSuccess: true,
          error: null,
        };
  
      case REGISTER_ACTIVE_FAILURE:
        return { ...state, loading: false, error: payload };
  
      case REGISTER_ACTIVE_RESET:
        return { ...state, loading: false, reponseSuccess: false, error: null };
  
      default:
        return state;
    }
  };
  