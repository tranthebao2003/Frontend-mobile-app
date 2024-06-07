import axios from "axios";
import {
  CANCEL_ACTIVE_REQUEST,
  CANCEL_ACTIVE_SUCCESS,
  CANCEL_ACTIVE_FAILURE,
} from "../../types/typesRegisterCancelActive/TypesCancelActive";
import UrlApi from "../../UrlApi";
import SetAuthToken from '../../../component/SetAuthToken'

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export default CancelActiveAction = (idResigter) => {
  const cancelActiveUrl = "register_activities/";
  
  return async (dispatch) => {
    dispatch({ type: CANCEL_ACTIVE_REQUEST });
    try {
   
     await SetAuthToken()
     console.log(
       `${UrlApi}${cancelActiveUrl}${idResigter}`,
       "link màn CancelActiveAction"
     );
     console.log(idResigter, "idResigter màn CancelActiveAction");

     const res = await axios.delete(`${UrlApi}${cancelActiveUrl}${idResigter}`);

     dispatch({
       type: CANCEL_ACTIVE_SUCCESS,
     });
    } catch (error) {

      console.error('Hủy tham gia hoạt động thất bại', error);
      
      let errorForUser = 'Hủy tham gia hoạt động thất bại vui lòng thử lại'
      dispatch({
        type: CANCEL_ACTIVE_FAILURE,
        payload: errorForUser,
      });
    }
  };
};

