import axios from "axios";
import { LOGIN, LOGOUT } from "../types/TypesUser";
import AsyncStorage from "@react-native-async-storage/async-storage"


// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export const LoginAction = (userName, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "https://quanlyhoatdongsinhvienptit.onrender.com/api/v1/auth/login",
        {
          username: userName,
          password: password,
        }
      );
 
      const { token } = res.data;
      
      await AsyncStorage.setItem('token', token); // Lưu trữ token trong local storage
      
      dispatch({
        type: LOGIN,
        payload: token,
      });

      console.log('da tra ve token màn userAction')
    } catch (error) {
        // Sử dụng console.error thay vì console.log trong 
        // phần catch: Điều này giúp 
        // phân biệt lỗi trong log dễ dàng hơn
      await console.error(`Login error ${error}`);
      dispatch({
        type: LOGIN_ERROR,
        payload: error.message,
      });
    }
  };
};

export const LogoutAction = () => {
  return {
    type: LOGOUT,
    payload: null,
  };
};

