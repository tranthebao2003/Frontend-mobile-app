import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../types/TypesLogin";
import AsyncStorage from "@react-native-async-storage/async-storage"


// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export const LoginAction = (userName, password) => {
  return async (dispatch) => {
    dispatch({type: LOGIN_REQUEST})
    try {
      console.log(userName, password)
      const res = await axios.post(
        "https://quanlyhoatdongsinhvienptit.onrender.com/api/v1/auth/login",
        {
          username: userName,
          password: password,
        }
      );

      const { token, role } = res.data;
      console.log(data, 'màn loginAction')

      await AsyncStorage.setItem('token', token); // Lưu trữ token trong local storage
      await AsyncStorage.setItem('role', role.toString()); // Lưu trữ token trong local storage

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {token, role},
      });

      
    } catch (error) {
        // Sử dụng console.error thay vì console.log trong 
        // phần catch: Điều này giúp 
        // phân biệt lỗi trong log dễ dàng hơn
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.message,
      });
    }
  };
};


export const LogoutAction = () => {
  // trước khi bắn đi type logout thì
  // mình phải xóa token và role trong local
  // storage
  return async (dispatch) => {
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('role')
    
    dispatch({
      type: LOGOUT
    })
  }
};

