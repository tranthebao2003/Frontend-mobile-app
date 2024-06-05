import axios from "axios";
import {
 THONG_KE_ACTIVE_REQUEST,
 THONG_KE_ACTIVE_SUCCESS,
 THONG_KE_ACTIVE_FAILURE,
} from "../../types/typesThongKe/TypesThongKeAdminDT";
import UrlApi from "../../UrlApi";
import SetAuthToken from '../../../component/SetAuthToken'

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export default ThongKeAdminDTAction = (monthYearLimit) => {
  const thongKeActive = "activities/statistical";
  
  return async (dispatch) => {
    dispatch({ type: THONG_KE_ACTIVE_REQUEST });
    console.log(`${UrlApi}${thongKeActive}`, 'link màn ThongKeAdminDTAction')
    try {
     await SetAuthToken()
      console.log(monthYearLimit, "monthYearLimit màn ThongKeAdminDTAction");
      
      const res = await axios.get(`${UrlApi}${thongKeActive}`, monthYearLimit);
      const activeThongKe = res.data;
      
      dispatch({
        type: THONG_KE_ACTIVE_SUCCESS,
        payload: activeThongKe
      });
    } catch (error) {

      console.error('Lọc hoạt động thất bại', error);
      
      let errorForUser = 'Lọc hoạt động thất bại vui lòng thử lại'
      dispatch({
        type: THONG_KE_ACTIVE_FAILURE,
        payload: errorForUser,
      });
    }
  };
};

