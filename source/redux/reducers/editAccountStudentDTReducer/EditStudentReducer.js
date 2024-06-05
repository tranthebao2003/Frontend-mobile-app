import {
  EDIT_STUDENT_REQUEST,
  EDIT_STUDENT_SUCCESS,
  EDIT_STUDENT_FAILURE,
  EDIT_STUDENT_RESET,
} from "../../types/typesEditStudentDT/TypesEditStudent";

const initialState = {
  loading: false,
  reponseSuccess: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_STUDENT_REQUEST:
      return { ...state, loading: true };

    case EDIT_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        reponseSuccess: true,
        error: null,
      };

    case EDIT_STUDENT_FAILURE:
      return { ...state, loading: false, error: payload };
      
    case EDIT_STUDENT_RESET:
      return { ...state, loading: false, error: null, reponseSuccess: false };

    default:
      return state;
  }
};
