import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  Keyboard,
  Alert
} from "react-native";
import React, { useState, useEffect } from "react";
import FontSize from "../../../component/FontSize";
import Color from "../../../component/Color";
import { screenWidth, screenHeight } from "../../../component/DimensionsScreen";
import OrganizedActiveItemAdmin from "./OrganizedActiveItemAdmin";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-native-modern-datepicker";
import moment from "moment";
import ThongKeAdminDTAction from "../../../redux/action/thongKeAction/ThongKeAdminDTAction";
import Spinner from "react-native-loading-spinner-overlay";

export default function ListOrganizedActiveAdmin({ navigation }) {
  const today = new Date();
  const dispatch = useDispatch();
  const { loading, reponseSuccess, error, data } = useSelector(
    (state) => state.thongKeAdminDTReducer
  );

  // ngày tổ chức cách ngày hiện tại ít nhất 7 ngày
  const convertDateOrganize = moment(today.setDate(today.getDate())).format(
    "MM-YYYY"
  );

  const [activeOrganize, setActiveOrganize] = useState();

  const [limitActive, setLimitActive] = useState("10");
  const [dateOrganize, setdateOrganize] = useState(convertDateOrganize);
  const [openOrganize, setOpenOrganize] = useState(false); // open and close the modal
  const handleOnPressOrganize = () => {
    setOpenOrganize(!openOrganize);
  };

  const handleChangeOrganize = (propDate) => {
    const reversedStrOrganize = propDate.split(" ").reverse().join("-");
    setdateOrganize(reversedStrOrganize);
  };

  useEffect(() => {
    const [month, year] = dateOrganize.split("-");

    const monthYearLimit = {
      year: parseInt(year, 10),
      month: parseInt(month, 10),
      limit: parseInt(limitActive, 10),
    };
    dispatch(ThongKeAdminDTAction(monthYearLimit));
  }, [dispatch]);

  // Cập nhật state active khi dữ liệu từ Redux store thay đổi

  useEffect(() => {
    if ((data != null && loading == false, reponseSuccess == true)) {
      const dateOrganizeConvert = dateOrganize.split("-").reverse().join("-");
      const filterForMonthYear = data.filter((eachActive) => {
        return eachActive.act_time.includes(dateOrganizeConvert);
      });

      // console.log(filterForMonthYear.slice(0, limit))
      setActiveOrganize(filterForMonthYear.slice(0, limitActive));
    } else if (error != null && loading == false && reponseSuccess == false) {
      Alert.alert("Lỗi", error)  
    }
  }, [data, error, loading, reponseSuccess, dateOrganize, limitActive]);

  // console.log(filterForMonthYear())

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{ color: "white", fontSize: FontSize.sizeHeader }}
      />
      <Image
        source={require("../../../resource/iconListActive/decorTop.png")}
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
        source={require("../../../resource/iconLogin/bg.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "120%", alignItems: "center" }}
      >
        <View style={styles.containerHeader}>
          <View style={styles.containerUserName}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.headerFormActive}>Số hoạt động</Text>
              <Text
                style={[styles.headerFormActive, { color: Color.colorRemove }]}
              >
                (*)
              </Text>
            </View>
            <TextInput
              style={styles.username}
              autoFocus={true}
              keyboardType="numeric"
              onChangeText={(limitInput) => {
                setLimitActive(limitInput);
              }}
              value={limitActive}
            ></TextInput>
          </View>

          <View style={styles.containerFormActive}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.headerFormActive}>Thời gian tổ chức</Text>
              <Text
                style={[styles.headerFormActive, { color: Color.colorRemove }]}
              >
                (*)
              </Text>
            </View>

            <TouchableOpacity
              style={[
                styles.formActive,
                {
                  width:
                    dateOrganize == "MM/YYYY"
                      ? 0.3 * screenWidth
                      : 0.26 * screenWidth,
                  justifyContent: "center",
                },
              ]}
              onPress={handleOnPressOrganize}
            >
              <Text style={{ color: Color.colorTextMain, fontSize: 20 }}>
                {dateOrganize}
              </Text>
              <Image
                source={require("../../../resource/iconFormCreateActive/triangleDowm.png")}
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
              visible={openOrganize}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <DatePicker
                    mode="monthYear"
                    // minimumDate={convertDateOrganize}
                    // do ở trên mình convert string thành DD//MM/YYYY
                    // nên sau đó trx khi đưa vào hệ thống sử lí mình
                    // phải convert ngược lại

                    selected={dateOrganize.split("/").reverse().join("/")}
                    onMonthYearChange={handleChangeOrganize}
                  />

                  <TouchableOpacity
                    onPress={handleOnPressOrganize}
                    style={styles.btnDate}
                  >
                    <Text>Ok</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
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
              Tên hoạt động
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
              }}
            >
              Ngày tổ chức
            </Text>
          </View>

          <FlatList
            style={{ flex: 1 }}
            data={activeOrganize}
            renderItem={({ item }) => (
              <OrganizedActiveItemAdmin
                activeOrganized={item}
                onPressItem={() => {
                  navigation.navigate("detailOrganizedActiveAdmin", {
                    detailOrganizedActiveAdmin: item,
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* posision, logo */}
        <View style={styles.containerPositionLogo}>
          <Image
            source={require("../../../resource/iconHomeAdmin/iconAdmin.png")}
            style={{
              height: 44,
              width: 44,
              position: "absolute",
              left: 13,
              top: 12,
              zIndex: 2,
            }}
            resizeMode="contain"
          ></Image>
          <Text style={styles.headerAdmin}>Admin</Text>
        </View>

        <View style={{ width: "100%" }}>
          <Image
            source={require("../../../resource/iconLogin/lotLogo2.png")}
            style={{
              height: 68,
              width: 68,
              position: "absolute",
              right: 40,
              bottom: 0,
              borderRadius: 8,
              zIndex: 1,
            }}
            resizeMode="contain"
          ></Image>
          <Image
            source={require("../../../resource/iconLogin/logo.png")}
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
    paddingHorizontal: 20,
    zIndex: 2,
    width: screenWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: FontSize.sizeHeader - 3,
    fontWeight: "600",
    color: Color.colorTextMain,
    width: (2 / 5) * screenWidth,
  },

  btnCancel: {
    width: 85 * 2,
    height: 30 * 1.6,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  resigter: {
    fontSize: FontSize.sizeSmall + 6,
    fontWeight: "700",
    color: Color.colorTextMain,
  },

  containerFormActive: {
    justifyContent: "center",
  },

  headerFormActive: {
    fontSize: FontSize.sizeMain,
    fontWeight: "700",
    color: Color.colorTextMain,
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

  containerUserName: {
    width: "37%",
    height: 66,
    borderBottomWidth: 1,
    borderColor: Color.colorBorder,
    marginRight: 60,
  },

  username: {
    width: "100%",
    fontSize: 22,
    color: Color.colorTextMain,
    marginTop: 5,
  },
  containerPositionLogo: {
    width: 0.8 * screenWidth,
    marginTop: 12,
    paddingVertical: 18,
    paddingLeft: 20,
    backgroundColor: Color.colorBgUiTap,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "black",
  },
  headerAdmin: {
    fontSize: FontSize.sizeMain + 2,
    fontWeight: "600",
    color: Color.colorTextMain,
    marginLeft: 50,
  },
});
