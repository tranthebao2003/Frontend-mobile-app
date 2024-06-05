import axios from "axios";
import {
  EDIT_ACTIVE_REQUEST,
  EDIT_ACTIVE_SUCCESS,
  EDIT_ACTIVE_FAILURE,
} from "../../types/typesRemoveEditActive/TypesEditActive";
import UrlApi from "../../UrlApi";
import SetAuthToken from '../../../component/SetAuthToken'

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export default EditActiveAction = (editActive) => {
  const editActiveUrl = "activities/update-act/";
  return async (dispatch) => {
    dispatch({ type: EDIT_ACTIVE_REQUEST });
    console.log(`${UrlApi}${editActiveUrl}`, 'link màn EditActiveAction')
    try {
     await SetAuthToken()
      console.log(editActive, "editActive màn EditActiveAction");
      
      const res = await axios.put(`${UrlApi}${editActiveUrl}`, editActive);

      dispatch({
        type: EDIT_ACTIVE_SUCCESS,
      });
    } catch (error) {

      console.error('Sửa hoạt động thất bại', error);
      
      let errorForUser = 'Sửa hoạt động thất bại vui lòng thử lại'
      dispatch({
        type: EDIT_ACTIVE_FAILURE,
        payload: errorForUser,
      });
    }
  };
};

