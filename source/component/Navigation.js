import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../component/welcome/Login';
import ForgotPassword from '../component/welcome/ForgotPassword';

import {UITapSinhVien} from '../screen/user/UITapSinhVien'
import DetailActive from '../screen/user/detailActive/DetailActive'
import DetailActived from '../screen/user/detailActived/DetailActived'

import { UITapDoanTruong } from '../screen/doanTruong/UITapDoanTruong';
import DetailActiveDTruong from '../screen/doanTruong/detailActive/DetailActiveDoanTruong'
import FormCreateActive2 from '../screen/generalFunction/FormCreateActive2';
import ScreenListDoanTruong from "../screen/doanTruong/listActive/ScreenListDoanTruong"
import ListActiveCreatedDT from "../screen/doanTruong/listActiveCreated/ListActiveCreatedDT";
import ListActiveApproveDT from "../screen/doanTruong/listActiveApprove/ListActiveApproveDT";
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import SetAuthToken from "./SetAuthToken";

import HandelJwtDecode from './JwtDecode';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();


const AuthStack = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="forgot" component={ForgotPassword} />
    </Stack.Navigator>
  )
}

const SinhVien = () => {
  return(
    // Sinh viên
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="uiTapSv" component={UITapSinhVien} />
      <Stack.Screen name="detailActive" component={DetailActive} />
      <Stack.Screen name="detailActived" component={DetailActived} />
    </Stack.Navigator>
  )

};

const DoanTruong = () => {
  return (
     // Đoàn trường
    <Stack.Navigator initialRouteName='uiTapDTruong' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="uiTapDTruong" component={UITapDoanTruong} />
      <Stack.Screen name="formCreateActive2" component={FormCreateActive2} />
      <Stack.Screen name="listActiveCreatedDT" component={ListActiveCreatedDT} />

      <Stack.Screen name="screenListDoanTruong" component={ScreenListDoanTruong} />
      <Stack.Screen name="detailActiveDTruong" component={DetailActiveDTruong}/>
     
      <Stack.Screen name="listActiveApproveDT" component={ListActiveApproveDT} />
    </Stack.Navigator>
  );
}


const getUserFromToken = async () => {
  try {
    // bắt buộc phải để let để mik có thể xóa 4 kí tự đầu của token
    // để decode đc
      let token = await AsyncStorage.getItem('token');
      console.log('token getUserFromtoken: ', token)
      if (token) {
          console.log('token trong if: ', token)
          const decodedToken = HandelJwtDecode(token);
          return decodedToken;
      }
      return null;
  } catch (err) {
      return {
          success: false,
          message: err.message || 'Error retrieving token'
      };
  }
};

export default RootElement = () =>{
    const { authToken } = useSelector((state) => state.authReducer);

    useEffect(() => {
      SetAuthToken();
    }, [authToken]);

    console.log (authToken, ' màn navigation')

    // // objectA = JwtDecode(authToken)
    // // console.log('object A: ', objectA)
    // objectDecode = getUserFromToken()
    // console.log('objectDecode ', objectDecode)

  //   getUserFromToken().then(decodedToken => {
  //     if (decodedToken && decodedToken.success) {
  //         console.log('Decoded token data:', decodedToken.data);
  //     } else {
  //         console.log('Error:', decodedToken ? decodedToken.message : 'Token not found');
  //     }
  //  });

    return (
      <NavigationContainer>
        {
          authToken === true ? <AuthStack/> : <DoanTruong/>
        }
      </NavigationContainer>
    );
}
