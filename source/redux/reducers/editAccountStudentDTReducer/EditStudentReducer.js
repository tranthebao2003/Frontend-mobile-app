import {
  EDIT_STUDENT_REQUEST,
  EDIT_STUDENT_SUCCESS,
  EDIT_STUDENT_FAILURE,
  EDIT_STUDENT_RESET,
} from "../../types/typesEditStudentDT/TypesEditStudent";

const initialState = {
  loadingLock: false,
  reponseSuccessLock: false,
  errorLock: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_STUDENT_REQUEST:
      return { ...state, loadingLock: true };

    case EDIT_STUDENT_SUCCESS:
      return {
        ...state,
        loadingLock: false,
        reponseSuccessLock: true,
        errorLock: null,
      };

    case EDIT_STUDENT_FAILURE:
      return { ...state, loadingLock: false, errorLock: payload };
      
    case EDIT_STUDENT_RESET:
      return { ...state, loadingLock: false, errorLock: null, reponseSuccessLock: false };

    default:
      return state;
  }
};
