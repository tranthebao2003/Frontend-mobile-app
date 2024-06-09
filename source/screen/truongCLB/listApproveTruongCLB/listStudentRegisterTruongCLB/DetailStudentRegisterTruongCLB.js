import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Alert
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontSize from "../../../../component/FontSize";
import Color from "../../../../component/Color";
import {
  screenWidth,
  screenHeight,
} from "../../../../component/DimensionsScreen";
import { useEffect, useState } from "react";
import Dialog from "react-native-dialog";
import { useDispatch, useSelector } from "react-redux";
import { LogoutAction } from "../../../../redux/action/LoginAction";
import DetailStudentRegisterAction from "../../../../redux/action/approveStudentAction/DetailStudentRegisterAction";
import Spinner from "react-native-loading-spinner-overlay";
import IsoTime from "../../../../component/formatTime/IsoTime";
import ApproveStudentRegisterAction from "../../../../redux/action/ApproveStudentRegisterAction";
import { APPROVE_STUDENT_REGISTER_RESET } from "../../../../redux/types/TypesApproveStudentRegister";
import { CommonActions } from "@react-navigation/native";

export default function DetailStudentRegisterTruongCLB(props) {
  const{navigation} = props
  const dispatch = useDispatch();
  const {
    // id này là id register để chấp nhận sv đăng kí tham gia hoạt động
    id,
    status_id,
    act_account,
  } = props.route.params.detailStudentRegisterTruongCLB;

  const { loading, infoUserStudent, error } = useSelector(
    (state) => state.detailStudentRegisterReducer
  );

  const { loadingStudent, reponseSuccessStudent, errorStudent } = useSelector(
    (state) => state.approveStudentRegisterReducer
  );

  const [info, setInfo] = useState("");
  const {
    last_name,
    first_name,
    phone,
    MSSV,
    email,
    birthday,
    gender_id,
    class_id,
    address,
  } = info;

  const formattedDate = IsoTime(birthday);

  useEffect(() => {
    dispatch(DetailStudentRegisterAction(act_account));
  }, [dispatch]);

  useEffect(() => {
    if (infoUserStudent) {
      setInfo(infoUserStudent);
    }
  }, [infoUserStudent]);

  // btn approve
  const [dialogApprove, setDialogApprove] = useState(false);
  const approveStudent = () => {
    const statusIdAndId = {
      id: id,
      // giống như hoạt động thì khi mik duyệt thì truyền 2
      status: 2,
    };
    dispatch(ApproveStudentRegisterAction(statusIdAndId));
  };

  // btn approve
  
  const refuseStudent = () => {
    const statusIdAndId = {
      id: id,
      // giống như hoạt động thì khi mik ko duyệt thì truyền 4
      status: 4,
    };
    dispatch(ApproveStudentRegisterAction(statusIdAndId));
  };

  const showHideDialogApprove = () => {
    setDialogApprove(!dialogApprove);
  };

  const yesBtnApprove = () => {
    setDialogApprove(!dialogApprove);
    approveStudent();
  };

  useEffect(() => {
    dispatch({ type: APPROVE_STUDENT_REGISTER_RESET });
  }, [dispatch]);

  useEffect(() => {
    if (errorStudent != null && loadingStudent == false) {
      Alert.alert("Thông báo", errorStudent);
      dispatch({ type: APPROVE_STUDENT_REGISTER_RESET });
    } else if (reponseSuccessStudent == true && loadingStudent == false) {
      Alert.alert("Bạn đã thực hiện thành công");

      navigation.dispatch(CommonActions.goBack());

      dispatch({ type: APPROVE_STUDENT_REGISTER_RESET });
    }
  }, [errorStudent, loadingStudent, reponseSuccessStudent]);

  // btn cancel
  const [dialogCancel, setDialogCancel] = useState(false);
  const showHideDialogCancel = () => {
    setDialogCancel(!dialogCancel);
  };

  const yesBtnCancel = () => {
    setDialogCancel(!dialogCancel);
    refuseStudent()
  };

  return (
    <SafeAreaView style={{ flex: 1, zIndex: 0 }}>
      <StatusBar barStyle="auto"></StatusBar>
      <ImageBackground
        source={require("../../../../resource/iconLogin/bg.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "120%" }}
      >
        <Spinner
          visible={loading || loadingStudent}
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
              source={require("../../../../resource/iconProfile/user.png")}
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
                  source={require("../../../../resource/iconProfile/mssv.png")}
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
                  source={require("../../../../resource/iconProfile/gender.png")}
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
                source={require("../../../../resource/iconProfile/email.png")}
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
                source={require("../../../../resource/iconProfile/dateOfBirth.png")}
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
                source={require("../../../../resource/iconProfile/class.png")}
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
                source={require("../../../../resource/iconProfile/address.png")}
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
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* btn resigter */}
            <TouchableOpacity
              style={styles.btnResigter}
              onPress={showHideDialogApprove}
            >
              <Text style={styles.resigter}>Duyệt</Text>
              <Dialog.Container visible={dialogApprove}>
                <Dialog.Title
                  style={{ color: Color.colorTextMain, fontWeight: "700" }}
                >
                  XÁC NHẬN
                </Dialog.Title>
                <Dialog.Description style={{ color: "black" }}>
                  Bạn có chắc duyệt sinh viên này này ?
                </Dialog.Description>
                <Dialog.Button
                  label="No"
                  onPress={showHideDialogApprove}
                  style={[
                    styles.btnCancel,
                    {
                      width: 60,
                      height: 40,
                      marginRight: 30,
                      fontWeight: 500,
                      fontSize: 18,
                    },
                  ]}
                />
                <Dialog.Button
                  label="Yes"
                  onPress={yesBtnApprove}
                  style={{
                    width: 60,
                    height: 40,
                    marginRight: 50,
                    borderRadius: 5,
                    backgroundColor: "#d9ebfe",
                    fontWeight: 500,
                    fontSize: 18,
                  }}
                />
              </Dialog.Container>
            </TouchableOpacity>

            {/* btn cancel */}
            <TouchableOpacity
              style={[styles.btnCancel, { borderColor: Color.colorRemove }]}
              onPress={showHideDialogCancel}
            >
              <Text style={[styles.resigter, { color: Color.colorRemove }]}>
                Không duyệt
              </Text>
              <Dialog.Container visible={dialogCancel}>
                <Dialog.Title
                  style={{ color: Color.colorTextMain, fontWeight: "700" }}
                >
                  XÁC NHẬN
                </Dialog.Title>
                <Dialog.Description style={{ color: "black" }}>
                  Bạn có chắc không duyệt hoạt động này ?
                </Dialog.Description>
                <Dialog.Button
                  label="No"
                  onPress={showHideDialogCancel}
                  style={[
                    styles.btnCancel,
                    {
                      width: 60,
                      height: 40,
                      marginRight: 30,
                      fontWeight: 500,
                      fontSize: 18,
                    },
                  ]}
                />
                <Dialog.Button
                  label="Yes"
                  onPress={yesBtnCancel}
                  style={{
                    width: 60,
                    height: 40,
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
    width: 150,
    height: 30 * 1.6,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.colorRemove,
  },

  btnResigter: {
    width: 150,
    height: 30 * 1.6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.colorTextMain,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
  },

  resigter: {
    fontSize: FontSize.sizeSmall + 6,
    fontWeight: "700",
    color: Color.colorTextMain,
  },
});
