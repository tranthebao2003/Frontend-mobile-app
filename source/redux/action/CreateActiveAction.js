import axios from "axios";
import {
  CREATE_ACTIVE_REQUEST,
  CREATE_ACTIVE_SUCCESS,
  CREATE_ACTIVE_FAILURE,
} from "../types/TypesCreateActive";
import UrlApi from "../UrlApi";
import SetAuthToken from '../../component/SetAuthToken'

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export default CreateActiveAction = (active) => {
  const createActiveUrl = "users/create_union";
  
  return async (dispatch) => {
    try {
    dispatch({ type: CREATE_ACTIVE_REQUEST });
     await SetAuthToken()
      console.log(active, "màn createActive");
      const res = await axios.post(`${UrlApi}${createActiveUrl}`, active);

      dispatch({
        type: CREATE_ACTIVE_SUCCESS,
      });
    } catch (error) {
      // Sử dụng console.error thay vì console.log trong
      // phần catch: Điều này giúp
      // phân biệt lỗi trong log dễ dàng hơn
      console.error("Tạo tài khoản thất bại", error);

      if (error.response) {
        // Request made and server responded
        dispatch({
          type: CREATE_ACTIVE_FAILURE,
          payload: error.message
        }
         

          );
      } else if (error.request) {
        // The request was made but no response was received
        dispatch({
          type: CREATE_ACTIVE_FAILURE,
          payload: "No response received from the server."}
        )
      }
       else {
        // Something happened in setting up the request that triggered an Error
        dispatch({
          type: CREATE_ACTIVE_FAILURE,
          payload: error.message
        });
      }
    }
  };
};

