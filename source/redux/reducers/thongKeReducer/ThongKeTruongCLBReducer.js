import {
  THONG_KE_ACTIVE_TRUONGCLB_REQUEST,
  THONG_KE_ACTIVE_TRUONGCLB_SUCCESS,
  THONG_KE_ACTIVE_TRUONGCLB_FAILURE,
  THONG_KE_ACTIVE_TRUONGCLB_RESET,
} from "../../types/typesThongKe/TypesThongKeTruongCLB";

const initialState = {
  loadingTHONG_KE_TRUONGCLB: false,
  reponseSuccessTHONG_KE_TRUONGCLB: false,
  dataTHONG_KE_TRUONGCLB: null,
  errorTHONG_KE_TRUONGCLB: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case THONG_KE_ACTIVE_TRUONGCLB_REQUEST:
      return { ...state, loadingTHONG_KE_TRUONGCLB: true };

    case THONG_KE_ACTIVE_TRUONGCLB_SUCCESS:
      return {
        ...state,
        loadingTHONG_KE_TRUONGCLB: false,
        reponseSuccessTHONG_KE_TRUONGCLB: true,
        errorTHONG_KE_TRUONGCLB: null,
        dataTHONG_KE_TRUONGCLB: payload,
      };

    case THONG_KE_ACTIVE_TRUONGCLB_FAILURE:
      return { ...state, loadingTHONG_KE_TRUONGCLB: false, errorTHONG_KE_TRUONGCLB: payload };

    case THONG_KE_ACTIVE_TRUONGCLB_RESET:
      return {
        ...state,
        loadingTHONG_KE_TRUONGCLB: false,
        errorTHONG_KE_TRUONGCLB: null,
        reponseSuccessTHONG_KE_TRUONGCLB: false,
        dataTHONG_KE_TRUONGCLB: null,
      };

    default:
      return state;
  }
};
