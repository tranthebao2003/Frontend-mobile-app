import {
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_FAILURE,
  CREATE_STUDENT_RESET,
} from "../../types/typesCreateUser/TypesCreateStudent";

const initialState = {
  loading: false,
  reponseSuccess: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_STUDENT_REQUEST:
      return { ...state, loading: true };

    case CREATE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        reponseSuccess: true,
        error: null,
      };

    case CREATE_STUDENT_FAILURE:
      return { ...state, loading: false, error: payload };

    case CREATE_STUDENT_RESET:
      return { ...state, loading: false, reponseSuccess: false, error: null };

    default:
      return state;
  }
};
