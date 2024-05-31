import axios from "axios";
import {
  CREATE_DT_REQUEST,
  CREATE_DT_SUCCESS,
  CREATE_DT_FAILURE,
} from "../../types/typesCreateUser/TypesCreateDT";
import UrlApi from "../../UrlApi";
import SetAuthToken from '../../../component/SetAuthToken'

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export default CreateDoanTruongAction = (accountDT) => {
  const uerCreateDt = "users/create_union";
  return async (dispatch) => {
    dispatch({ type: CREATE_DT_REQUEST });
    try {
     
     await SetAuthToken()
      console.log(accountDT, "màn createDtAction");
      const res = await axios.post(`${UrlApi}${uerCreateDt}`, accountDT);
      
      dispatch({
        type: CREATE_DT_SUCCESS,
      });
    } catch (error) {
      // Sử dụng console.error thay vì console.log trong
      // phần catch: Điều này giúp
      // phân biệt lỗi trong log dễ dàng hơn
      console.error('Tạo tài khoản thất bại', error);
      
      let errorForUser = 'Tạo tài khoản thất bại vui lòng thử lại'
      dispatch({
        type: CREATE_DT_FAILURE,
        payload: errorForUser,
      });
    }
  };
};

