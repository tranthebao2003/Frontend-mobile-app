

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Để sử dụng token trong các yêu cầu tiếp theo, 
// ta cần thêm nó vào header của yêu cầu.
// nếu mà ko có token nào trong local storage thì xóa headers đi
const SetAuthToken = async () => {
  try {
    const tokenReceive = await AsyncStorage.getItem("token");
    if (tokenReceive) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${tokenReceive}`;
    } else {
      console.log('xóa header token màn hình SetAuthToken')
      delete axios.defaults.headers.common["Authorization"];
    }
  } catch (error) {
    console.error("Không thể load token lên từ local storage", error);
  }
};

export default SetAuthToken;