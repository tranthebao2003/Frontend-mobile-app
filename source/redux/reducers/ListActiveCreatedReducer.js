import {
    LIST_ACTIVE_CREATED_REQUEST,
    LIST_ACTIVE_CREATED_SUCCESS,
    LIST_ACTIVE_CREATED_FAILURE,
  } from "../types/TypesListActiveCreated";
  
  const initialState = {
    loading: false,
    listActiveCreated: {},
    error: "",
  };
  
  // reducer này để nhận những action trả về list active
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case LIST_ACTIVE_CREATED_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case LIST_ACTIVE_CREATED_SUCCESS:
        return {
          loading: false,
          listActiveCreated: payload,
          error: "",
        };
      case LIST_ACTIVE_CREATED_FAILURE:
        return {
          loading: false,
          listActiveCreated: {},
          error: payload,
        };
      default:
          return state;
    }
  };
  