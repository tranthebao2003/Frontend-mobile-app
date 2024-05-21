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
import { UserLogin } from "../UITapSinhVien";
import { useContext, useState } from "react";
import Dialog from "react-native-dialog";

function Profile() {
  const [dialogCancel, setDialogCancel] = useState(false);
  const showHideDialogCancel = () => {
    setDialogCancel(!dialogCancel);
  };

  const [yesNotificationCancel, setYesNotificationCancel] = useState(false);
    const yesBtnCancel = () => {
      setDialogCancel(!dialogCancel);
      setYesNotificationCancel(!yesNotificationCancel);
    };
  const user = useContext(UserLogin);
  const {
    nameUser,
    phone,
    mssv,
    position,
    email,
    dateOfBirth,
    // backend trả về cũng đc mà select count thui
    numberOfActived,
  } = user;
  return (
    <SafeAreaView style={{ flex: 1, zIndex: 0 }}>
      <StatusBar barStyle="auto"></StatusBar>
      <ImageBackground
        source={require("../../../resource/iconLogin/bg.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "120%" }}
      >
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
              {nameUser}
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
                  {mssv}
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
                    marginRight: 10,
                    tintColor: Color.colorTextMain,
                  }}
                  resizeMode="contain"
                  source={require("../../../resource/iconProfile/position.png")}
                />
                <Text style={[styles.textMain, { fontWeight: "500" }]}>
                  {position}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              marginVertical: 35,
              height: (1 / 2) * screenHeight,
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
                  {dateOfBirth}
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
                source={require("../../../resource/iconProfile/numberOfActive.png")}
              />
              <View style={{ flex: 1, flexWrap: "wrap" }}>
                <Text style={[styles.textLarge, { fontSize: 18 }]}>
                  Số hoạt động đã tham gia
                </Text>
                <Text
                  style={[styles.textMain, { fontWeight: 400, color: "black" }]}
                >
                  {numberOfActived}
                </Text>
              </View>
            </View>
          </View>

          {/* btn logout*/}
          <TouchableOpacity
            style={styles.btnCancel}
            onPress={showHideDialogCancel}
          >
            <Text style={[styles.resigter, { color: Color.colorRemove }]}>
              Đăng xuất
            </Text>
            <Dialog.Container visible={dialogCancel} contentStyle= {{width: 3/4*screenWidth, height: 1/5*screenHeight}}>
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
                onPress={yesBtnCancel}
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
