import {
  CREATE_ACTIVE_REQUEST,
  CREATE_ACTIVE_SUCCESS,
  CREATE_ACTIVE_FAILURE
} from "../types/TypesCreateActive";

const initialState = {
  loading: false,
  reponseSuccess: false,
  error: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_ACTIVE_REQUEST:
      return { ...state, loading: true,};

    case CREATE_ACTIVE_SUCCESS:
      return {
        ...state,
        loading: false,
        reponseSuccess: true
      };

    case CREATE_ACTIVE_FAILURE:
      return { ...state, loading: false, error: payload};

    default:
      return state;
  }
};
