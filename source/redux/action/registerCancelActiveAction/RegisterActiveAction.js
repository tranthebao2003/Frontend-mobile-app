import axios from "axios";
import {
  REGISTER_ACTIVE_REQUEST,
  REGISTER_ACTIVE_SUCCESS,
  REGISTER_ACTIVE_FAILURE,
} from "../../types/typesRegisterCancelActive/TypesRegisterActive";
import UrlApi from "../../UrlApi";
import SetAuthToken from '../../../component/SetAuthToken'

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export default RegisterActiveAction = (act_id) => {
  const registerActive = "register_activities/";
  return async (dispatch) => {
    dispatch({ type: REGISTER_ACTIVE_REQUEST });
    try {
     
     await SetAuthToken()
      console.log(act_id, "act_id màn RegisterActiveAction");
      console.log(`${UrlApi}${registerActive}`, "link màn RegisterActiveAction");

      const res = await axios.post(`${UrlApi}${registerActive}`, act_id);
      
      dispatch({
        type: REGISTER_ACTIVE_SUCCESS,
      });
    } catch (error) {
      console.error('Đăng kí hoạt động thất bại', error);
      
      let errorForUser = 'Đăng kí hoạt động thất bại vui lòng thử lại'
      dispatch({
        type: REGISTER_ACTIVE_FAILURE,
        payload: errorForUser,
      });
    }
  };
};

