import axios from "axios";
import {
 NOTIFICATION_STUDENT_DT_FAILURE,
 NOTIFICATION_STUDENT_DT_SUCCESS,
 NOTIFICATION_STUDENT_DT_REQUEST,
} from "../types/TypesNotificationStudentDT";
import UrlApi from "../UrlApi";
import SetAuthToken from '../../component/SetAuthToken'

// action này để xử lí những api trả về list active

export default NotificationStudentDTAction = () => {
  const urlNotificationStudentDT = "users/notifications"
  return async (dispatch) => {
    await SetAuthToken()
    dispatch({ type: NOTIFICATION_STUDENT_DT_FAILURE });
    try {
      console.log("chưa call api màn NotificationStudentDT");
      const res = await axios.get(
        `${UrlApi}${urlNotificationStudentDT}`
      ); 
      const notificationStudentDT = res.data;
      
      console.log('đã call api màn NotificationStudentDT', notificationStudentDT);
      dispatch({
        type: NOTIFICATION_STUDENT_DT_SUCCESS,
        payload: notificationStudentDT,
      });
    } catch (error) {
      dispatch({
        type: NOTIFICATION_STUDENT_DT_REQUEST,
        payload: error.message,
      });
    }
  };
};
