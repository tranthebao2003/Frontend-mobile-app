import axios from "axios";
import {
 THONG_KE_ACTIVE_TRUONGCLB_REQUEST,
 THONG_KE_ACTIVE_TRUONGCLB_SUCCESS,
 THONG_KE_ACTIVE_TRUONGCLB_FAILURE,
} from "../../types/typesThongKe/TypesThongKeTruongCLB";
import UrlApi from "../../UrlApi";
import SetAuthToken from '../../../component/SetAuthToken'

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export default ThongKeTruongCLBAction = (classId) => {
  const thongKeActive = "activities/activities_class";
  
  return async (dispatch) => {
    dispatch({ type: THONG_KE_ACTIVE_TRUONGCLB_REQUEST });
    
    console.log(`${UrlApi}${thongKeActive}`, 'link màn ThongKeTruongCLBAction')
    try {
     await SetAuthToken()
      console.log(classId, "classId màn ThongKeTruongCLBAction");
      
      const res = await axios.get(`${UrlApi}${thongKeActive}`, classId);
      const activeThongKe = res.data;
      
      dispatch({
        type: THONG_KE_ACTIVE_TRUONGCLB_SUCCESS,
        payload: activeThongKe
      });
    } catch (error) {

      console.error('Thống kê hoạt động thất bại', error);
      
      let errorForUser = 'Thống kê hoạt động thất bại vui lòng thử lại'
      dispatch({
        type: THONG_KE_ACTIVE_TRUONGCLB_FAILURE,
        payload: errorForUser,
      });
    }
  };
};

