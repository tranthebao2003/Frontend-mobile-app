import axios from "axios";
import {
    ACCEPT_ACTIVITY_BY_STUDENT_REQUEST,
    ACCEPT_ACTIVITY_BY_STUDENT_SUCCESS,
    ACCEPT_ACTIVITY_BY_STUDENT_FAILURE,
  } from "../../../types/typesPutAccept/typesPutAccept/TypesAcceptActiveByStudent";
  
import UrlApi from "../../../UrlApi";
import SetAuthToken from '../../../../component/SetAuthToken'

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export default AcceptActiveByStudentAction = (statusAndId) => {
  const acceptActiveByDt = "activities/activities_student_created/";
  return async (dispatch) => {
    dispatch({ type: ACCEPT_ACTIVITY_BY_STUDENT_REQUEST });
    try {
     
     await SetAuthToken()
      console.log(statusAndId, "màn AcceptActiveByStudentAction");
      const res = await axios.put(`${UrlApi}${acceptActiveByDt}`, statusAndId);
      
      const {message} = res.data
      console.log(message, ' màn AcceptActiveByStudentAction')
      dispatch({
        type: ACCEPT_ACTIVITY_BY_STUDENT_SUCCESS,
        payload: message
      });
    } catch (error) {
      // Sử dụng console.error thay vì console.log trong
      // phần catch: Điều này giúp
      // phân biệt lỗi trong log dễ dàng hơn
      console.error('Chấp nhận thất bại', error);
      
      let errorForUser = 'Chấp nhận thất bại'
      dispatch({
        type: ACCEPT_ACTIVITY_BY_STUDENT_FAILURE,
        payload: errorForUser,
      });
    }
  };
};

