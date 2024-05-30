import {
  CREATE_DT_REQUEST,
  CREATE_DT_SUCCESS,
  CREATE_DT_FAILURE,
} from "../../types/typesCreateUser/TypesCreateDT";

const initialState = {
  loading: false,
  reponseSuccess: false,
  error: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_DT_REQUEST:
      return { ...state, loading: true,};

    case CREATE_DT_SUCCESS:
      return {
        ...state,
        loading: false,
        reponseSuccess: true
      };

    case CREATE_DT_FAILURE:
      return { ...state, loading: false, error: payload};

    default:
      return state;
  }
};
