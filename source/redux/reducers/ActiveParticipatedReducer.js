import {
    ACTIVE_PARTICIPATED_REQUEST,
    ACTIVE_PARTICIPATED_SUCCESS,
    ACTIVE_PARTICIPATED_FAILURE,
  } from "../types/TypesActiveParticipated";
  
  const initialState = {
    loading: false,
    activeParticipated: null,
    error: null,
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case ACTIVE_PARTICIPATED_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ACTIVE_PARTICIPATED_SUCCESS:
        return {
          ...state,
          loading: false,
          activeParticipated: payload,
        };
      case ACTIVE_PARTICIPATED_FAILURE:
        return {
          ...state,
          loading: false,
          activeParticipated: null,
          error: payload,
        };
      default:
          return state;
    }
  };
  