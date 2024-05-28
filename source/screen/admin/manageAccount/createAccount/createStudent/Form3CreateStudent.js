import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import FontSize from "../../../../../component/FontSize";
import Color from "../../../../../component/Color";
import {
  screenWidth,
  screenHeight,
} from "../../../../../component/DimensionsScreen";
// import { DarkTheme } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import DatePicker from "react-native-modern-datepicker";
import Dialog from "react-native-dialog";
import { useDispatch, useSelector } from "react-redux";
import { CommonActions } from "@react-navigation/native";


export default function Form3CreateStudent(props) {
  const { navigation } = props;
  const { username, password, role_id, MSSV, first_name, last_name, phone } =
    props.route.params;


  const [dateOfBirth, setDateOfBirth] = useState("Chọn ngày");
  const [openDateOfBirth, setOpenDateOfBirth] = useState(false); // open and close the modal
  const handleOnPressDateOfBirth = () => {
    setOpenDateOfBirth(!openDateOfBirth);
  };

  const handleChangeDateOfBirth = (propDate) => {
    const reversedStrDateOfBirth = propDate.split("/").reverse().join("/");
    setDateOfBirth(reversedStrDateOfBirth);
  };

  const [openDropPicker, setOpenDropPicker] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Nam", value: "1" },
    { label: "Nữ", value: "0" },
  ]);

  const [dialogThongtin, setDialogThongtin] = useState(false);

  const [address, setAddress] = useState("");
  const [maSoLop, setMaSoLop] = useState("");
  const [email, setEmail] = useState("");


  // parseInt(role_id,10): chuyển qua kiểu số cơ số 10
  const roleIdConvertNumber = parseInt(role_id,10)

  const navigateFormContinue = () => {
    if (
      address == "" ||
      maSoLop == "" ||
      email == "" ||
      dateOfBirth == "Chọn ngày",
      value == null
    ) {
      setDialogThongtin(true);
    }  else {

      // dùng dispatch để gửi lên sever

      // console.log(
      //   username,
      //   password,
      //   roleIdConvertNumber,
      //   1,
      //   MSSV,
      //   first_name,
      //   last_name,
      //   phone,
      //   address,
      //   maSoLop,
      //   email,
      //   value,
      //   dateOfBirth
      // );
    //   navigation.navigate("", {
    //     username: username,
    //     password: password,
    //     role_id: role_id,
    //     // tạo tk mặc đính nó là 1
    //     status_id: 1,

    //     MSSV: MSSV, 
    //     first_name: first_name, 
    //     last_name: last_name, 
    //     phone: phone,

    //     address: address,
    //     class_id: maSoLop,
    //     gender_id: value,
    //     birth_date: dateOfBirth,
    //     email: email
    //   });

    alert('bạn đã tạo tk mới thành công')
    navigation.dispatch(
      CommonActions.reset(
        {
          index: 0,
          routes: [{name: 'uiTapAdmin'}]
        }
      )
    )
    }
  };

  const dispatch = useDispatch();

  const {showKeyBoard} = useSelector(state => state.keyboardShow)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../../../../resource/iconLogin/bg.png")}
        resizeMode="cover"
        style={{ width: screenWidth, height: screenHeight }}
      >
        <View
          style={{
            // borderWidth: 1,
            flexDirection: "row",
            height: (screenHeight * 1) / 8,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../../../resource/iconLogin/lotLogo2.png")}
            style={{
              height: 80,
              width: 80,
              position: "absolute",
              left: screenWidth / 10 - 30,
              top: 10,
              zIndex: 1,
            }}
            resizeMode="contain"
          ></Image>
          <Image
            source={require("../../../../../resource/iconLogin/logo.png")}
            style={{
              height: 75,
              width: 75,
              position: "absolute",
              left: screenWidth / 10 - 27,
              top: 13,
              borderRadius: 16,
              zIndex: 2,
            }}
            resizeMode="contain"
          ></Image>
          <View style={styles.containerNameSchool}>
            <Text style={styles.nameSchool}>
              Học viện công nghệ bưu chính viễn thông
            </Text>
          </View>
        </View>

        {/* decorate steps */}
        <View
          style={{
            width: screenWidth,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 15,
              height: 15,
              backgroundColor: Color.colorDecorateStep,
              borderRadius: 50,
            }}
          />
          <View
            style={{
              width: 100,
              height: 2,
              backgroundColor: Color.colorDecorateStep,
            }}
          />
          <View
            style={{
              width: 15,
              height: 15,
              backgroundColor: Color.colorDecorateStep,
              borderRadius: 50,
            }}
          />
          <View
            style={{
              width: 100,
              height: 2,
              backgroundColor: Color.colorDecorateStep,
            }}
          />
          <View
            style={{
              width: 15,
              height: 15,
              backgroundColor: Color.colorDecorateStep,
              borderRadius: 50,
            }}
          />
        </View>
        <View style={styles.containerHeader}>
          <Text style={styles.header}>Tạo tài khoản sinh viên</Text>
        </View>

        <ScrollView
          style={{
            flex: 1,
            marginTop: 20,
            paddingHorizontal: 20,
            marginBottom: showKeyBoard ? (1 / 2) * screenHeight - 40 : 0,
          }}
        >
          {/* address */}
          <View style={styles.containerFormActive}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.headerFormActive}>Địa chỉ</Text>
              <Text
                style={[styles.headerFormActive, { color: Color.colorRemove }]}
              >
                (*)
              </Text>
            </View>

            <TextInput
              style={styles.formActive}
              autoFocus={true}
              onChangeText={(addressInput) => {
                setAddress(addressInput);
              }}
              value={address}
            ></TextInput>
          </View>

          {/* Mã số lớp */}
          <View style={styles.containerFormActive}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.headerFormActive}>Mã số lớp</Text>
              <Text
                style={[styles.headerFormActive, { color: Color.colorRemove }]}
              >
                (*)
              </Text>
            </View>

            <TextInput
              style={styles.formActive}
              onChangeText={(maSoLopInput) => {
                setMaSoLop(maSoLopInput);
              }}
              value={maSoLop}
            ></TextInput>
          </View>

          {/* Email*/}
          <View style={styles.containerFormActive}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.headerFormActive}>Email</Text>
              <Text
                style={[styles.headerFormActive, { color: Color.colorRemove }]}
              >
                (*)
              </Text>
            </View>

            <TextInput
              style={styles.formActive}
              onChangeText={(emailInput) => {
                setEmail(emailInput);
              }}
              value={email}
            ></TextInput>
          </View>

          {/* giới tính */}
          <View
            style={{
              height: 70,
              position: "absolute",
              top: -5,
              right: 15,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.headerFormActive}>Giới tính</Text>
              <Text
                style={[styles.headerFormActive, { color: Color.colorRemove }]}
              >
                (*)
              </Text>
            </View>
          </View>

          {/* Ngày sinh */}
          <View
            style={{
              position: "absolute",
              top: 0.22 * screenHeight + 4,
              right: 15,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.headerFormActive}>Ngày sinh</Text>
              <Text
                style={[styles.headerFormActive, { color: Color.colorRemove }]}
              >
                (*)
              </Text>
            </View>
          </View>

          {/* giới tính */}
          <View style={styles.containerDropPicker}>
            <DropDownPicker
              open={openDropPicker}
              value={value}
              items={items}
              setOpen={setOpenDropPicker}
              setValue={setValue}
              setItems={setItems}
              placeholder="Giới tính"
              dropDownContainerStyle={{
                borderWidth: 0,
                elevation: 5,
                shadowColor: Color.colorTextMain,
              }}
              style={styles.dropdown}
              textStyle={{
                fontSize: 17,
                color: Color.colorTextMain,
                fontWeight: "600",
              }}
            />
          </View>

          {/* Ngày sinh */}
          <TouchableOpacity
            style={[
              styles.formActive,
              {
                position: "absolute",
                top: 0.27 * screenHeight - 3,
                right: 0,
                width: 0.3 * screenWidth + 12,
                justifyContent: "center",
              },
            ]}
            onPress={handleOnPressDateOfBirth}
          >
            <Text style={{ color: Color.colorTextMain, fontSize: 20 }}>
              {dateOfBirth}
            </Text>
            <Image
              source={require("../../../../../resource/iconFormCreateActive/triangleDowm.png")}
              style={{
                height: 18,
                width: 18,
                position: "absolute",
                right: 0,
                top: "25%",
                borderRadius: 16,
                zIndex: 2,
                tintColor: Color.colorTextMain,
              }}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>

          <Modal
            animationType="fade"
            transparent={true}
            visible={openDateOfBirth}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <DatePicker
                  mode="calendar"
                  selected={dateOfBirth.split("/").reverse().join("/")}
                  onDateChange={handleChangeDateOfBirth}
                />
                <TouchableOpacity
                  onPress={handleOnPressDateOfBirth}
                  style={styles.btnDate}
                >
                  <Text>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: showKeyBoard ? 30 : 0,
              marginTop: 30,
            }}
          >
            <Text
              style={[styles.headerFormActive, { color: Color.colorRemove }]}
            >
              (*): Bắt buộc
            </Text>

            <TouchableOpacity
              style={styles.btnResigter}
              onPress={navigateFormContinue}
            >
              <Text style={styles.resigter}>Tạo tài khoản</Text>

              {/* dialog thông tin */}
              <Dialog.Container
                visible={dialogThongtin}
                contentStyle={{
                  backgroundColor: "#EEF7FF",
                  borderRadius: 10,
                  width: (1 / 2) * screenWidth + 150,
                  height: (1 / 5) * screenHeight,
                }}
              >
                <Dialog.Title
                  style={{
                    color: Color.colorTextMain,
                    fontWeight: "700",
                    fontSize: 20,
                  }}
                >
                  Thông báo
                </Dialog.Title>
                <Dialog.Description
                  style={{ color: "black", fontSize: FontSize.sizeSmall + 2 }}
                >
                  Bạn vui lòng nhập đủ thông tin!
                </Dialog.Description>
                <Dialog.Button
                  label="Ok"
                  onPress={() => setDialogThongtin(!dialogThongtin)}
                  style={[
                    styles.btnCancel,
                    {
                      width: 60,
                      height: 40,
                      fontWeight: "700",
                      fontSize: FontSize.sizeMain,
                      color: Color.colorTextMain,
                    },
                  ]}
                />
              </Dialog.Container>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* posision, logo */}
        <View style={styles.containerPositionLogo}>
          <Image
            source={require("../../../../../resource/iconHomeAdmin/iconAdmin.png")}
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
          <Text style={styles.headerAdmin}>Admin</Text>
        </View>

        <View style={{ width: "100%" }}>
          <Image
            source={require("../../../../../resource/iconLogin/lotLogo2.png")}
            style={{
              height: 68,
              width: 68,
              position: "absolute",
              right: 42,
              bottom: 140,
              borderRadius: 8,
              zIndex: 1,
            }}
            resizeMode="contain"
          ></Image>
          <Image
            source={require("../../../../../resource/iconLogin/logo.png")}
            style={{
              height: 60,
              width: 60,
              position: "absolute",
              right: 45,
              bottom: 140,
              borderRadius: 16,
              zIndex: 2,
            }}
            resizeMode="contain"
          ></Image>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: (2 / 10) * screenHeight - 4,
  },

  containerNameSchool: {
    height: (1 / 10) * screenHeight,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    width: (2 / 3) * screenWidth,
    marginLeft: 90,
  },
  nameSchool: {
    fontSize: FontSize.sizeMain,
    fontWeight: "600",
    color: Color.colorTextMain,
  },
  containerHeader: {
    height: (1 / 12) * screenHeight,
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  header: {
    fontSize: FontSize.sizeHeader,
    fontWeight: "700",
    color: Color.colorTextMain,
  },

  containerFormActive: {
    width: "55%",
    height: 70,
    marginBottom: 26,
    // borderWidth: 1,
    justifyContent: "center",
  },

  headerFormActive: {
    fontSize: FontSize.sizeMain,
    fontWeight: "700",
    color: Color.colorTextMain,
    marginBottom: 10,
    marginRight: 4,
  },

  formActive: {
    fontSize: 20,
    height: 40,
    color: Color.colorTextMain,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorBorder,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  btnDate: {
    width: 100,
    height: 30,
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

  btnResigter: {
    width: 72 * 2,
    height: 28 * 1.6,
    borderRadius: 8,
    backgroundColor: Color.colorBtnCreateActive,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    elevation: 1.5,
  },

  resigter: {
    fontSize: FontSize.sizeSmall + 3,
    fontWeight: "600",
    color: "white",
  },

  containerDropPicker: {
    position: "absolute",
    top: '13%',
    right: 0,
    marginBottom: 20,
  },

  dropdown: {
    width: 72 * 2,
    height: 28 * 1.6,
    backgroundColor: Color.colorBgUiTap,
    borderWidth: 0,
    elevation: 2,
    shadowColor: Color.colorTextMain,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    width: "90%",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  btnDate: {
    width: 100,
    height: 30,
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

  containerPositionLogo: {
    position: "absolute",
    bottom: 140,
    width: 0.8 * screenWidth,
    marginLeft: 40,
    paddingVertical: 20,
    backgroundColor: Color.colorBgUiTap,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "black",
  },

  headerAdmin: {
    fontSize: FontSize.sizeMain,
    fontWeight: "600",
    color: Color.colorTextMain,
    marginLeft: 70,
  },
});
