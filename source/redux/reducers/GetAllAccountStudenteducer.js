import {
  GET_USER_STUDENT_REQUEST,
  GET_USER_STUDENT_SUCCESS,
  GET_USER_STUDENT_FAILURE,
 } from "../types/TypesGetAllAccountStudent";

const initialState = {
  loading: false,
  accountStudentOrDT: {},
  error: null,
};

// reducer này để nhận những action trả về list active
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USER_STUDENT_SUCCESS:
      return {
        loading: false,
        accountStudentOrDT: payload,
        error: null,
      };
    case GET_USER_STUDENT_FAILURE:
      return {
        loading: false,
        accountStudentOrDT: {},
        error: payload,
      };
    default:
      return state;
  }
};
