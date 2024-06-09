import axios from "axios";
import {
 GET_USER_STUDENT_REQUEST,
 GET_USER_STUDENT_SUCCESS,
 GET_USER_STUDENT_FAILURE,
} from "../types/TypesGetAllAccountStudent";
import UrlApi from "../UrlApi";
import SetAuthToken from '../../component/SetAuthToken'

// action này để xử lí những api trả về list active

export default GetAllAccountStudentAction = (urlAccountStudentOrDT) => {
  
  return async (dispatch) => {
    await SetAuthToken()
    dispatch({ type: GET_USER_STUDENT_REQUEST });
    try {
      console.log("chưa call api màn listActiveAction");
      const res = await axios.get(
        `${UrlApi}${urlAccountStudentOrDT}`
      ); // Replace with your API endpoint
      const accountStudentOrDT = res.data;
      
      console.log('đã call api màn GetAllAccountStudentAction', accountStudentOrDT);
      dispatch({
        type: GET_USER_STUDENT_SUCCESS,
        payload: accountStudentOrDT,
      });
    } catch (error) {
      dispatch({
        type: GET_USER_STUDENT_FAILURE,
        payload: error.message,
      });
    }
  };
};
