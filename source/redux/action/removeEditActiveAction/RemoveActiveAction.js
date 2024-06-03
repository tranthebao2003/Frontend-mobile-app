import axios from "axios";
import {
  REMOVE_ACTIVE_REQUEST,
  REMOVE_ACTIVE_SUCCESS,
  REMOVE_ACTIVE_FAILURE,
} from "../../types/typesRemoveEditActive/TypesRemoveActive";
import UrlApi from "../../UrlApi";
import SetAuthToken from '../../../component/SetAuthToken'

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export default RemoveActiveAction = (idActive) => {
  const removeActiveUrl = `activities/`;
  
  return async (dispatch) => {
    dispatch({ type: REMOVE_ACTIVE_REQUEST });
    console.log(`${UrlApi}${removeActiveUrl}`, 'link màn RemoveActiveAction')
    try {
     await SetAuthToken()
      console.log(idActive, "idActive màn RemoveActiveAction");
      
      const res = await axios.delete(`${UrlApi}${removeActiveUrl}`, idActive);

      dispatch({
        type: REMOVE_ACTIVE_SUCCESS,
      });
    } catch (error) {

      console.error('Xóa hoạt động thất bại', error);
      
      let errorForUser = 'Xóa hoạt động thất bại vui lòng thử lại'
      dispatch({
        type: REMOVE_ACTIVE_FAILURE,
        payload: errorForUser,
      });
    }
  };
};

