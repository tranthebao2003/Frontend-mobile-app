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
    Modal,
    Alert,
    Keyboard
  } from "react-native";
  import React, { useState, useEffect} from "react";
  import FontSize from "../../../../../component/FontSize";
  import Color from "../../../../../component/Color";
  import { screenWidth, screenHeight } from "../../../../../component/DimensionsScreen";
  // import { DarkTheme } from "@react-navigation/native";
  import DatePicker from "react-native-modern-datepicker";
  import Dialog from 'react-native-dialog'
  import {useDispatch} from "react-redux";
  import {showKeyBoardAction, hideKeyBoardAction} from '../../../../../redux/action/KeyBoardAction'
  
  export default function Form1CreateStudent(props) {
    const {navigation} = props
    const dispatch = useDispatch()
  
    const [nameActive, setNameActive] = useState();
    useEffect(() => {
      const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
        dispatch(showKeyBoardAction())
      });
      const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
        dispatch(hideKeyBoardAction())
      });
  
      // showSubscription.remove() và hideSubscription.remove() là các phương thức được 
      // sử dụng để gỡ bỏ các hàm xử lý sự kiện đã được đăng ký trước đó thông qua addListener.
      // Khi component bị unmount hoặc useEffect được gọi lại, các hàm xử lý sự kiện này 
      // không còn cần thiết nữa, vì vậy chúng ta gọi remove() để loại bỏ chúng
      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, []);
  
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
                backgroundColor: "#b1ceef",
                // borderRadius: 50,
              }}
            />
            <View
              style={{
                width: 15,
                height: 15,
                backgroundColor: "#b1ceef",
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
            }}
          >
            {/* Name active */}
            <View style={styles.containerFormActive}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.headerFormActive}>Tên tài khoản</Text>
                <Text
                  style={[styles.headerFormActive, { color: Color.colorRemove }]}
                >
                  (*)
                </Text>
              </View>
  
              <TextInput
                style={styles.formActive}
                autoFocus={true}
                onChangeText={(nameActiveInput) => {
                  setNameActive(nameActiveInput);
                }}
                value={nameActive}
              ></TextInput>
            </View>

            <View style={styles.containerFormActive}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.headerFormActive}>Mật khẩu</Text>
                <Text
                  style={[styles.headerFormActive, { color: Color.colorRemove }]}
                >
                  (*)
                </Text>
              </View>
  
              <TextInput
                style={styles.formActive}
                autoFocus={true}
                onChangeText={(nameActiveInput) => {
                  setNameActive(nameActiveInput);
                }}
                value={nameActive}
              ></TextInput>
            </View>

            <View style={styles.containerFormActive}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.headerFormActive}>Chức vụ (cho chọn mai làm)</Text>
                <Text
                  style={[styles.headerFormActive, { color: Color.colorRemove }]}
                >
                  (*)
                </Text>
              </View>
  
              <TextInput
                style={styles.formActive}
                autoFocus={true}
                onChangeText={(nameActiveInput) => {
                  setNameActive(nameActiveInput);
                }}
                value={nameActive}
              ></TextInput>
            </View>
  
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[styles.headerFormActive, { color: Color.colorRemove }]}
              >
                (*): Bắt buộc
              </Text>
  
              <TouchableOpacity
                style={styles.btnResigter}
                // onPress={navigateFormContinue}
              >
                <Text style={styles.resigter}>Tiếp theo</Text>
  
                <Dialog.Container
                //   visible={dialogNavigateFormContinue1}
                visible={false}
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
                    // onPress={() => setDialogNavigateFormContinue1(!dialogNavigateFormContinue1)}
                    style={[
                      styles.btnCancel,
                      {
                        width: 60,
                        height: 40,
                        fontWeight: '700',
                        fontSize: FontSize.sizeMain,
                        color: Color.colorTextMain,
                      },
                    ]}
                  />
                </Dialog.Container>
  
  
              </TouchableOpacity>
            </View>
          </ScrollView>
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
      width: "100%",
      height: 100,
      marginBottom: 30,
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
      shadowColor: Color.colorTextMain,
      shadowOffset: { width: 500, height: 500 },
      shadowOpacity: 0.8,
      elevation: 0.8,
    },
  
    resigter: {
      fontSize: FontSize.sizeSmall + 3,
      fontWeight: "600",
      color: "white",
    },
  });
  