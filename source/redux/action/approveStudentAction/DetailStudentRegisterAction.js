import axios from "axios";
import {
  DETAIL_STUDENT_REQUEST,
  DETAIL_STUDENT_SUCCESS,
  DETAIL_STUDENT_FAILURE,
} from "../../types/typesApproveStudent/TypesDetailStudentRegister";
import UrlApi from '../../UrlApi'
import SetAuthToken from '../../../component/SetAuthToken'


export default DetailStudentRegisterAction = (idAccount) => {
  const studentRegister = `users/student-id/${idAccount}`
  return async (dispatch) => {
    
    try {
      dispatch({ type: DETAIL_STUDENT_REQUEST });
      await SetAuthToken()
      console.log("chưa call api màn DetailStudentRegisterAction");
      const res = await axios.get(
        `${UrlApi}${studentRegister}`
      ); 
      const studentRegisterData = res.data;

      console.log('đã call api màn DetailStudentRegisterAction', studentRegisterData);
      dispatch({
        type: DETAIL_STUDENT_SUCCESS,
        payload: studentRegisterData,
      });
    } catch (error) {
      dispatch({
        type: DETAIL_STUDENT_FAILURE,
        payload: error.message,
      });
    }
  };
};
