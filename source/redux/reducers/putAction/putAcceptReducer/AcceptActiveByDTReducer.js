import {
    ACCEPT_ACTIVITY_BY_DT_REQUEST,
    ACCEPT_ACTIVITY_BY_DT_SUCCESS,
    ACCEPT_ACTIVITY_BY_DT_FAILURE,
  } from "../../../types/typesPutAccept/typesPutAccept/TypesAcceptActiveByDT";
  
  const initialState = {
    loading: false,
    data: null,
    error: "",
  };
  
  // reducer này để nhận những action trả về message khi active đc chấp nhận
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case ACCEPT_ACTIVITY_BY_DT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
          data: null,
        };
      case ACCEPT_ACTIVITY_BY_DT_SUCCESS:
        return {
          ...state,
          loading: false,
          data: payload,
        };
      case ACCEPT_ACTIVITY_BY_DT_FAILURE:
        return {
          ...state,
          loading: false,
          error: payload,
        };
      default:
          return state;
    }
  };
  