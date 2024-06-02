import {
  INFO_USER_REQUEST,
  INFO_USER_SUCCESS,
  INFO_USER_FAILURE,
} from "../types/TypesInfoUser";

const initialState = {
  loading: false,
  infoUser: {},
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INFO_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case INFO_USER_SUCCESS:
      return {
        loading: false,
        infoUser: payload,
        error: null,
      };
    case INFO_USER_FAILURE:
      return {
        loading: false,
        infoUser: {},
        error: payload,
      };
    default:
        return state;
  }
};
