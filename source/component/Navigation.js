import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../component/welcome/Login';
import ForgotPassword from '../component/welcome/ForgotPassword';

import {UITapSinhVien} from '../screen/user/UITapSinhVien'
import DetailActive from '../screen/user/detailActive/DetailActive'
import DetailActived from '../screen/user/detailActived/DetailActived'

import { UITapDoanTruong } from '../screen/doanTruong/UITapDoanTruong';
import DetailActiveDTruong from '../screen/doanTruong/detailActive/DetailActiveDoanTruong'

import { Provider } from 'react-redux';
import { Store } from '../redux/store/Store';
const Stack = createNativeStackNavigator();


export default RootElement = () =>{
    return (
      <Provider store ={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="forgot" component={ForgotPassword} />

          {/* For student */}
          <Stack.Screen name="uiTapSv" component={UITapSinhVien} />
          <Stack.Screen name="detailActive" component={DetailActive} />
          <Stack.Screen name="detailActived" component={DetailActived} />

          {/* For Đoàn trường */}
          <Stack.Screen name="uiTapDTruong" component={UITapDoanTruong} />
          <Stack.Screen name="detailActiveDTruong" component={DetailActiveDTruong} />
        </Stack.Navigator>
      </NavigationContainer>

      </Provider>
    );
}
