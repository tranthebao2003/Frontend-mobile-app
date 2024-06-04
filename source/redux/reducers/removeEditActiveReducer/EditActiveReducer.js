import {
    EDIT_ACTIVE_REQUEST,
    EDIT_ACTIVE_SUCCESS,
    EDIT_ACTIVE_FAILURE,
    EDIT_ACTIVE_RESET,
  } from "../../types/typesRemoveEditActive/TypesEditActive";
  
  const initialState = {
    loading: false,
    reponseSuccess: false,
    error: null,
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case EDIT_ACTIVE_REQUEST:
        return { ...state, loading: true };
  
      case EDIT_ACTIVE_SUCCESS:
        return {
          ...state,
          loading: false,
          reponseSuccess: true,
          error: null,
        };
  
      case EDIT_ACTIVE_FAILURE:
        return { ...state, loading: false, error: payload };
        
      case EDIT_ACTIVE_RESET:
        return { ...state, loading: false, error: null, reponseSuccess: false };
  
      default:
        return state;
    }
  };
  