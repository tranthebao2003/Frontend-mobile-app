import {
  NOTIFICATION_STUDENT_DT_FAILURE,
  NOTIFICATION_STUDENT_DT_SUCCESS,
  NOTIFICATION_STUDENT_DT_REQUEST,
 } from "../types/TypesNotificationStudentDT";

const initialState = {
  loadingNotification: false,
  notification: null,
  errorNotification: null,
};


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NOTIFICATION_STUDENT_DT_FAILURE:
      return {
        ...state,
        loadingNotification: true,
        errorNotification: null,
      };
    case NOTIFICATION_STUDENT_DT_SUCCESS:
      return {
        loadingNotification: false,
        notification: payload,
        errorNotification: null,
      };
    case NOTIFICATION_STUDENT_DT_REQUEST:
      return {
        loadingNotification: false,
        notification: null,
        errorNotification: payload,
      };
    default:
      return state;
  }
};
