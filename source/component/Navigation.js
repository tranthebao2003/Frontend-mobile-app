import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Xác minh
import Login from '../component/welcome/Login';
import ForgotPassword from '../component/welcome/ForgotPassword';

// Sinh viên
import {UITapSinhVien} from '../screen/user/UITapSinhVien'
import DetailActive from '../screen/user/detailActive/DetailActive'
import DetailActived from '../screen/user/detailActived/DetailActived'

// Trưởng câu lạc bộ
import { UITapTruongCLB } from '../screen/truongCLB/UITapTruongCLB';
import  ListActiveTruongCLB  from '../screen/truongCLB/listActiveTruongCLB/ListActiveTruongCLB';
import  DetailActiveTruongCLB  from '../screen/truongCLB/detailActiveTruongCLB/DetailActiveTruongCLB';

import  ListActiveCreatedTruongCLB  from '../screen/truongCLB//listActiveCreatedTruongCLB/ListActiveCreatedTruongCLB';

// Đoàn trường
import { UITapDoanTruong } from '../screen/doanTruong/UITapDoanTruong';
import DetailActiveDTruong from '../screen/doanTruong/detailActive/DetailActiveDoanTruong'
import FormCreateActive2 from '../screen/generalFunction/FormCreateActive2';
import ScreenListDoanTruong from "../screen/doanTruong/listActive/ScreenListDoanTruong"
import ListActiveCreatedDT from "../screen/doanTruong/listActiveCreated/ListActiveCreatedDT";
import ListActiveApproveDT from "../screen/doanTruong/listActiveApprove/ListActiveApproveDT";
import DetailActiveApprove from "../screen/doanTruong/detailActiveApprove/DetailActiveApprove";
import ListOrganizedActiveDT from "../screen/doanTruong/listOrganizedActive/ListOrganizedActiveDT";
import DetailOrganizedActive from "../screen/doanTruong/detailOrganizedActive/DetailOrganizedActive";
import ListApproveSv from "../screen/doanTruong/listApproveSv/ListApproveSv";
import DetailApproveSv from "../screen/doanTruong/detailApproveSv/DetailApproveSv";



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

const TruongCLB = () => {
  return(
    // Trưởng câu lạc bộ, bí thứ
    <Stack.Navigator initialRouteName='uiTapTruongCLB' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="uiTapTruongCLB" component={UITapTruongCLB} />
      <Stack.Screen name="formCreateActive2" component={FormCreateActive2} />

      <Stack.Screen name="listActiveTruongCLB" component={ListActiveTruongCLB} />
      <Stack.Screen name="detailActiveTruongCLB" component={DetailActiveTruongCLB} />

      <Stack.Screen name="listActiveCreatedTruongCLB" component={ListActiveCreatedTruongCLB} />
    </Stack.Navigator>
  )

};

const DoanTruong = () => {
  return (
     // Đoàn trường
    <Stack.Navigator initialRouteName='uiTapDTruong' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="uiTapDTruong" component={UITapDoanTruong} />
      <Stack.Screen name="formCreateActive2" component={FormCreateActive2} />

      <Stack.Screen name="screenListDoanTruong" component={ScreenListDoanTruong} />
      <Stack.Screen name="detailActiveDTruong" component={DetailActiveDTruong}/>

      <Stack.Screen name="listActiveCreatedDT" component={ListActiveCreatedDT} />
     
      <Stack.Screen name="listActiveApproveDT" component={ListActiveApproveDT} />
      <Stack.Screen name="detailActiveApprove" component={DetailActiveApprove} />

      <Stack.Screen name="listOrganizedActiveDT" component={ListOrganizedActiveDT} />
      <Stack.Screen name="detailOrganizedActive" component={DetailOrganizedActive} />

      <Stack.Screen name="listApproveSv" component={ListApproveSv} />
      <Stack.Screen name="detailApproveSv" component={DetailApproveSv} />
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
          authToken === true ? <AuthStack/> : <TruongCLB/>
        }
      </NavigationContainer>
    );
}
