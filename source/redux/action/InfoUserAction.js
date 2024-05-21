import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    INFO_USER_REQUEST,
    INFO_USER_SUCCESS,
    INFO_USER_FAILURE,
} from "../types/TypesInfoUser";
import SetAuthToken from '../../component/SetAuthToken';

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch({ type: INFO_USER_REQUEST });

    try {
      await SetAuthToken();
      const response = await axios.get('/api/user'); // Replace with your API endpoint
      const userData = response.data;

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