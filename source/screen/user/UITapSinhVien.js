import {createContext} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text } from "react-native";
import Color from "../../component/Color";
import Profile from "./profileSv/ProfileSv";
import {ScreenList} from "./listActive/ScreenList";
import ScreenListActived from "./listActived/ScreenListActived";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

export const UserLogin = createContext()

function UITapSinhVien(props) {
  // truyền thông tin user từ màn hình login qua
  // const showKeyboard = useContext(showHideKeyboard)
  // alert(showKeyboard)
  const user = {
    nameUser: "Trần Thế Bảo",
    phone: "0377253857",
    mssv: "n21dcpt008",
    position: "Đoàn trường",
    email: "n21dcpt008@student.ptithcm.edu.vn",
    dateOfBirth: "22/2/2003",
    // backend trả về cũng đc mà select count thui
    numberOfActived: 10,
  };

  const {showKeyBoard} = useSelector(state => state.keyboardShow)
  return (
    <UserLogin.Provider value={user}>
     
        <Tab.Navigator
          initialRouteName="screenList"
          screenOptions={{
            headerShown: false,
            // tabBarActiveTintColor: Color.colorTextMain,
            // tabBarInactiveTintColor: Color.inactive,
            tabBarStyle: {
              backgroundColor: Color.colorBgUiTap,
              position: "absolute",
              padding: 10,
              bottom: showKeyBoard ? -50 : 0,
            },
          }}
        >
          {/* list active */}
          <Tab.Screen
            name="screenList"
            component={ScreenList}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    source={require("../../resource/iconUITap/listActive.png")}
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? Color.colorTextMain : Color.inactive,
                      marginBottom: 5,
                    }}
                    resizeMode="cover"
                  ></Image>
                );
              },

              tabBarLabel: ({ focused }) => {
                return (
                  <Text
                    style={{
                      fontSize: 14,
                      color: focused ? Color.colorTextMain : Color.inactive,
                      fontWeight: 600,
                    }}
                  >
                    Hoạt động
                  </Text>
                );
              },
            }}
          />

          {/* active joined */}
          <Tab.Screen
            name="screenActived"
            component={ScreenListActived}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    source={require("../../resource/iconUITap/actived.png")}
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? Color.colorTextMain : Color.inactive,
                      marginBottom: 5,
                    }}
                    resizeMode="cover"
                  ></Image>
                );
              },

              tabBarLabel: ({ focused }) => {
                return (
                  <Text
                    style={{
                      fontSize: 14,
                      color: focused ? Color.colorTextMain : Color.inactive,
                      fontWeight: 600,
                    }}
                  >
                    HĐ đã tham gia
                  </Text>
                );
              },
            }}
          />

          {/* Profile */}
          <Tab.Screen
            name="profile"
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    source={require("../../resource/iconUITap/profileThin.png")}
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? Color.colorTextMain : Color.inactive,
                      marginBottom: 5,
                    }}
                    resizeMode="cover"
                  ></Image>
                );
              },

              tabBarLabel: ({ focused }) => {
                return (
                  <Text
                    style={{
                      fontSize: 14,
                      color: focused ? Color.colorTextMain : Color.inactive,
                      fontWeight: 600,
                    }}
                  >
                    Tôi
                  </Text>
                );
              },
            }}
          />
        </Tab.Navigator>
     
    </UserLogin.Provider>
  );
}

export {UITapSinhVien};
