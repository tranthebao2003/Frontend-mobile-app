import {
  REMOVE_ACCOUNT_REQUEST,
  REMOVE_ACCOUNT_SUCCESS,
  REMOVE_ACCOUNT_FAILURE,
  REMOVE_ACCOUNT_RESET,
} from "../../types/typesRemoveLockAccount/TypesRemoveAccount";

const initialState = {
  loading: false,
  reponseSuccess: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REMOVE_ACCOUNT_REQUEST:
      return { ...state, loading: true };

    case REMOVE_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        reponseSuccess: true,
        error: null,
      };

    case REMOVE_ACCOUNT_FAILURE:
      return { ...state, loading: false, error: payload };
      
    case REMOVE_ACCOUNT_RESET:
      return { ...state, loading: false, error: null, reponseSuccess: false };

    default:
      return state;
  }
};
