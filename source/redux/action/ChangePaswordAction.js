import axios from "axios";
import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
} from "../types/TypesChangePasword";
import UrlApi from "../UrlApi";
import SetAuthToken from '../../component/SetAuthToken'

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export default ChangePaswordAction = (passwordOldNewConfirm) => {
  const changePasswordUrl = "users/change-password";
  
  return async (dispatch) => {
    dispatch({ type: CHANGE_PASSWORD_REQUEST });
    try {
     await SetAuthToken()
      console.log(passwordOldNewConfirm, "passwordOldNewConfirm màn ChangePaswordAction");
      const res = await axios.post(`${UrlApi}${changePasswordUrl}`, passwordOldNewConfirm);

      dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
      });
    } catch (error) {
      // Sử dụng console.error thay vì console.log trong
      // phần catch: Điều này giúp
      // phân biệt lỗi trong log dễ dàng hơn
      console.error('Thay đổi mật khẩu thất bại', error);
      
      let errorForUser = 'Thay đổi mật khẩu thất bại'
      dispatch({
        type: CHANGE_PASSWORD_FAILURE,
        payload: errorForUser,
      });
    }
  };
};

