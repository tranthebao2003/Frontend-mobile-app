import {
    APPROVE_STUDENT_REGISTER_REQUEST,
    APPROVE_STUDENT_REGISTER_SUCCESS,
    APPROVE_STUDENT_REGISTER_FAILURE,
    APPROVE_STUDENT_REGISTER_RESET
  } from "../types/TypesApproveStudentRegister";
  
  const initialState = {
    loadingStudent: false,
    reponseSuccessStudent: false,
    errorStudent: null,
  };
  
  // reducer này để nhận những action trả về message khi active đc chấp nhận
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case APPROVE_STUDENT_REGISTER_REQUEST:
        return {
          ...state,
          loadingStudent: true,
        };
      case APPROVE_STUDENT_REGISTER_SUCCESS:
        return {
          ...state,
          loadingStudent: false,
          reponseSuccessStudent: true,
        };
      case APPROVE_STUDENT_REGISTER_FAILURE:
        return {
          ...state,
          loadingStudent: false,
          errorStudent: payload,
        };
      case APPROVE_STUDENT_REGISTER_RESET:
        return {
          ...state,
          loadingStudent: false,
          reponseSuccessStudent: false,
          errorStudent: null,
        };
      default:
          return state;
    }
  };
