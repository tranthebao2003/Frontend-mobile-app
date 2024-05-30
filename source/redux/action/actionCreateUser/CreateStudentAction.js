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
  const urlAuthLogin = "users/create_student";
  return async (dispatch) => {
    dispatch({ type: CREATE_STUDENT_REQUEST });
    try {
     
     await SetAuthToken()
      console.log(accountStudent, "màn createStudentAction");
      const {
        username,
        password,
        role_id,
        status_id,
        MSSV,
        first_name,
        last_name,
        phone,
        address,
        class_id,
        mail,
        gender_id,
        birth_date,
      } = accountStudent;

      const res = await axios.post(`${UrlApi}${urlAuthLogin}`, {
        username: username,
        password: password,
        role_id: role_id,
        status_id: status_id,
        MSSV: MSSV,
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        address: address,
        class_id: class_id,
        mail: mail,
        gender_id: gender_id,
        birth_date: birth_date,
      });

      dispatch({
        type: CREATE_STUDENT_SUCCESS,
      });
    } catch (error) {
      // Sử dụng console.error thay vì console.log trong
      // phần catch: Điều này giúp
      // phân biệt lỗi trong log dễ dàng hơn
      console.error("Tạo tài khoản thất bại", error);

      dispatch({
        type: CREATE_STUDENT_FAILURE,
        payload: 'Tạo tài khoản thất bại',
      });
    }
  };
};

