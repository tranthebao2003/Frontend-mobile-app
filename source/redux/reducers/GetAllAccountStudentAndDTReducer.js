import {
  GET_USER_STUDENT_DT_REQUEST,
  GET_USER_STUDENT_DT_SUCCESS,
  GET_USER_STUDENT_DT_FAILURE,
} from "../types/TypesGetAllAccountStudentAndDT";

const initialState = {
  loading: false,
  accountStudentOrDT: {},
  error: "",
};

// reducer này để nhận những action trả về list active
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_STUDENT_DT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USER_STUDENT_DT_SUCCESS:
      return {
        loading: false,
        accountStudentOrDT: payload,
        error: "",
      };
    case GET_USER_STUDENT_DT_FAILURE:
      return {
        loading: false,
        accountStudentOrDT: {},
        error: payload,
      };
    default:
      return state;
  }
};
