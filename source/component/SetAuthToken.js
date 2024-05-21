

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Để sử dụng token trong các yêu cầu tiếp theo, 
// ta cần thêm nó vào header của yêu cầu.
const SetAuthToken = async () => {
  const tokenReceive = await AsyncStorage.getItem('token');
  // console.log(tokenReceive, 'màn hình headerAxios')
  if (tokenReceive) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${tokenReceive}`;
  } else {
    console.log('xóa header token màn hình headerAxios')
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default SetAuthToken;