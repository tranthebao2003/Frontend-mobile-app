import {
  STUDENT_REGISTER_ACTIVE_REQUEST,
  STUDENT_REGISTER_ACTIVE_SUCCESS,
  STUDENT_REGISTER_ACTIVE_FAILURE,
} from "../../types/typesApproveStudent/TypesStudentRegisterActive";

const initialState = {
  loadingStudent: false,
  listStudent: null,
  errorStudent: null,
};

// reducer này để nhận những action trả về list active
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case STUDENT_REGISTER_ACTIVE_REQUEST:
      return {
        ...state,
        loadingStudent: true,
        errorStudent: null,
      };
    case STUDENT_REGISTER_ACTIVE_SUCCESS:
      return {
        loadingStudent: false,
        listStudent: payload,
        errorStudent: null,
      };
    case STUDENT_REGISTER_ACTIVE_FAILURE:
      return {
        loadingStudent: false,
        listStudent: null,
        errorStudent: payload,
      };
    default:
      return state;
  }
};
