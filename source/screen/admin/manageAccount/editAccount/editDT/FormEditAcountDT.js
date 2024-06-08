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
    Alert
  } from "react-native";
  import React, { useState, useEffect} from "react";
  import FontSize from "../../../../../component/FontSize";
  import Color from "../../../../../component/Color";
  import { screenWidth, screenHeight } from "../../../../../component/DimensionsScreen";
  // import { DarkTheme } from "@react-navigation/native";
  import Dialog from 'react-native-dialog'
  import {useDispatch, useSelector} from "react-redux";
  import {showKeyBoardAction, hideKeyBoardAction} from '../../../../../redux/action/KeyBoardAction'
  import LockAccountAction from "../../../../../redux/action/removeLockAccountAction/LockAccountAction";
  import Spinner from "react-native-loading-spinner-overlay";

  export default function FormEditAcountDT(props) {
    const {navigation} = props
    const dispatch = useDispatch()
    const{
      // id này là key để sửa username password đoàn trường
      id,
      status_id,
      username,
    } = props.route.params.accountDT;
    
    const { loadingLock, reponseSuccessLock, errorLock } = useSelector(
      (state) => state.lockAccountReducer
    );

    const [visiblePassword, setVisiblePassword] = useState(true);
    const changeIconPassword = () => setVisiblePassword(!visiblePassword);
  
  
    const [password, onChangePassword] = useState("");
    const [isValidPassword, setIsValidPassword] = useState(false);
    const verifyPassword = (password) => {
      // regexPassword: Minimum eight characters, at least one uppercase letter,
      // one lowercase letter and one number:
      let regexPassword = new RegExp(
        /((?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$)/
      );
      if (regexPassword.test(password)) {
        return true;
      }
      return false;
    };

    const [dialogThongtin, setDialogThongtin] = useState(false);

    const [dialogPassword, setDialogPassword] = useState(false);

    const [userName, setUserName] = useState(username);
  

    const navigateFormContinue = () => {
  
      // console.log(date1, date2)
      if (
        userName == '' || password == ''
      ) {
        setDialogThongtin(true)
      }

      else if (!isValidPassword) {
        setDialogPassword (true)
      }
      else {
        const newAccountDT = {
          id:id ,
          status_id:status_id ,
          username:username ,
          password:password 
        }
        dispatch(LockAccountAction(newAccountDT))
      }
    };


    useEffect(() => {
      if (errorLock != null && loadingLock == false) {
        Alert.alert("Thông báo", errorLock);
        dispatch({ type: LOCK_ACCOUNT_RESET });
      } else if (reponseSuccessLock == true && loadingLock == false) {
        Alert.alert("Bạn đã thực hiện thành công");
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "uiTapAdmin" }],
          })
        );
        dispatch({ type: LOCK_ACCOUNT_RESET });
      }
    }, [errorLock, loadingLock, reponseSuccessLock]);
  
    const {showKeyBoard} = useSelector(state => state.keyboardShow)
    useEffect(() => {
      const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
        dispatch(showKeyBoardAction())
      });
      const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
        dispatch(hideKeyBoardAction())
      });
  
      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, []);
  
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Spinner
          visible={loadingLock}
          textContent={"Loading..."}
          textStyle={{ color: "white", fontSize: FontSize.sizeHeader }}
        />
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

          <View style={styles.containerHeader}>
            <Text style={styles.header}>Sửa tài khoản đoàn trường</Text>
          </View>

          <ScrollView
            style={{
              height: screenHeight,
              width: screenWidth,
              marginTop: 20,
              paddingHorizontal: 20,
              marginBottom: showKeyBoard ? (1 / 2) * screenHeight - 40 : 0,
            }}
          >
            {/* Name active */}
            <View style={styles.containerFormActive}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.headerFormActive}>Tên tài khoản</Text>
                <Text
                  style={[
                    styles.headerFormActive,
                    { color: Color.colorRemove },
                  ]}
                >
                  (*)
                </Text>
              </View>

              <TextInput
                style={styles.formActive}
                autoFocus={true}
                onChangeText={(userNameInput) => {
                  setUserName(userNameInput);
                }}
                value={userName}
              ></TextInput>
            </View>

            {/* password */}
            <View style={styles.containerFormActive}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.headerFormActive}>Mật khẩu</Text>
                <Text
                  style={[
                    styles.headerFormActive,
                    { color: Color.colorRemove },
                  ]}
                >
                  (*)
                </Text>
              </View>
              <View style={styles.containerPassword}>
                <TextInput
                  style={styles.password}
                  placeholderTextColor={Color.colorTextMain}
                  secureTextEntry={visiblePassword}
                  onChangeText={(password) => {
                    onChangePassword(password);
                    const isValidPw = verifyPassword(password);
                    isValidPw
                      ? setIsValidPassword(true)
                      : setIsValidPassword(false);
                  }}
                  // value này để hiển thị lên user
                  value={password}
                ></TextInput>

                {isValidPassword === false ? (
                  <View
                    style={{
                      top: 26,
                      position: "absolute",
                      marginTop: 8,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#ff5252",
                        fontWeight: "500",
                      }}
                    >
                      Password phải đủ 8 kí tự trong đó ít nhất 1 chữ số,
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#ff5252",
                        fontWeight: "500",
                      }}
                    >
                      1 chữ hoa và 1 chữ thường
                    </Text>
                  </View>
                ) : (
                  ""
                )}

                <TouchableOpacity onPress={changeIconPassword}>
                  {visiblePassword ? (
                    <Image
                      source={require("../../../../../resource/iconLogin/eyeHide.png")}
                      style={styles.eye}
                      resizeMode="contain"
                    ></Image>
                  ) : (
                    <Image
                      source={require("../../../../../resource/iconLogin/eyeShow.png")}
                      style={styles.eye}
                      resizeMode="contain"
                    ></Image>
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 30,
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
                <Text style={styles.resigter}>Tiếp theo</Text>

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

                {/* dialogPassword */}
                <Dialog.Container
                  visible={dialogPassword}
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
                    Mật khẩu chưa đúng định dạng
                  </Dialog.Description>
                  <Dialog.Button
                    label="Ok"
                    onPress={() => setDialogPassword(!dialogPassword)}
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

            {/* posision, logo */}
          </ScrollView>

          <View style={styles.containerPositionLogo}>
            <Image
              source={require("../../../../../resource/iconHomeAdmin/iconAdmin.png")}
              style={{
                height: 42,
                width: 42,
                position: "absolute",
                left: 12,
                top: 13,
                zIndex: 5,
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
                bottom: 150,
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
                bottom: 150,
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
      width: "100%",
      height: 120,
      marginBottom: 20,
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
      shadowColor: 'black',
      elevation: 1.5,
    },
  
    resigter: {
      fontSize: FontSize.sizeSmall + 3,
      fontWeight: "600",
      color: "white",
    },

    containerDropPicker: {
      position: 'absolute',
      top: 2/3*screenHeight - 70,
      right: 20,
      marginBottom: 20,
    },
    
    dropdown: {
      width: 72 * 2,
      height: 28 * 1.6,
      backgroundColor: Color.colorBgUiTap,
      borderWidth: 0,
      elevation: 2,
      shadowColor: Color.colorTextMain
    },

    containerPassword: {
      width: "100%",
      height: 30,
      borderBottomWidth: 1,
      borderBottomColor: Color.colorBorder,
      marginBottom: 15,
      flexDirection: "row",
      justifyContent: "space-between",
    },
  
    password: {
      fontSize: 20,
      color: Color.colorTextMain,
      width: "85%",
    },
  
  eye: {
    height: 26,
    width: 26,
  },

  containerPositionLogo: {
    position: "absolute",
    bottom: 150,
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