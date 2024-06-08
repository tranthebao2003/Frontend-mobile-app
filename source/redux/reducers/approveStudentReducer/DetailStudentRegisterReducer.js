
import {
  DETAIL_STUDENT_REQUEST,
  DETAIL_STUDENT_SUCCESS,
  DETAIL_STUDENT_FAILURE,
} from "../../types/typesApproveStudent/TypesDetailStudentRegister";

const initialState = {
  loading: false,
  infoUserStudent: null,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DETAIL_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case DETAIL_STUDENT_SUCCESS:
      return {
        loading: false,
        infoUserStudent: payload,
        error: null,
      };
    case DETAIL_STUDENT_FAILURE:
      return {
        loading: false,
        infoUserStudent: null,
        error: payload,
      };
    default:
        return state;
  }
};
