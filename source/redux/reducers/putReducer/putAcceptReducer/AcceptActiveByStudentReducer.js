import {
    ACCEPT_ACTIVITY_BY_STUDENT_REQUEST,
    ACCEPT_ACTIVITY_BY_STUDENT_SUCCESS,
    ACCEPT_ACTIVITY_BY_STUDENT_FAILURE,
  } from "../../../types/typesPutAccept/typesPutAccept/TypesAcceptActiveByStudent";
  
  const initialState = {
    loading: false,
    data: null,
    error: "",
  };
  
  // reducer này để nhận những action trả về message khi active đc chấp nhận
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case ACCEPT_ACTIVITY_BY_STUDENT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
          data: null,
        };
      case ACCEPT_ACTIVITY_BY_STUDENT_SUCCESS:
        return {
          ...state,
          loading: false,
          data: payload,
        };
      case ACCEPT_ACTIVITY_BY_STUDENT_FAILURE:
        return {
          ...state,
          loading: false,
          error: payload,
        };
      default:
          return state;
    }
  };
  