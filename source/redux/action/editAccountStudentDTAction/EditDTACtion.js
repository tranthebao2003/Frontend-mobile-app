import axios from "axios";
import {
  EDIT_DT_REQUEST,
  EDIT_DT_SUCCESS,
  EDIT_DT_FAILURE,
} from "../../types/typesEditStudentDT/TypesEditDT";
import UrlApi from "../../UrlApi";
import SetAuthToken from '../../../component/SetAuthToken'

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export default EditDTACtion = (editAccountDT) => {
  const editAccountDTUrl = "users/university_union/";
  
  return async (dispatch) => {
    dispatch({ type: EDIT_DT_REQUEST });
    console.log(`${UrlApi}${editAccountDTUrl}`, 'link màn EditDTACtion')
    try {
     await SetAuthToken()
      console.log(editAccountDT, "editAccountDT màn EditDTACtion");
      
      const res = await axios.put(`${UrlApi}${editAccountDTUrl}`, editAccountDT);

      dispatch({
        type: EDIT_DT_SUCCESS,
      });
    } catch (error) {

      console.error('Sửa tài khoản thất bại', error);
      
      let errorForUser = 'Sửa tài khoản thất bại vui lòng thử lại'
      dispatch({
        type: EDIT_DT_FAILURE,
        payload: errorForUser,
      });
    }
  };
};

