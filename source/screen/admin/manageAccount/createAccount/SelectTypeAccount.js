import Color from "../../../../component/Color";
import FontSize from "../../../../component/FontSize";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { screenHeight, screenWidth } from "../../../../component/DimensionsScreen";
import { SafeAreaView } from "react-native-safe-area-context";

function SelectTypeAccount(props) {
  const { navigation } = props;
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
        source={require("../../../../resource/iconLogin/bg.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "120%" }}
      >
        {/* banner */}
        <View
          style={{
            width: screenWidth,
            height: (1 / 3) * screenHeight,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0.6,
          }}
        >
          <Image
            source={require("../../../../resource/iconHomeDoanTruong/bannerHome.png")}
            style={{
              flex: 1,
              height: 500,
            }}
            resizeMode="contain"
          ></Image>
        </View>

        {/* content */}
        <View
          style={{
            width: screenWidth,
            height: 0.35 * screenHeight,
            padding: 35,
            paddingTop: 30,
            alignItems: "center",
            borderWidth: 0.15,
            borderColor: Color.colorTextMain,
          }}
        >
          {/* 2 item top */}
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            {/* navigation to form create account student */}
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.containerIcon}
                onPress={() => navigation.navigate("form1CreateStudent")}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../../../../resource/iconUITapManageAccount/addAccountStudent.png")}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Tài khoản sinh viên</Text>
            </View>

              {/* navigation to form create account đoàn trường */}
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.containerIcon}
                onPress={() => navigation.navigate("form1CreateDoanTruong")}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../../../../resource/iconUITapManageAccount/addAccountDT.png")}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Tài khoản đoàn trường</Text>
            </View>
          </View>
          <View style={styles.containerHeader}>
            <Text style={styles.header2}>Hãy chọn loại tài khoản</Text>
          </View>
        </View>

        {/* posision, logo */}
        <View style={styles.containerPositionLogo}>
          <Image
            source={require("../../../../resource/iconHomeAdmin/iconAdmin.png")}
            style={{
              height: 42,
              width: 42,
              position: "absolute",
              left: 12,
              top: 13,
              zIndex: 2,
            }}
            resizeMode="contain"
          ></Image>
          <Text style={styles.header}>Admin</Text>
        </View>

        <View style={{ width: "100%" }}>
          <Image
            source={require("../../../../resource/iconLogin/lotLogo2.png")}
            style={{
              height: 68,
              width: 68,
              position: "absolute",
              right: 42,
              bottom: 0,
              borderRadius: 8,
              zIndex: 1,
            }}
            resizeMode="contain"
          ></Image>
          <Image
            source={require("../../../../resource/iconLogin/logo.png")}
            style={{
              height: 60,
              width: 60,
              position: "absolute",
              right: 45,
              bottom: 2,
              borderRadius: 16,
              zIndex: 2,
            }}
            resizeMode="contain"
          ></Image>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  containerIcon: {
    width: 65,
    height: 65,
    backgroundColor: Color.colorBgUiTap,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 2,
    shadowColor: 'black'
  },

  icon: {
    width: 45,
    height: 45,
  },
  bottomText: {
    fontSize: 15,
    marginTop: 10,
    color: Color.colorTextMain,
    fontWeight: "400",
  },

  containerPositionLogo: {
    width: 0.8*screenWidth,
    marginLeft: 40,
    marginTop: 25,
    paddingVertical: 20,
    paddingLeft: 20,
    backgroundColor: Color.colorBgUiTap,
    borderRadius: 10,
    elevation: 2,
    shadowColor: 'black',
  },

  header: {
    fontSize: FontSize.sizeMain,
    fontWeight: "600",
    color: Color.colorTextMain,
    marginLeft: 50
  },

  header2: {
    fontSize: FontSize.sizeHeader,
    fontWeight: "700",
    color: Color.colorTextMain,
  },

  containerHeader: {
    marginTop: 60,
    zIndex: 2,
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default SelectTypeAccount;
