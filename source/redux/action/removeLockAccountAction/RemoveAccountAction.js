import axios from "axios";
import {
  REMOVE_ACCOUNT_REQUEST,
  REMOVE_ACCOUNT_SUCCESS,
  REMOVE_ACCOUNT_FAILURE,
} from "../../types/typesRemoveLockAccount/TypesRemoveAccount";
import UrlApi from "../../UrlApi";
import SetAuthToken from '../../../component/SetAuthToken'

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export default RemoveAccountAction = (accountId) => {
  const removeAccountUrl = `users/`;
  
  return async (dispatch) => {
    dispatch({ type: REMOVE_ACCOUNT_REQUEST });
    console.log(`${UrlApi}${removeAccountUrl}${accountId}`, 'link màn RemoveActiveAction')
    try {
     await SetAuthToken()
      console.log(accountId, "accountId màn RemoveAccountAction");
      
      const res = await axios.delete(`${UrlApi}${removeAccountUrl}${accountId}`);

      dispatch({
        type: REMOVE_ACCOUNT_SUCCESS,
      });
    } catch (error) {

      console.error('Xóa tài khoản thất bại', error);
      
      let errorForUser = 'Xóa tài khoản thất bại vui lòng thử lại'
      dispatch({
        type: REMOVE_ACCOUNT_FAILURE,
        payload: errorForUser,
      });
    }
  };
};

