import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LOGIN_SUCCESS} from '../redux/types/TypesLogin'

// resource 
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import SetAuthToken from "./SetAuthToken";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Xác minh
import Login from '../component/welcome/Login';
import ForgotPassword from '../component/welcome/ForgotPassword';

// Sinh viên
import {UITapSinhVien} from '../screen/user/UITapSinhVien'
import DetailActive from '../screen/user/detailActive/DetailActive'
import DetailActived from '../screen/user/detailActived/DetailActived'

// Trưởng câu lạc bộ
import { UITapTruongCLB } from '../screen/truongCLB/UITapTruongCLB';
import Form2CreateActiveTruongCLB from'../screen/truongCLB/formCreateActive/Form2CreateActiveTruongCLB'

import  ListActiveTruongCLB  from '../screen/truongCLB/listActiveTruongCLB/ListActiveTruongCLB';
import  DetailActiveTruongCLB  from '../screen/truongCLB/detailActiveTruongCLB/DetailActiveTruongCLB';

import  ListActiveCreatedTruongCLB  from '../screen/truongCLB/listActiveCreatedTruongCLB/ListActiveCreatedTruongCLB';

import  ListApproveSvTruongCLB  from '../screen/truongCLB/listApproveSvTruongCLB/ListApproveSvTruongCLB';
import  DetailApproveSvTruongCLB  from '../screen/truongCLB/detailApproveSvTruongCLB/DetailApproveSvTruongCLB';

import  ListThongKeHoatDong  from '../screen/truongCLB/thongKeHoatDong/ListThongKeHoatDong';
import  DetailThongKeHoatDong  from '../screen/truongCLB/detailThongKeHoatDong/DetailThongKeHoatDong';

import  From1EditActiveTruongCLB  from '../screen/truongCLB/editActiveTruongCLB/From1EditActiveTruongCLB';
import  From2EditActiveTruongCLB  from '../screen/truongCLB/editActiveTruongCLB/From2EditActiveTruongCLB';

// Đoàn trường
import { UITapDoanTruong } from '../screen/doanTruong/UITapDoanTruong';
import Form2CreateActiveDT from '../screen/doanTruong/formCreateActive/Form2CreateActiveDT'


import DetailActiveDTruong from '../screen/doanTruong/detailActive/DetailActiveDoanTruong'

import ScreenListDoanTruong from "../screen/doanTruong/listActive/ScreenListDoanTruong"
import ListActiveCreatedDT from "../screen/doanTruong/listActiveCreated/ListActiveCreatedDT";
import ListActiveApproveDT from "../screen/doanTruong/listActiveApprove/ListActiveApproveDT";
import DetailActiveApprove from "../screen/doanTruong/detailActiveApprove/DetailActiveApprove";
import ListOrganizedActiveDT from "../screen/doanTruong/listOrganizedActive/ListOrganizedActiveDT";
import DetailOrganizedActive from "../screen/doanTruong/detailOrganizedActive/DetailOrganizedActive";
import ListApproveSv from "../screen/doanTruong/listApproveSv/ListApproveSv";
import DetailApproveSv from "../screen/doanTruong/detailApproveSv/DetailApproveSv";

import From1EditActiveDoanTruong from "../screen/doanTruong/editActiveDoanTruong/From1EditActiveDoanTruong";
import From2EditActiveDoanTruong from "../screen/doanTruong/editActiveDoanTruong/From2EditActiveDoanTruong";


// Admin
import { UITapAdmin } from '../screen/admin/UITapAdmin';
import  Form2CreateActiveAdmin  from '../screen/admin/formCreateActive/Form2CreateActiveAdmin';

import  ListActiveAdmin  from '../screen/admin/listActive/ListActiveAdmin'
import  DetailActiveAdmin  from '../screen/admin/detailActive/DetailActiveAdmin'

import  ListActiveCreatedAdmin  from '../screen/admin/listActiveCreated/ListActiveCreatedAdmin'

import  ListActiveApproveAdmin  from '../screen/admin/listActiveApprove/ListActiveApproveAdmin'
import  DetailActiveApproveAdmin  from '../screen/admin/detailActiveApprove/DetailActiveApproveAdmin'

import  ListOrganizedActiveAdmin  from '../screen/admin/listOrganizedActive/ListOrganizedActiveAdmin'
import  DetailOrganizedActiveAdmin  from '../screen/admin/detailOrganizedActive/DetailOrganizedActiveAdmin'

import  {UITapManageAccount}  from '../screen/admin/manageAccount/UITapManageAccount'


import  ListApproveSvAdmin  from '../screen/admin/listApproveSvAdmin/ListApproveSvAdmin'
import  DetailApproveSvAdmin  from '../screen/admin/detailApproveSvAdmin/DetailApproveSvAdmin'

import  From1EditActiveAdmin  from '../screen/admin/editActiveAdmin/From1EditActiveAdmin'
import  From2EditActiveAdmin  from '../screen/admin/editActiveAdmin/From2EditActiveAdmin'

import  Form1CreateStudent  from '../screen/admin/manageAccount/createAccount/createStudent/Form1CreateStudent'
import  Form2CreateStudent  from '../screen/admin/manageAccount/createAccount/createStudent/Form2CreateStudent'
import  Form3CreateStudent  from '../screen/admin/manageAccount/createAccount/createStudent/Form3CreateStudent'

import  Form1CreateDoanTruong  from '../screen/admin/manageAccount/createAccount/createDoanTruong/Form1CreateDoanTruong'
import  Form2CreateDoanTruong  from '../screen/admin/manageAccount/createAccount/createDoanTruong/Form2CreateDoanTruong'
import  Form3CreateDoanTruong  from '../screen/admin/manageAccount/createAccount/createDoanTruong/Form3CreateDoanTruong'

import  DetailAccountStudent  from '../screen/admin/manageAccount/detailAccountStudent/DetailAccountStudent'
import  DetailAccountDT  from '../screen/admin/manageAccount/detailAccountDT/DetailAccountDT'


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
      <Stack.Screen name="form2CreateActiveTruongCLB" component={Form2CreateActiveTruongCLB} />

      <Stack.Screen name="listActiveTruongCLB" component={ListActiveTruongCLB} />
      <Stack.Screen name="detailActiveTruongCLB" component={DetailActiveTruongCLB} />

      <Stack.Screen name="listActiveCreatedTruongCLB" component={ListActiveCreatedTruongCLB} />

      <Stack.Screen name="listApproveSvTruongCLB" component={ListApproveSvTruongCLB} />
      <Stack.Screen name="detailApproveSvTruongCLB" component={DetailApproveSvTruongCLB} />

      <Stack.Screen name="listThongKeHoatDong" component={ListThongKeHoatDong} />
      <Stack.Screen name="detailThongKeHoatDong" component={DetailThongKeHoatDong} />

      <Stack.Screen name="from1EditActiveTruongCLB" component={From1EditActiveTruongCLB} />
      <Stack.Screen name="from2EditActiveTruongCLB" component={From2EditActiveTruongCLB} />
    </Stack.Navigator>
  )

};

const DoanTruong = () => {
  return (
     // Đoàn trường
    <Stack.Navigator initialRouteName='uiTapDTruong' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="uiTapDTruong" component={UITapDoanTruong} />
      <Stack.Screen name="form2CreateActiveDT" component={Form2CreateActiveDT} />

      <Stack.Screen name="screenListDoanTruong" component={ScreenListDoanTruong} />
      <Stack.Screen name="detailActiveDTruong" component={DetailActiveDTruong}/>

      <Stack.Screen name="listActiveCreatedDT" component={ListActiveCreatedDT} />
     
      <Stack.Screen name="listActiveApproveDT" component={ListActiveApproveDT} />
      <Stack.Screen name="detailActiveApprove" component={DetailActiveApprove} />

      <Stack.Screen name="listOrganizedActiveDT" component={ListOrganizedActiveDT} />
      <Stack.Screen name="detailOrganizedActive" component={DetailOrganizedActive} />

      <Stack.Screen name="listApproveSv" component={ListApproveSv} />
      <Stack.Screen name="detailApproveSv" component={DetailApproveSv} />

      <Stack.Screen name="from1EditActiveDoanTruong" component={From1EditActiveDoanTruong} />
      <Stack.Screen name="from2EditActiveDoanTruong" component={From2EditActiveDoanTruong} />
    </Stack.Navigator>
  );
}

const Admin = () => {
  
  return(
    <Stack.Navigator initialRouteName='uiTapAdmin' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="uiTapAdmin" component={UITapAdmin} />
      <Stack.Screen name="form2CreateActiveAdmin" component={Form2CreateActiveAdmin} />

      <Stack.Screen name="listActiveAdmin" component={ListActiveAdmin} />
      <Stack.Screen name="detailActiveAdmin" component={DetailActiveAdmin} />

      <Stack.Screen name="listActiveCreatedAdmin" component={ListActiveCreatedAdmin} />

      <Stack.Screen name="listActiveApproveAdmin" component={ListActiveApproveAdmin} />
      <Stack.Screen name="detailActiveApproveAdmin" component={DetailActiveApproveAdmin} />

      <Stack.Screen name="listOrganizedActiveAdmin" component={ListOrganizedActiveAdmin} />
      <Stack.Screen name="detailOrganizedActiveAdmin" component={DetailOrganizedActiveAdmin} />

      <Stack.Screen name="uiTapManageAccount" component={UITapManageAccount} />

      <Stack.Screen name="listApproveSvAdmin" component={ListApproveSvAdmin} />
      <Stack.Screen name="detailApproveSvAdmin" component={DetailApproveSvAdmin} />

      <Stack.Screen name="from1EditActiveAdmin" component={From1EditActiveAdmin} />
      <Stack.Screen name="from2EditActiveAdmin" component={From2EditActiveAdmin} />

     
      <Stack.Screen name="form1CreateStudent" component={Form1CreateStudent} />
      <Stack.Screen name="form2CreateStudent" component={Form2CreateStudent} />
      <Stack.Screen name="form3CreateStudent" component={Form3CreateStudent} />

      <Stack.Screen name="form1CreateDoanTruong" component={Form1CreateDoanTruong} />
      <Stack.Screen name="form2CreateDoanTruong" component={Form2CreateDoanTruong} />
      <Stack.Screen name="form3CreateDoanTruong" component={Form3CreateDoanTruong} />

      <Stack.Screen name="detailAccountStudent" component={DetailAccountStudent} />
      <Stack.Screen name="detailAccountDT" component={DetailAccountDT} />
    </Stack.Navigator>
  )
 
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


export default RootElement = () => {

  // nếu user chưa đăng xuất thì khi thoát app và vào lại 
  // thì token và role sẽ được load lên từ local storage
  // chính vì vậy không cần phải đăng nhập lại
  const dispatch = useDispatch()
  useEffect(() => {
    const loadStorageData = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const role = await AsyncStorage.getItem('role');
  
            // nếu mà token và role khác null thì mik sẽ dùng dispatch
            // bắn object này đi 
            if (token && role) {
                dispatch({ type: LOGIN_SUCCESS, payload: { token, role } });
            }
        } catch (error) {
            console.log('Không thể lấy token và role từ local storage');
        }
    };
  
    loadStorageData();
  }, [dispatch]);

    // lấy token và role trong stole
    const { token, role } = useSelector((state) => state.authReducer);
    
    useEffect(() => {
      SetAuthToken();
    }, [token]);

    console.log(role, 'màn navigation')

    const phanQuyen = () => {
      if(role == null){
        return <AuthStack/>
      } else{
        if(role == 1) return <Admin/>
        else if(role == 2) return <SinhVien/>
        else if(role == 3) return <TruongCLB/>
        else if(role == 4) return <DoanTruong/>
      }
    }
    return (
      <NavigationContainer>
        {
           phanQuyen()
        }
      </NavigationContainer>
    );
}
