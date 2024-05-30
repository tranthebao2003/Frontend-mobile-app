import {
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_FAILURE,
} from "../../types/typesCreateUser/TypesCreateStudent";

const initialState = {
  loading: false,
  reponseSuccess: false,
  error: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_STUDENT_REQUEST:
      return { ...state, loading: true,};

    case CREATE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        reponseSuccess: true
      };

    case CREATE_STUDENT_FAILURE:
      return { ...state, loading: false, error: payload};

    default:
      return state;
  }
};
