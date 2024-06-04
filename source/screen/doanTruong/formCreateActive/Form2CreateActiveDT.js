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
  Alert,
  Keyboard,
} from "react-native";
import React, { useState, useEffect} from "react";
import FontSize from "../../../component/FontSize";
import Color from "../../../component/Color";
import { screenWidth, screenHeight } from "../../../component/DimensionsScreen";
import { useSelector, useDispatch} from "react-redux";
import {showKeyBoardAction, hideKeyBoardAction} from '../../../redux/action/KeyBoardAction'
import CreateActiveAction from "../../../redux/action/CreateActiveAction";
import Spinner from 'react-native-loading-spinner-overlay'
import { CommonActions } from "@react-navigation/native";
import { CREATE_ACTIVE_RESET } from "../../../redux/types/TypesCreateActive";

export default function Form2CreateActiveDT(props) {
  const dispatch = useDispatch()
  const {navigation} = props

  const { loading, reponseSuccess, error } = useSelector(
    (state) => state.createActiveReducer
  );

  const {act_name, act_time, amount} = props.route.params;

  
  const [location, setLocation] = useState('');

  const [organizer, setOrganizer] = useState('');

  // cost này mình cho nó string luôn là vì textInput nó cho phép string thui
  //  nếu cần xử lí gì thì mình convert sang number cũng được
  const [cost, setCost] = useState('0');

  const [description, setDescription] = useState('');

  const navigateCreateActive = () => {
    if (location === "" || organizer === "") {
      Alert.alert("Thông báo", "Bạn vui lòng nhập đủ thông tin");
    } else {
      const [day, month, year] = act_time.split('/');
      const formattedDate = `${year}/${month}/${day}`;

      const active = {
        act_name: act_name,
        act_time: formattedDate,
        amount: amount,

        act_address: location,
        act_price: cost,
        organization: organizer,

        act_description: description,
        act_status: 1,
      };

      dispatch(CreateActiveAction(active));
    }
  };

  useEffect(() => {
    console.log(reponseSuccess, error, loading, 'Form2CreateActiveDT')
    dispatch({ type: CREATE_ACTIVE_RESET });
    console.log(reponseSuccess, error, loading, 'Form2CreateActiveDT')
  }, [dispatch]);

  useEffect(() => {
    if (error != null && loading == false) {
      Alert.alert("Thông báo", error);
      dispatch({ type: CREATE_ACTIVE_RESET });
    } else if (reponseSuccess == true && loading == false) {
      Alert.alert("Bạn đã tạo hoạt động thành công");
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "uiTapDTruong"}],
        })
      );
      dispatch({ type: CREATE_ACTIVE_RESET });
    }
  }, [error, reponseSuccess, loading]);

  const {showKeyBoard} = useSelector(state => state.keyboardShow)

  // xử lí keyboard

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
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{ color: "white", fontSize: FontSize.sizeHeader }}
      />
      <ImageBackground
        source={require("../../../resource/iconLogin/bg.png")}
        resizeMode="cover"
        style={{ width: screenWidth, height: screenHeight }}
      >
        {/* logo và tên học viện */}
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
            source={require("../../../resource/iconLogin/lotLogo2.png")}
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
            source={require("../../../resource/iconLogin/logo.png")}
            style={{
              height: 75,
              width: 75,
              position: "absolute",
              left: screenWidth / 10 - 27,
              top: 12,
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
        </View>
        <View style={styles.containerHeader}>
          <Text style={styles.header}>Tạo hoạt động</Text>
        </View>

        <ScrollView
          style={{
            height: (2 / 3) * screenHeight,
            // borderWidth: 1,
            marginTop: 20,
            marginBottom: showKeyBoard ? (1 / 5) * screenHeight : 0,
            paddingHorizontal: 20,
          }}
        >
          {/* Location active */}
          <View style={styles.containerFormActive}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.headerFormActive}>Địa điểm tổ chức</Text>
              <Text
                style={[styles.headerFormActive, { color: Color.colorRemove }]}
              >
                (*)
              </Text>
            </View>

            <TextInput
              style={styles.formActive}
              autoFocus={true}
              onChangeText={(locationInput) => {
                setLocation(locationInput);
              }}
              value={location}
            ></TextInput>
          </View>

          {/* organizer */}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={[styles.containerFormActive, { width: "50%" }]}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.headerFormActive}>Đơn vị tổ chức</Text>
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
                onChangeText={(organizerInput) => {
                  setOrganizer(organizerInput);
                }}
                value={organizer}
              ></TextInput>
            </View>

            <View
              style={[
                styles.containerFormActive,
                { width: "40%", alignItems: "center" },
              ]}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={[styles.headerFormActive]}>Phí tham gia</Text>
              </View>

              <View style={{ width: "80%", flexDirection: "row" }}>
                <TextInput
                  style={[
                    styles.formActive,
                    { width: "100%", paddingRight: 15 },
                  ]}
                  keyboardType="numeric"
                  onChangeText={(costInput) => {
                    setCost(costInput);
                  }}
                  value={cost}
                ></TextInput>

                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "600",
                    position: "absolute",
                    top: 5,
                    right: 0,
                    color: Color.colorTextMain,
                  }}
                >
                  Đ
                </Text>
              </View>
            </View>
          </View>

          {/* Description */}
          <View style={styles.containerFormActive}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.headerFormActive}>Mô tả hoạt động</Text>
            </View>

            <TextInput
              style={styles.formActive}
              onChangeText={(descriptionInput) => {
                setDescription(descriptionInput);
              }}
              value={description}
            ></TextInput>
          </View>
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: (1 / 5) * screenHeight,
            alignItems: "center",
            height: (1 / 4) * screenHeight,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={[
              styles.headerFormActive,
              { color: Color.colorRemove, marginBottom: 0 },
            ]}
          >
            (*): Bắt buộc
          </Text>

          <TouchableOpacity
            style={styles.btnResigter}
            onPress={navigateCreateActive}
          >
            <Text style={styles.resigter}>Tạo hoạt động</Text>
          </TouchableOpacity>
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
    height: 100,
    marginBottom: 30,
    // borderWidth: 1,
    justifyContent: "center",
  },

  headerFormActive: {
    fontSize: 20,
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
    width: 74 * 2,
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
