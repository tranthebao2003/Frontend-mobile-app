import axios from "axios";
import {
  INFO_USER_REQUEST,
  INFO_USER_SUCCESS,
  INFO_USER_FAILURE,
} from "../types/TypesInfoUser";
import UrlApi from '../UrlApi'
import SetAuthToken from '../../component/SetAuthToken'


export const getProfileUser = () => {
  const urlInfoUser = 'users/details'
  return async (dispatch) => {
    
    try {
      dispatch({ type: INFO_USER_REQUEST });
      await SetAuthToken()
      console.log("chưa call api màn inforUserAction");
      const res = await axios.get(
        `${UrlApi}${urlInfoUser}`
      ); // Replace with your API endpoint
      const userData = res.data;

      console.log('đã call api màn inforUserAction', userData);
      dispatch({
        type: INFO_USER_SUCCESS,
        payload: userData,
      });
    } catch (error) {
      dispatch({
        type: INFO_USER_FAILURE,
        payload: error.message,
      });
    }
  };
};
