import axios from "axios";
import {
  LOCK_ACCOUNT_REQUEST,
  LOCK_ACCOUNT_SUCCESS,
  LOCK_ACCOUNT_FAILURE,
} from "../../types/typesRemoveLockAccount/TypesLockAccount";
import UrlApi from "../../UrlApi";
import SetAuthToken from '../../../component/SetAuthToken'

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export default LockAccountAction = (idStatusId) => {
  const lockAccountUrl = `users/update`;
  
  return async (dispatch) => {
    dispatch({ type: LOCK_ACCOUNT_REQUEST });
    console.log(`${UrlApi}${lockAccountUrl}`, 'link màn LockAccountAction')
    try {
     await SetAuthToken()
      console.log(idStatusId, "idStatusId màn LockAccountAction");
      
      const res = await axios.put(`${UrlApi}${lockAccountUrl}`, idStatusId);

      dispatch({
        type: LOCK_ACCOUNT_SUCCESS,
      });
    } catch (error) {

      console.error('Thực hiện thất bại', error);
      
      let errorForUser = 'Thực hiện thất bại vui lòng thử lại'
      dispatch({
        type: LOCK_ACCOUNT_FAILURE,
        payload: errorForUser,
      });
    }
  };
};

