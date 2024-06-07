import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text } from "react-native";
import Color from "../../component/Color";
import ProfileTruongCLB from "./profileTruongCLB/ProfileTruongCLB";
import FormCreateActiveTruongCLB from "./formCreateActive/FormCreateActiveTruongCLB";
import HomeTruongCLB from "./HomeTruongCLB";
import ScreenListActivedTruongCLB from "./listActivedTruongCLB/ScreenListActivedTruongCLB";
import { useSelector } from "react-redux";
import { screenWidth } from "../../component/DimensionsScreen";

const Tab = createBottomTabNavigator();

function UITapTruongCLB(props) {
  const { showKeyBoard } = useSelector((state) => state.keyboardShow);
  return (
   
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
          name="formCreateActiveTruongCLB"
          component={FormCreateActiveTruongCLB}
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

            {/* active joined */}
      <Tab.Screen
        name="screenActivedTruongCLB"
        component={ScreenListActivedTruongCLB}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("../../resource/iconUITap/actived.png")}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? Color.colorTextMain : Color.inactive,
                  marginBottom: 5,
                  marginLeft: 2,
                  marginLeft: 25,
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
                  width: (1 / 4) * screenWidth,
                  textAlign: "center",
                  marginLeft: 25,
                }}
              >
                HĐ đã tham gia
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
  );
}

export { UITapTruongCLB };
