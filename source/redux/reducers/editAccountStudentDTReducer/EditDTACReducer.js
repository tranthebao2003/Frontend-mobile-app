import {
  EDIT_DT_REQUEST,
  EDIT_DT_SUCCESS,
  EDIT_DT_FAILURE,
  EDIT_DT_RESET,
} from "../../types/typesEditStudentDT/TypesEditDT";

const initialState = {
  loading: false,
  reponseSuccess: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_DT_REQUEST:
      return { ...state, loading: true };

    case EDIT_DT_SUCCESS:
      return {
        ...state,
        loading: false,
        reponseSuccess: true,
        error: null,
      };

    case EDIT_DT_FAILURE:
      return { ...state, loading: false, error: payload };
      
    case EDIT_DT_RESET:
      return { ...state, loading: false, error: null, reponseSuccess: false };

    default:
      return state;
  }
};
