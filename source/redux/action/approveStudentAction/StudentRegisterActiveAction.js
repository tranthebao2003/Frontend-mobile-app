import axios from "axios";
import {
  STUDENT_REGISTER_ACTIVE_REQUEST,
  STUDENT_REGISTER_ACTIVE_SUCCESS,
  STUDENT_REGISTER_ACTIVE_FAILURE,
} from "../../types/typesApproveStudent/TypesStudentRegisterActive";
import UrlApi from "../../UrlApi";
import SetAuthToken from "../../../component/SetAuthToken";

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export default StudentRegisterActiveAction = (idActive) => {
  const resigterUrl = `register_activities/get_accept_register/${idActive}`;

  return async (dispatch) => {
    dispatch({ type: STUDENT_REGISTER_ACTIVE_REQUEST });
    
    try {
      await SetAuthToken();
      console.log(idActive, "idActive màn StudentRegisterActiveAction");
      console.log(`${UrlApi}${resigterUrl}`, "link màn StudentRegisterActiveAction");
      
      const res = await axios.get(`${UrlApi}${resigterUrl}`);
      const listResigter = res.data;

      console.log("đã call api");
      dispatch({
        type: STUDENT_REGISTER_ACTIVE_SUCCESS,
        payload: listResigter,
      });
    } catch (error) {
      console.error("Lấy danh sách đăng kí thất bại", error);

      let errorForUser = "Lấy danh sách đăng kí thất bại";
      dispatch({
        type: STUDENT_REGISTER_ACTIVE_FAILURE,
        payload: errorForUser,
      });
    }
  };
};
