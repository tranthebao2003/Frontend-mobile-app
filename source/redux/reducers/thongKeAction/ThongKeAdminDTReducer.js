import {
  THONG_KE_ACTIVE_REQUEST,
  THONG_KE_ACTIVE_SUCCESS,
  THONG_KE_ACTIVE_FAILURE,
  THONG_KE_ACTIVE_RESET,
} from "../../types/typesThongKe/TypesThongKeAdminDT";

const initialState = {
  loading: false,
  reponseSuccess: false,
  data: null,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case THONG_KE_ACTIVE_REQUEST:
      return { ...state, loading: true };

    case THONG_KE_ACTIVE_SUCCESS:
      return {
        ...state,
        loading: false,
        reponseSuccess: true,
        error: null,
        data: payload,
      };

    case THONG_KE_ACTIVE_FAILURE:
      return { ...state, loading: false, error: payload };

    case THONG_KE_ACTIVE_RESET:
      return {
        ...state,
        loading: false,
        error: null,
        reponseSuccess: false,
        data: null,
      };

    default:
      return state;
  }
};
