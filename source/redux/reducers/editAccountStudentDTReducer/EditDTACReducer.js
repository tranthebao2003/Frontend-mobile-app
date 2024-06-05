import {
  EDIT_DT_REQUEST,
  EDIT_DT_SUCCESS,
  EDIT_DT_FAILURE,
  EDIT_DT_RESET,
} from "../../types/typesEditStudentDT/TypesEditDT";

const initialState = {
  loadingLock: false,
  reponseSuccessLock: false,
  errorLock: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_DT_REQUEST:
      return { ...state, loadingLock: true };

    case EDIT_DT_SUCCESS:
      return {
        ...state,
        loadingLock: false,
        reponseSuccessLock: true,
        errorLock: null,
      };

    case EDIT_DT_FAILURE:
      return { ...state, loadingLock: false, errorLock: payload };
      
    case EDIT_DT_RESET:
      return { ...state, loadingLock: false, errorLock: null, reponseSuccessLock: false };

    default:
      return state;
  }
};
