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
  const {navigation} = props
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
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            padding: 60,
            paddingHorizontal: 50,
          }}
        >
          <View
            style={{
              width: "100%",
              //   borderWidth: 5,
              justifyContent: "space-between",
              flexDirection: "row",
              marginBottom: 60,
            }}
          >
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.containerIcon} onPress={() => navigation.navigate('screenListDoanTruong')}>
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../../resource/iconHomeDoanTruong/hoatDong.png")}
                />
              </TouchableOpacity>
              <Text style = {styles.bottomText}>Hoạt động</Text>
            </View>
            <View style={{alignItems: 'center',}}>
              <TouchableOpacity style={styles.containerIcon}  onPress={() => navigation.navigate('listActiveCreatedDT')}>
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../../resource/iconHomeDoanTruong/taoHoatDong1.png")}
                />
              </TouchableOpacity>
              <Text style = {styles.bottomText}>Hoạt động</Text>
              <Text style = {[styles.bottomText, {marginTop: -2}]}>đã tạo</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.containerIcon}  onPress={() => navigation.navigate('listActiveApproveDT')}>
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../../resource/iconHomeDoanTruong/pheDuyet.png")}
                />
              </TouchableOpacity>
              <Text style = {styles.bottomText}>Duyệt</Text>
              <Text style = {[styles.bottomText, {marginTop: -2}]}>hoạt động</Text>
            </View>
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
    backgroundColor: Color.colorBgUiTap,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 1.2
  },

  icon: {
    width: 45,
    height: 45,
  },
  bottomText: {
    fontSize: 15,
    marginTop: 10,
    color: Color.colorTextMain,
    fontWeight: '400',
  }
});
export default HomeDoanTruong;
