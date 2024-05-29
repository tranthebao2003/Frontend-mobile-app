import {
    LIST_ACTIVE_REQUEST,
    LIST_ACTIVE_SUCCESS,
    LIST_ACTIVE_FAILURE
  } from "../types/TypesListActive";
  
  const initialState = {
    loading: false,
    listActive: {},
    error: "",
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case LIST_ACTIVE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LIST_ACTIVE_SUCCESS:
        return {
          loading: false,
          listActive: payload,
          error: "",
        };
      case LIST_ACTIVE_FAILURE:
        return {
          loading: false,
          listActive: {},
          error: payload,
        };
      default:
          return state;
    }
  };
  