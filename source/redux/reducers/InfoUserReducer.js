import {
  INFO_USER_REQUEST,
  INFO_USER_SUCCESS,
  INFO_USER_FAILURE,
} from "../types/TypesInfoUser";

const initialState = {
  loading: false,
  infoUser: {},
  error: "",
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
        ...state,
        loading: false,
        infoUser: payload,
      };
    case INFO_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
        return state;
  }
};
