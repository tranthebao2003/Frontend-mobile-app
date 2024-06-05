import {
  CREATE_DT_REQUEST,
  CREATE_DT_SUCCESS,
  CREATE_DT_FAILURE,
  CREATE_DT_RESET,
} from "../../types/typesCreateUser/TypesCreateDT";

const initialState = {
  loading: false,
  reponseSuccess: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_DT_REQUEST:
      return { ...state, loading: true, reponseSuccess: false };

    case CREATE_DT_SUCCESS:
      return {
        ...state,
        loading: false,
        reponseSuccess: true,
        error: null,
      };

    case CREATE_DT_FAILURE:
      return { ...state, loading: false, error: payload };

    case CREATE_DT_RESET:
      return { ...state, loading: false, reponseSuccess: false, error: null };

    default:
      return state;
  }
};
