import {
  CREATE_ACTIVE_REQUEST,
  CREATE_ACTIVE_SUCCESS,
  CREATE_ACTIVE_FAILURE,
  CREATE_ACTIVE_RESET,
} from "../types/TypesCreateActive";

const initialState = {
  loading: false,
  reponseSuccess: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_ACTIVE_REQUEST:
      return { ...state, loading: true };

    case CREATE_ACTIVE_SUCCESS:
      return {
        ...state,
        loading: false,
        reponseSuccess: true,
        error: null,
      };

    case CREATE_ACTIVE_FAILURE:
      return { ...state, loading: false, error: payload };
      
    case CREATE_ACTIVE_RESET:
      return { ...state, loading: false, error: null, reponseSuccess: false };

    default:
      return state;
  }
};
