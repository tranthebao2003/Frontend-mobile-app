import Color from "../../component/Color";
import FontSize from "../../component/FontSize";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {useEffect} from 'react'
import Spinner from "react-native-loading-spinner-overlay";
import { screenHeight, screenWidth, } from "../../component/DimensionsScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import {useSelector, useDispatch } from "react-redux";
import { getProfileUser } from "../../redux/action/InfoUserAction";
function HomeTruongCLB(props) {
  const {navigation} = props
  const dispatch = useDispatch()
  const {loading, infoUser} = useSelector((state) => state.infoUser);
  const {position} = infoUser

  useEffect(() => {
    dispatch(getProfileUser());
  }, [dispatch]);

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
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{ color: "white", fontSize: FontSize.sizeHeader }}
      />
      <ImageBackground
        source={require("../../resource/iconLogin/bg.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "120%",}}
      >
        
        {/* banner */}
        <View
          style={{
            width: screenWidth,
            height: (1 / 3) * screenHeight,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0.6
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
            width: screenWidth,
            height: 0.35*screenHeight,
            padding: 35,
            alignItems: 'center',
            borderWidth: 0.15,
            borderColor: Color.colorTextMain
          }}
        >
          {/* two item Top */}
          <View
            style={{
              width: screenWidth,
              justifyContent: "space-between",
              flexDirection: "row",
              marginBottom: 30,
              paddingHorizontal: 20
            }}
          >
            {/* danh sach hd*/}
            <View style={{ alignItems: "center", alignSelf: 'center'}}>
              <TouchableOpacity
                style={styles.containerIcon}
                onPress={() => navigation.navigate("listActiveTruongCLB")}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../../resource/iconHomeDoanTruong/hoatDong.png")}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Danh sách</Text>
              <Text style={[styles.bottomText, {marginTop: 0}, ]}>hoạt động</Text>
            </View>

            {/* hoat dong da tao */}
            <View style={{ alignItems: "center",  alignSelf: 'center'}}>
              <TouchableOpacity
                style={styles.containerIcon}
                onPress={() => navigation.navigate("listActiveCreatedTruongCLB")}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../../resource/iconHomeDoanTruong/taoHoatDong1.png")}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Hoạt động </Text>
              <Text style={[styles.bottomText, {marginTop: 0}]}>đã tạo</Text>
            </View>

            {/* Hoạt động đã tham gia */}
            <View style={{ alignItems: "center"}}>
              <TouchableOpacity
                style={styles.containerIcon}
                onPress={() => navigation.navigate("screenListActivedTruongCLB")}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../../resource/iconHomeDoanTruong/participatated.png")}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Hoạt động</Text>
              <Text style={[styles.bottomText, {marginTop: 0}]}>đã tham gia</Text>
            </View>
          </View>

          {/* two item bottom */}
          <View
            style={{
              width: "92%",
              justifyContent: "space-between",
              flexDirection: "row",
              marginBottom: 60,
            }}
          >
            {/* filter active by month and year*/}
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.containerIcon}
                onPress={() => navigation.navigate("listThongKeHoatDong")}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../../resource/iconHomeDoanTruong/filter1.png")}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Thống kê hoạt động</Text>
            </View>

            {/* approve student */}
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.containerIcon}
                onPress={() => navigation.navigate("listApproveSvTruongCLB")}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../../resource/iconHomeDoanTruong/approveSV1.png")}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}> phê duyệt sinh viên</Text>
            </View>
          </View>
        </View>

        {/* posision, logo */}
        <View style={styles.containerPositionLogo}>
        <Image
          source={require("../../resource/iconHomeTruongCLB/society.png")}
          style={{
            height: 47,
            width: 55,
            position: "absolute",
            left: 10,
            top: 8,
            borderRadius: 16,
            zIndex: 2,
          }}
          resizeMode="contain"
        ></Image>
          <Text style={styles.header}>{position}</Text>
        </View>

        <View style={{width: '100%',}}>
        <Image
          source={require("../../resource/iconLogin/lotLogo2.png")}
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
          source={require("../../resource/iconLogin/logo.png")}
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
});
export default HomeTruongCLB;
