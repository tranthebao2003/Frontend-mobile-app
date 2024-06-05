import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text } from "react-native";
import Color from "../../component/Color";
import FormCreateActiveAdmin from "./formCreateActive/FormCreateActiveAdmin";
import HomeAdmin from "./HomeAdmin";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

function UITapAdmin(props) {

  const { showKeyBoard } = useSelector((state) => state.keyboardShow);
  return (

      <Tab.Navigator
        initialRouteName="homeAdmin"
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
          name="homeAdmin"
          component={HomeAdmin}
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
          name="formCreateActiveAdmin"
          component={FormCreateActiveAdmin}
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
      </Tab.Navigator>
  );
}

export { UITapAdmin };
