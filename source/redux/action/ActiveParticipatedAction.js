import axios from "axios";
import {
  ACTIVE_PARTICIPATED_REQUEST,
  ACTIVE_PARTICIPATED_SUCCESS,
  ACTIVE_PARTICIPATED_FAILURE,
} from "../types/TypesActiveParticipated";
import UrlApi from '../UrlApi'
import SetAuthToken from '../../component/SetAuthToken'


export default ActiveParticipatedAction = () => {
  const activeParticipated = 'activities/activities_student_joined'
  return async (dispatch) => {
    
    try {
      dispatch({ type: ACTIVE_PARTICIPATED_REQUEST });
      await SetAuthToken();
      console.log("chưa call api màn ActiveParticipatedAction");
      console.log(
        `${UrlApi}${activeParticipated}`,
        "link màn ActiveParticipatedAction"
      );
      const res = await axios.get(`${UrlApi}${activeParticipated}`); 
      const activeData = res.data;

      console.log("đã call api màn ActiveParticipatedAction", activeData);
      dispatch({
        type: ACTIVE_PARTICIPATED_SUCCESS,
        payload: activeData,
      });
    } catch (error) {
      console.error(error, " màn ActiveParticipatedAction");
      let errorForUser = 'Lỗi tải hoạt động vui lòng thử lại'
      dispatch({
        type: ACTIVE_PARTICIPATED_FAILURE,
        payload: errorForUser,
      });
    }
  };
};
