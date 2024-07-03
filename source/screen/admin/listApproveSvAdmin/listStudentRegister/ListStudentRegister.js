import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import FontSize from "../../../../component/FontSize";
import Color from "../../../../component/Color";
import {
  screenWidth,
  screenHeight,
} from "../../../../component/DimensionsScreen";
import StudentRegisterItem from "./StudentRegisterItem";
import { useSelector, useDispatch } from "react-redux";
import StudentRegisterActiveAction from "../../../../redux/action/approveStudentAction/StudentRegisterActiveAction";
import Spinner from "react-native-loading-spinner-overlay";

export default function ListStudentRegister(props) {
  const{navigation} = props
  const {
    // này là id_act để lấy ra register
    id,
    act_name,
  } = props.route.params.listStudentRegister;
  const dispatch = useDispatch();

  const { loadingStudent, listStudent, errorStudent } = useSelector(
    (state) => state.studentRegisterActiveReducer
  );
  // console.log(infoUser, 'infoUser màn profileSv')

  // cái này nhận về là 1 những register ko phải student => thông qua act_account mới lấy ra đc
  // student => trong đây phải call 2 api

  const [resigter, setResigter] = useState([]);
  console.log("resigter", resigter);

  // Gọi action để lấy dữ liệu khi component được mount
  useEffect(() => {
    dispatch(StudentRegisterActiveAction(id));
  }, [dispatch]);

  // Cập nhật state active khi dữ liệu từ Redux store thay đổi
  useEffect(() => {
    if (listStudent && loadingStudent == false) {
      setResigter(listStudent);
    } else if (errorStudent != null && loadingStudent == false) {
      Alert.alert("Lỗi", errorStudent)  
    }
  }, [listStudent, errorStudent, loadingStudent]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Spinner
        visible={loadingStudent}
        textContent={"Loading..."}
        textStyle={{ color: "white", fontSize: FontSize.sizeHeader }}
      />
      <Image
        source={require("../../../../resource/iconListActive/decorTop.png")}
        style={{
          height: 900,
          width: 600,
          position: "absolute",
          top: -220,
          right: -100,
          zIndex: 1,
        }}
        resizeMode="contain"
      ></Image>
      <ImageBackground
        source={require("../../../../resource/iconLogin/bg.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "120%", alignItems: "center" }}
      >
        <View style={styles.containerHeader}>
          <Text style={styles.header}>{act_name}</Text>
          <Image
            source={require("../../../../resource/iconLogin/lotLogo2.png")}
            style={{
              height: 80,
              width: 80,
              position: "absolute",
              right: 30,
              top: 30,
              zIndex: 1,
            }}
            resizeMode="contain"
          ></Image>
          <Image
            source={require("../../../../resource/iconLogin/logo.png")}
            style={{
              height: 80,
              width: 80,
              position: "absolute",
              right: 30,
              top: 30,
              borderRadius: 16,
              zIndex: 2,
            }}
            resizeMode="contain"
          ></Image>
        </View>

        <View
          style={{
            width: 0.92 * screenWidth,
            height: 0.6 * screenHeight,
            backgroundColor: Color.colorBtn,
            marginHorizontal: 10,
            marginBottom: 5,
            padding: 20,
            borderRadius: 10,
            shadowColor: Color.colorTextMain,
            shadowOffset: { width: 800, height: 800 },
            shadowOpacity: 2,
            elevation: 2,
            zIndex: 2,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
              }}
            >
              ID tài khoản
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
              }}
            >
              Mã số sinh viên
            </Text>
          </View>

          <FlatList
            style={{ flex: 1 }}
            data={resigter}
            renderItem={({ item }) => (
              <StudentRegisterItem
                studentRegister={item}
                onPressItem={() => {
                  navigation.navigate("detailStudentRegister", {
                    detailStudentRegister: item,
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerHeader: {
    height: (1 / 6) * screenHeight,
    padding: 30,
    zIndex: 2,
    width: screenWidth,
  },
  header: {
    fontSize: FontSize.sizeHeader - 4,
    fontWeight: "700",
    color: Color.colorTextMain,
    width: (2 / 4) * screenWidth,
  },

  btnCancel: {
    width: 85 * 2,
    height: 30 * 1.6,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.colorApproveAll,
  },

  resigter: {
    fontSize: FontSize.sizeSmall + 6,
    fontWeight: "700",
    color: Color.colorTextMain,
  },
});
