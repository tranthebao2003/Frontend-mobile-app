import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontSize from "../../../component/FontSize";
import Color from "../../../component/Color";
import { screenWidth, screenHeight } from "../../../component/DimensionsScreen";
import {useEffect, useState } from "react";
import Dialog from "react-native-dialog";
import { useDispatch, useSelector } from "react-redux";
import {LogoutAction} from '../../../redux/action/LoginAction'
import {getProfileUser} from '../../../redux/action/InfoUserAction'
import Spinner from 'react-native-loading-spinner-overlay';
import IsoTime from "../../../component/formatTime/IsoTime";


function Profile(props) {
  const dispatch = useDispatch()
  const {navigation} = props

  const [dialogChangePassword, setDialogChangePassword] = useState(false);
  const showHideDialogChangePassword = () => {
    setDialogChangePassword(!dialogChangePassword);
  };

  const { loading, infoUser, error} = useSelector(state => state.infoUser)
  // console.log(infoUser, 'infoUser màn profileSv')

  const yesDialogChangePassword = () => {
    setDialogChangePassword(!dialogChangePassword);
    navigation.navigate("changePassword")
  }

  const {
    last_name,
    first_name,
    phone,
    MSSV,
    email,
    birthday,
    gender_id,
    class_id,
    address
  } = infoUser;

  const formattedDate = IsoTime(birthday)

  useEffect(() => {
    dispatch(getProfileUser())
  }
  , [dispatch])

  const [dialogCancel, setDialogCancel] = useState(false);
  const showHideDialogCancel = () => {
    setDialogCancel(!dialogCancel);
  };

  
  return (
    <SafeAreaView style={{ flex: 1, zIndex: 0 }}>
      <StatusBar barStyle="auto"></StatusBar>
      <ImageBackground
        source={require("../../../resource/iconLogin/bg.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "120%" }}
      >
        <Spinner
          visible={loading}
          textContent={"Loading..."}
          textStyle={{ color: "white", fontSize: FontSize.sizeHeader }}
        />
        <ScrollView
          style={{
            flex: 1,
            paddingHorizontal: 25,
            marginBottom: (2 / 10) * screenHeight,
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 110,
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <Image
              style={{
                width: 80,
                height: 80,
                borderColor: "white",
                tintColor: Color.colorTextMain,
              }}
              resizeMode="cover"
              source={require("../../../resource/iconProfile/user.png")}
            />
          </View>

          <View style={styles.containerNamePhone}>
            <Text style={[styles.textLarge, { marginTop: 95 }]}>
              {last_name + " " + first_name}
            </Text>
            <Text style={styles.textMain}>{phone}</Text>

            <View
              style={{
                width: "100%",
                height: 65,
                marginTop: 45,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: Color.colorBgUiTap,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginRight: 10,
                  borderTopRightRadius: 20,
                }}
              >
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    marginRight: 10,
                    tintColor: Color.colorTextMain,
                  }}
                  resizeMode="cover"
                  source={require("../../../resource/iconProfile/mssv.png")}
                />
                <Text style={[styles.textMain, { fontWeight: "500" }]}>
                  {MSSV}
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  backgroundColor: Color.colorBgUiTap,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  borderTopLeftRadius: 20,
                }}
              >
                <Image
                  style={{
                    width: 35,
                    height: 35,
                    marginRight: 20,
                    tintColor: Color.colorTextMain,
                  }}
                  resizeMode="contain"
                  source={require("../../../resource/iconProfile/gender.png")}
                />
                <Text style={[styles.textMain, { fontWeight: "500" }]}>
                  {gender_id == 1 ? "Nam" : "Nữ"}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              marginVertical: 35,
              backgroundColor: Color.colorBtn,
              borderRadius: 20,
              padding: 15,
            }}
          >
            <Text style={styles.textLarge}>Profile</Text>
            <View
              style={{
                width: "100%",
                padding: 20,
                marginTop: 30,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: Color.colorBgUiTap,
                borderRadius: 6,
              }}
            >
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 20,
                  tintColor: Color.colorTextMain,
                }}
                resizeMode="cover"
                source={require("../../../resource/iconProfile/email.png")}
              />
              <View style={{ width: "100%" }}>
                <Text style={[styles.textLarge, { fontSize: 18 }]}>Email</Text>
                <Text
                  style={[
                    styles.textMain,
                    { fontWeight: 400, color: "black", width: "80%" },
                  ]}
                >
                  {email}
                </Text>
              </View>
            </View>

            <View
              style={{
                width: "100%",
                padding: 20,
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: Color.colorBgUiTap,
                borderRadius: 6,
              }}
            >
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 20,
                  tintColor: Color.colorTextMain,
                }}
                resizeMode="cover"
                source={require("../../../resource/iconProfile/dateOfBirth.png")}
              />
              <View style={{ flex: 1 }}>
                <Text style={[styles.textLarge, { fontSize: 18 }]}>
                  Ngày sinh
                </Text>
                <Text
                  style={[styles.textMain, { fontWeight: 400, color: "black" }]}
                >
                  {formattedDate}
                </Text>
              </View>
            </View>

            <View
              style={{
                width: "100%",
                padding: 20,
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: Color.colorBgUiTap,
                borderRadius: 6,
              }}
            >
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 15,
                  tintColor: Color.colorTextMain,
                }}
                resizeMode="cover"
                source={require("../../../resource/iconProfile/class.png")}
              />
              <View style={{ flex: 1, flexWrap: "wrap" }}>
                <Text style={[styles.textLarge, { fontSize: 18 }]}>Lớp</Text>
                <Text
                  style={[styles.textMain, { fontWeight: 400, color: "black" }]}
                >
                  {class_id}
                </Text>
              </View>
            </View>

            <View
              style={{
                width: "100%",
                padding: 20,
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: Color.colorBgUiTap,
                borderRadius: 6,
              }}
            >
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 15,
                  tintColor: Color.colorTextMain,
                }}
                resizeMode="cover"
                source={require("../../../resource/iconProfile/address.png")}
              />
              <View style={{ flex: 1, flexWrap: "wrap" }}>
                <Text style={[styles.textLarge, { fontSize: 18 }]}>
                  Địa chỉ
                </Text>
                <Text
                  style={[styles.textMain, { fontWeight: 400, color: "black" }]}
                >
                  {address}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
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
              style={[styles.btnCancel, { borderColor: Color.colorTextMain }]}
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
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerNamePhone: {
    height: 250,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 200, height: 200 },
    shadowOpacity: 0.2,
    elevation: 0.2,
    position: "relative",
    zIndex: 1,
    marginTop: 100,
    top: 0,
    alignItems: "center",
    overflow: "hidden",
  },
  textLarge: {
    fontSize: FontSize.sizeMain,
    fontWeight: "700",
    color: Color.colorTextMain,
  },
  textMain: {
    fontSize: FontSize.sizeSmall,
    fontWeight: "300",
    color: Color.colorTextMain,
  },

  btnCancel: {
    width: 85 * 2,
    height: 30 * 1.6,
    marginBottom: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.colorRemove,
  },

  btnResigter: {
    width: 85 * 2,
    height: 30 * 1.6,
    borderRadius: 10,
    margin: 20,
    backgroundColor: Color.colorBgUiTap,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Color.colorTextMain,
    shadowOffset: { width: 500, height: 500 },
    shadowOpacity: 0.8,
    elevation: 0.8,
  },

  resigter: {
    fontSize: FontSize.sizeSmall + 6,
    fontWeight: "700",
    color: Color.colorTextMain,
  },
});

export default Profile;
