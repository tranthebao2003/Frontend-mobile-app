import axios from "axios";
import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from "../../types/typesforgotPassword/TypesResetPassword";
import UrlApi from "../../UrlApi";


// action này để xử lí những api trả về list active

export default ResetPasswordAction = (otp, newPassword) => {
  const endPointResetPassword = 'auth/reset-password'
  return async (dispatch) => {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    try {
      console.log("chưa call api màn ResetPasswordAction");
      const res = await axios.post(`${UrlApi}${endPointResetPassword}`, {
        otp: otp,
        password: newPassword,
      }); 
      
      console.log('đã call api màn ResetPasswordAction');
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: RESET_PASSWORD_FAILURE,
        payload: error.message,
      });
    }
  };
};