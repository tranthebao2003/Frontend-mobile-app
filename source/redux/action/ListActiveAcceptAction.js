import axios from "axios";
import {
  LIST_ACTIVE_REQUEST,
  LIST_ACTIVE_SUCCESS,
  LIST_ACTIVE_FAILURE
} from "../types/TypesListActive";
import UrlApi from "../UrlApi";

export const ListActiveAcceptAction = () => {
  const urlListActive = 'activities/activities_accept'
  return async (dispatch) => {
    
    try {
      dispatch({ type: LIST_ACTIVE_REQUEST });
      console.log("chưa call api màn listActiveAction");
      const res = await axios.get(
        `${UrlApi}${urlListActive}`
      ); // Replace with your API endpoint
      const listActiveAccept = res.data;

      console.log('đã call api màn listActiveAction', listActiveAccept);
      dispatch({
        type: LIST_ACTIVE_SUCCESS,
        payload: listActiveAccept,
      });
    } catch (error) {
      dispatch({
        type: LIST_ACTIVE_FAILURE,
        payload: error.message,
      });
    }
  };
};
