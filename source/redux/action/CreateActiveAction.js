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
  const createActiveUrl = "activities/";
  
  return async (dispatch) => {
    dispatch({ type: CREATE_ACTIVE_REQUEST });
    try {
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
      console.error('Tạo hoạt động thất bại', error);
      
      let errorForUser = 'Tạo hoạt động thất bại vui lòng thử lại'
      dispatch({
        type: CREATE_ACTIVE_FAILURE,
        payload: errorForUser,
      });
    }
  };
};

