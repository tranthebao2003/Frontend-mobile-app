import axios from "axios";
import {
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_FAILURE,
} from "../../types/typesCreateUser/TypesCreateStudent";
import UrlApi from "../../UrlApi";
import SetAuthToken from '../../../component/SetAuthToken'

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export default CreateStudentAction = (accountStudent) => {
  const uerCreateStudent = "users/create_student";
  return async (dispatch) => {
    dispatch({ type: CREATE_STUDENT_REQUEST });
    try {
     
     await SetAuthToken()
      console.log(accountStudent, "màn createStudentAction");
      const res = await axios.post(`${UrlApi}${uerCreateStudent}`, accountStudent);

      dispatch({
        type: CREATE_STUDENT_SUCCESS,
      });
    } catch (error) {
      // Sử dụng console.error thay vì console.log trong
      // phần catch: Điều này giúp
      // phân biệt lỗi trong log dễ dàng hơn
      console.error('Tạo tài khoản thất bại', error);
      
      let errorForUser = 'Tạo tài khoản thất bại vui lòng thử lại'
      dispatch({
        type: CREATE_STUDENT_FAILURE,
        payload: errorForUser,
      });
    }
  };
};

