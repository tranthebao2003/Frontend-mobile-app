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
  ScrollView,
} from "react-native";
import { screenHeight, screenWidth } from "../../component/DimensionsScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Dialog from "react-native-dialog";
import { LogoutAction } from "../../redux/action/LoginAction";
import { useState } from "react";
import { useDispatch } from "react-redux";

function HomeAdmin(props) {
  const { navigation } = props;
  const dispatch = useDispatch()
  const [dialogCancel, setDialogCancel] = useState(false);
  const showHideDialogCancel = () => {
    setDialogCancel(!dialogCancel);
  };
  const [dialogChangePassword, setDialogChangePassword] = useState(false);
  const showHideDialogChangePassword = () => {
    setDialogChangePassword(!dialogChangePassword);
  };

  const yesDialogChangePassword = () => {
    setDialogChangePassword(!dialogChangePassword);
    navigation.navigate("changePassword")
  }
  return (
    <ImageBackground
      source={require("../../resource/iconLogin/bg.png")}
      resizeMode="cover"
      style={{ width: "100%", height: "120%" }}
    >
      <View>
        <ScrollView
          style={{
            height: screenHeight - 146,
          }}
        >
          <StatusBar barStyle="auto"></StatusBar>
          {/* banner */}

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
              height: 0.35 * screenHeight,
              padding: 35,
              paddingTop: 30,
              alignItems: "center",
              borderWidth: 0.15,
              borderColor: Color.colorTextMain,
            }}
          >
            {/* three item top */}
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 25,
              }}
            >
              {/* list active */}
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.containerIcon}
                  onPress={() => navigation.navigate("listActiveAdmin")}
                >
                  <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require("../../resource/iconHomeDoanTruong/hoatDong.png")}
                  />
                </TouchableOpacity>
                <Text style={styles.bottomText}>Hoạt động</Text>
              </View>

              {/* list actived */}
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.containerIcon}
                  onPress={() => navigation.navigate("listActiveCreatedAdmin")}
                >
                  <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require("../../resource/iconHomeDoanTruong/taoHoatDong1.png")}
                  />
                </TouchableOpacity>
                <Text style={styles.bottomText}>Hoạt động</Text>
                <Text style={[styles.bottomText, { marginTop: -2 }]}>
                  đã tạo
                </Text>
              </View>

              {/* list approve active  */}
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.containerIcon}
                  onPress={() => navigation.navigate("listActiveApproveAdmin")}
                >
                  <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require("../../resource/iconHomeDoanTruong/pheDuyet.png")}
                  />
                </TouchableOpacity>
                <Text style={styles.bottomText}>Duyệt</Text>
                <Text style={[styles.bottomText, { marginTop: -2 }]}>
                  hoạt động
                </Text>
              </View>
            </View>

            {/* three item bottom */}
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              {/* list active */}
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.containerIcon}
                  onPress={() =>
                    navigation.navigate("listOrganizedActiveAdmin")
                  }
                >
                  <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require("../../resource/iconHomeDoanTruong/filter1.png")}
                  />
                </TouchableOpacity>
                <Text style={styles.bottomText}>Thống kê</Text>
                <Text style={[styles.bottomText, { marginTop: -2 }]}>
                  hoạt động
                </Text>
              </View>

              {/* list actived */}
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.containerIcon}
                  onPress={() => navigation.navigate("uiTapManageAccount")}
                >
                  <Image
                    style={{ width: 45, height: 45 }}
                    resizeMode="contain"
                    source={require("../../resource/iconHomeDoanTruong/manageAccount.png")}
                  />
                </TouchableOpacity>
                <Text style={styles.bottomText}>Quản lý</Text>
                <Text style={[styles.bottomText, { marginTop: -2 }]}>
                  tài khoản
                </Text>
              </View>

              {/* list approve active  */}
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.containerIcon}
                  onPress={() => navigation.navigate("listApproveSvAdmin")}
                >
                  <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require("../../resource/iconHomeDoanTruong/approveSV1.png")}
                  />
                </TouchableOpacity>
                <Text style={styles.bottomText}>Phê duyệt</Text>
                <Text style={[styles.bottomText, { marginTop: -2 }]}>
                  sinh viên
                </Text>
              </View>
            </View>
          </View>

          {/* posision, logo */}
          <View style={styles.containerPositionLogo}>
            <Image
              source={require("../../resource/iconHomeAdmin/iconAdmin.png")}
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
          <View
            style={{
              flexDirection: "row",
              width: "85%",
              justifyContent: 'space-between',
              alignSelf: 'center'
            }}
          >
            {/* btn logout*/}
            <TouchableOpacity
              style={styles.btnCancel}
              onPress={showHideDialogCancel}
            >
              <Text style={[styles.resigter, { color: Color.colorRemove }]}>
                Đăng xuất
              </Text>
              <Dialog.Container
                visible={dialogCancel}
                contentStyle={{
                  width: (3 / 4) * screenWidth,
                  height: (1 / 5) * screenHeight,
                }}
              >
                <Dialog.Title
                  style={{ color: Color.colorTextMain, fontWeight: "700" }}
                >
                  XÁC NHẬN
                </Dialog.Title>
                <Dialog.Description style={{ color: "black" }}>
                  Bạn có chắc muốn đăng xuất?
                </Dialog.Description>
                <Dialog.Button
                  label="No"
                  onPress={showHideDialogCancel}
                  style={{
                    width: 60,
                    height: 40,
                    marginRight: 30,
                    marginTop: 10,
                    borderRadius: 5,
                    fontWeight: 500,
                    fontSize: 18,
                    borderWidth: 1,
                    borderColor: Color.colorRemove,
                    color: Color.colorRemove,
                  }}
                />
                <Dialog.Button
                  label="Yes"
                  onPress={() => dispatch(LogoutAction())}
                  style={{
                    width: 60,
                    height: 40,
                    marginTop: 10,
                    marginRight: 50,
                    borderRadius: 5,
                    backgroundColor: "#d9ebfe",
                    fontWeight: 500,
                    fontSize: 18,
                  }}
                />
              </Dialog.Container>
            </TouchableOpacity>

            {/* btn change password*/}
            <TouchableOpacity
              style={[styles.btnCancel, { borderColor: Color.colorTextMain, marginRight: 0}]}
              onPress={showHideDialogChangePassword}
            >
              <Text style={[styles.resigter, { color: Color.colorTextMain }]}>
                Đổi mật khẩu
              </Text>
              <Dialog.Container
                visible={dialogChangePassword}
                contentStyle={{
                  width: (3 / 4) * screenWidth,
                  height: (1 / 5) * screenHeight,
                }}
              >
                <Dialog.Title
                  style={{ color: Color.colorTextMain, fontWeight: "700" }}
                >
                  XÁC NHẬN
                </Dialog.Title>
                <Dialog.Description style={{ color: "black" }}>
                  Bạn có chắc muốn đổi mật khẩu ?
                </Dialog.Description>
                <Dialog.Button
                  label="No"
                  onPress={showHideDialogChangePassword}
                  style={{
                    width: 60,
                    height: 40,
                    marginRight: 30,
                    marginTop: 10,
                    borderRadius: 5,
                    fontWeight: 500,
                    fontSize: 18,
                    borderWidth: 1,
                    borderColor: Color.colorRemove,
                    color: Color.colorRemove,
                  }}
                />
                <Dialog.Button
                  label="Yes"
                  onPress={yesDialogChangePassword}
                  style={{
                    width: 60,
                    height: 40,
                    marginTop: 10,
                    marginRight: 50,
                    borderRadius: 5,
                    backgroundColor: "#d9ebfe",
                    fontWeight: 500,
                    fontSize: 18,
                  }}
                />
              </Dialog.Container>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
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
    shadowColor: "black",
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
    width: 0.8 * screenWidth,
    marginLeft: 40,
    marginTop: 25,
    paddingVertical: 20,
    paddingLeft: 20,
    backgroundColor: Color.colorBgUiTap,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "black",
  },

  header: {
    fontSize: FontSize.sizeMain,
    fontWeight: "600",
    color: Color.colorTextMain,
    marginLeft: 50,
  },

  btnCancel: {
    width: 160,
    height: 30 * 1.6,
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.colorRemove,
  },

  resigter: {
    fontSize: FontSize.sizeSmall + 6,
    fontWeight: "700",
    color: Color.colorTextMain,
  },
});
export default HomeAdmin;
