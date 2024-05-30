import axios from "axios";
import {
  LIST_ACTIVE_CREATED_REQUEST,
  LIST_ACTIVE_CREATED_SUCCESS,
  LIST_ACTIVE_CREATED_FAILURE
} from "../types/TypesListActiveCreated";
import UrlApi from "../UrlApi";
import SetAuthToken from '../../component/SetAuthToken'

// action này để xử lí những api trả về list active

export const ListActiveCreatedAction = (urlActiveCreated) => {
  
  return async (dispatch) => {
    await SetAuthToken()
    dispatch({ type: LIST_ACTIVE_CREATED_REQUEST });
    try {
      console.log("chưa call api màn listActiveAction");
      const res = await axios.get(
        `${UrlApi}${urlActiveCreated}`
      ); // Replace with your API endpoint
      const listActive = res.data;

      console.log('đã call api màn listActiveAction', listActive);
      dispatch({
        type: LIST_ACTIVE_CREATED_SUCCESS,
        payload: listActive,
      });
    } catch (error) {
      dispatch({
        type: LIST_ACTIVE_CREATED_FAILURE,
        payload: error.message,
      });
    }
  };
};
