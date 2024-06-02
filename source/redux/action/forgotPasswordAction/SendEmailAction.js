import axios from "axios";
import {
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE,
} from "../../types/typesforgotPassword/TypesSendEmail";
import UrlApi from "../../UrlApi";


// action này để xử lí những api trả về list active

export default SendEmailAction = (email) => {
  const endPointSendEmail = 'auth/forgot-password'
  console.log(email, `${UrlApi}${endPointSendEmail}`, 'màn SendEmailAction')
  return async (dispatch) => {
    dispatch({ type: SEND_EMAIL_REQUEST });
    try {
      console.log("chưa call api màn SendEmailAction");
      const res = await axios.post(`${UrlApi}${endPointSendEmail}`, {email: email}); 
      
      console.log('đã call api màn SendEmailAction');
      dispatch({
        type: SEND_EMAIL_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: SEND_EMAIL_FAILURE,
        payload: error.message,
      });
    }
  };
};
