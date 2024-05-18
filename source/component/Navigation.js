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
import { useDispatch, useSelector } from 'react-redux';
import {InitAction} from '../redux/action/UserAction'
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();


const AuthStack = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  )
}

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="forgot" component={ForgotPassword} />

      {/* For student */}
      <Stack.Screen name="uiTapSv" component={UITapSinhVien} />
      <Stack.Screen name="detailActive" component={DetailActive} />
      <Stack.Screen name="detailActived" component={DetailActived} />

      {/* For Đoàn trường */}
      <Stack.Screen name="uiTapDTruong" component={UITapDoanTruong} />
      <Stack.Screen
        name="detailActiveDTruong"
        component={DetailActiveDTruong}
      />
      <Stack.Screen name="formCreateActive2" component={FormCreateActive2} />
    </Stack.Navigator>
  );
}

export default RootElement = () =>{
    const {authToken} = useSelector(state => state.authReducer)
    console.log(authToken)

    // const dispatch = useDispatch()
    // useEffect(() => {
    //   () => {
    //     dispatch(InitAction)
    //   }
    // }, [])
    
    return (
      <NavigationContainer>
        {
          authToken === null ? <AuthStack/> : <MyStack/>
        }
      </NavigationContainer>
    );
}
