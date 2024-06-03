import {
    REMOVE_ACTIVE_REQUEST,
    REMOVE_ACTIVE_SUCCESS,
    REMOVE_ACTIVE_FAILURE,
    REMOVE_ACTIVE_RESET,
  } from "../../types/typesRemoveEditActive/TypesRemoveActive";
  
  const initialState = {
    loading: false,
    reponseSuccess: false,
    error: null,
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case REMOVE_ACTIVE_REQUEST:
        return { ...state, loading: true };
  
      case REMOVE_ACTIVE_SUCCESS:
        return {
          ...state,
          loading: false,
          reponseSuccess: true,
          error: null,
        };
  
      case REMOVE_ACTIVE_FAILURE:
        return { ...state, loading: false, error: payload };
        
      case REMOVE_ACTIVE_RESET:
        return { ...state, loading: false, error: null, reponseSuccess: false };
  
      default:
        return state;
    }
  };
  