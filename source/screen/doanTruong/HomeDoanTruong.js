import Color from "../../component/Color";
import FontSize from "../../component/FontSize";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { screenHeight, screenWidth } from "../../component/DimensionsScreen";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeDoanTruong(props) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        zIndex: 0,
        alignItems: "center",
        backgroundColor: Color.colorBgUiTap,
      }}
    >
      <StatusBar barStyle="auto"></StatusBar>
      {/* banner */}
      <ImageBackground
        source={require("../../resource/iconLogin/bg.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "120%" }}
      >
        <View
          style={{
            width: screenWidth,
            height: (1 / 3) * screenHeight,
            // borderWidth: 1,
            // borderRadius: 30,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            // padding: 10
          }}
        >
          <Image
            source={require("../../resource/iconHomeDoanTruong/bannerHome.png")}
            style={{
              flex: 1,
              height: 500,
            }}
            resizeMode="contain"
          ></Image>
        </View>

        {/* content */}
        <View style={{ flex: 1, borderWidth: 1, padding: 60,  paddingHorizontal: 50}}>
          <View
            style={{
              width: "100%",
            //   borderWidth: 5,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 60
            }}
          >
            <TouchableOpacity style={styles.containerIcon}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../../resource/iconProfile/user.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.containerIcon}>
              <Image
                style={styles.icon}
                resizeMode="contain"
                source={require("../../resource/iconProfile/user.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.containerIcon}>
              <Image
                style={styles.icon}
                resizeMode="contain"
                source={require("../../resource/iconProfile/user.png")}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
            //   borderWidth: 5,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity style={styles.containerIcon}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../../resource/iconProfile/user.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.containerIcon}>
              <Image
                style={styles.icon}
                resizeMode="contain"
                source={require("../../resource/iconProfile/user.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.containerIcon}>
              <Image
                style={styles.icon}
                resizeMode="contain"
                source={require("../../resource/iconProfile/user.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  containerIcon: {
    width: 65,
    height: 65,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 1.2
  },

  icon: {
    width: 45,
    height: 45,
    tintColor: Color.colorTextMain,
  }
});
export default HomeDoanTruong;
