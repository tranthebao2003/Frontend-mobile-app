import axios from "axios";
import {
  EDIT_STUDENT_REQUEST,
  EDIT_STUDENT_SUCCESS,
  EDIT_STUDENT_FAILURE,
} from "../../types/typesEditStudentDT/TypesEditStudent";
import UrlApi from "../../UrlApi";
import SetAuthToken from '../../../component/SetAuthToken'

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export default EditStudentAction = (editAccountStudent) => {
  const editAccountStudentUrl = "users/student/";
  
  return async (dispatch) => {
    dispatch({ type: EDIT_STUDENT_REQUEST });
    console.log(`${UrlApi}${editAccountStudentUrl}`, 'link màn EditAccountStudent')
    try {
     await SetAuthToken()
      console.log(editAccountStudent, "editAccountStudent màn EditAccountStudent");
      
      const res = await axios.put(`${UrlApi}${editAccountStudentUrl}`, editAccountStudent);

      dispatch({
        type: EDIT_STUDENT_SUCCESS,
      });
    } catch (error) {

      console.error('Sửa tài khoản thất bại', error);
      
      let errorForUser = 'Sửa tài khoản thất bại vui lòng thử lại'
      dispatch({
        type: EDIT_STUDENT_FAILURE,
        payload: errorForUser,
      });
    }
  };
};

