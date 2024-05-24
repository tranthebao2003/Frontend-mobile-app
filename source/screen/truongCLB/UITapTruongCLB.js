import { createContext, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text } from "react-native";
import Color from "../../component/Color";
import ProfileTruongCLB from "./profileTruongCLB/ProfileTruongCLB";
import FormCreateActive from "../generalFunction/FormCreateActive";
import HomeTruongCLB from "./HomeTruongCLB";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();
export const UserLoginTruongCLB = createContext();

function UITapTruongCLB(props) {
  const user = {
    nameUser: "Trần Thế Hải",
    phone: "0377253857",
    mssv: "n21dcpt008",
    position: "Trưởng clb",
    email: "n21dcpt008@student.ptithcm.edu.vn",
    dateOfBirth: "22/2/2003",
    // backend trả về cũng đc mà select count thui
    numberOfActived: 10,
  };
  const { showKeyBoard } = useSelector((state) => state.keyboardShow);
  return (
    <UserLoginTruongCLB.Provider value={user}>
      <Tab.Navigator
        initialRouteName="homeTruongCLB"
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
          name="homeTruongCLB"
          component={HomeTruongCLB}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require("../../resource/iconHomeDoanTruong/homeDoanTruong.png")}
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
                    fontWeight: "600",
                  }}
                >
                  Trang chủ
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
                    fontWeight: "600",
                  }}
                >
                  Tạo HĐ
                </Text>
              );
            },
          }}
        />

        {/* Profile đoàn trường */}
        <Tab.Screen
          name="profileTruongCLB"
          component={ProfileTruongCLB}
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
                    fontWeight: "600",
                  }}
                >
                  Tôi
                </Text>
              );
            },
          }}
        />
      </Tab.Navigator>
    </UserLoginTruongCLB.Provider>
  );
}

export { UITapTruongCLB };
