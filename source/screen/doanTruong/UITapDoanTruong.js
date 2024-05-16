import {createContext, useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text } from "react-native";
import Color from "../../component/Color";
import ProfileDoanTruong from "./profileDoanTruong/ProfileDoanTruong";
import ScreenListDoanTruong from "./listActive/ScreenListDoanTruong";
import ListActiveCreatedDT from "./listActiveCreated/ListActiveCreatedDT";
import FormCreateActive from "../generalFunction/FormCreateActive";
import { useSelector } from "react-redux";


const Tab = createBottomTabNavigator();
export const UserLoginDoanTruong = createContext()


function UITapDoanTruong(props) {
    // truyền thông tin user từ màn hình login qua
  const {user} = props.route.params
  const {showKeyBoard} = useSelector(state => state.keyboardShow)
  return (
    <UserLoginDoanTruong.Provider value={user}>
    <Tab.Navigator
      initialRouteName="screenListDTruong"
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
        name="screenListDTruong"
        component={ScreenListDoanTruong}
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

       {/* form create active */}
       <Tab.Screen
        name="createActive"
        component={FormCreateActive}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("../../resource/iconUITap/createActive.png")}
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
                Tạo HĐ
              </Text>
            );
          },
        }}
      />

       {/* list active created */}
       <Tab.Screen
        name="listActiveCreatedDT"
        component={ListActiveCreatedDT}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("../../resource/iconUITap/activeCreated.png")}
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
                HĐ đã tạo
              </Text>
            );
          },
        }}
      />

      {/* Profile đoàn trường */}
      <Tab.Screen
        name="profileDTruong"
        component={ProfileDoanTruong}
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
    </UserLoginDoanTruong.Provider>

  );
}

export {UITapDoanTruong};
