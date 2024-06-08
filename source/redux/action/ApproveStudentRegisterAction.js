import axios from "axios";
import {
   APPROVE_STUDENT_REGISTER_REQUEST,
   APPROVE_STUDENT_REGISTER_SUCCESS,
   APPROVE_STUDENT_REGISTER_FAILURE,
  } from "../types/TypesApproveStudentRegister";
  
import UrlApi from "../UrlApi";
import SetAuthToken from '../../component/SetAuthToken'


export default ApproveStudentRegisterAction = (statusAndIdRegister) => {
  const studentRegister = "register_activities/";
  return async (dispatch) => {
    dispatch({ type: APPROVE_STUDENT_REGISTER_REQUEST });
    try {
     
      await SetAuthToken()
      console.log(statusAndIdRegister, "màn ApproveStudentRegisterAction");
      const res = await axios.put(`${UrlApi}${studentRegister}`, statusAndIdRegister);
      

      dispatch({
        type: APPROVE_STUDENT_REGISTER_SUCCESS,
      });
    } catch (error) {

      console.error('Thực hiện thất bại', error);
      
      let errorForUser = 'Thực hiện thất bại'
      dispatch({
        type: APPROVE_STUDENT_REGISTER_FAILURE,
        payload: errorForUser,
      });
    }
  };
};

