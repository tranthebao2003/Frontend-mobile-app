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
  Alert
} from "react-native";
import React, { useState } from "react";
import FontSize from "../../component/FontSize";
import Color from "../../component/Color";
import { screenWidth, screenHeight } from "../../component/DimensionsScreen";
// import { DarkTheme } from "@react-navigation/native";
import DatePicker from 'react-native-modern-datepicker'
import moment from "moment"

export default function FormCreateActive() {

  // Thời gian tổ chức
  const today = new Date()
  // ngày tổ chức cách ngày hiện tại ít nhất 7 ngày
  const startDateOrganize = moment(today.setDate(today.getDate() + 7)).format('YYYY/MM/DD')


  // hạn chót đăng kí phải nhỏ hơn ngày tổ chức ít  nhất 3 ngày
  // startDateOrganize = moment(today.setDate(today.getDate() + 7)).format('YYYY/MM/DD')
  // console.log(startDate)

  const [nameActive, setNameActive] = useState()

  const [openOrganize, setOpenOrganize] = useState(false) // open and close the modal
  const [dateOrganize, setdateOrganize] = useState('DD/MM/YYYY')


  const handleOnPressOrganize = () => {
    setOpenOrganize(!openOrganize)
  }

  const handleChangeOrganize = (propDate) => {
    const reversedStrOrganize = propDate.split('/').reverse().join('/');
    setdateOrganize(reversedStrOrganize)
    // console.log(reversedStr)
  }


  // Hạn chót tham gia
  const [openDeadLine, setOpenDeadLine] = useState(false) // open and close the modal
  const [dateDeadLine, setdateDeadLine] = useState('DD/MM/YYYY')

  const handleOnPressDeadLine = () => {
    // bắt lỗi logic nếu chưa chọn tg tổ chức thì ko thêm hạn chót
    // đăng kí đươc
    if (dateOrganize === "DD/MM/YYYY") {
      Alert.alert("Thông báo", "Bạn chưa chọn thời gian tổ chức");
    } else{
      setOpenDeadLine(!openDeadLine);
    }

  }

  const handleChangeDeadLine = (propDate) => {
    const reversedStrDeadLine = propDate.split('/').reverse().join('/');
    setdateDeadLine(reversedStrDeadLine)
    // console.log(reversedStr)
  }

  const navigateFormContinue = () => {
    // thiếu 1 trong 3 thông tin thì ko thể next
    if(nameActive === '' || dateOrganize === 'DD/MM/YYYY' ||  dateDeadLine === 'DD/MM/YYYY'){
      Alert.alert('Thông báo', 'Bạn vui lòng nhập đủ thông tin')
    } 
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../resource/iconLogin/bg.png")}
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
            source={require("../../resource/iconLogin/lotLogo2.png")}
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
            source={require("../../resource/iconLogin/logo.png")}
            style={{
              height: 75,
              width: 75,
              position: "absolute",
              left: screenWidth / 10 - 25,
              top: 12,
              borderRadius: 16,
              zIndex: 2,
              tintColor: Color.colorTextMain,
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
          <Text style={styles.header}>Tạo hoạt động</Text>
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
              <Text style={styles.headerFormActive}>Tên hoạt động</Text>
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
                setNameActive(nameActiveInput)
              }}
              value={nameActive}
            
            ></TextInput>
          </View>

          {/* Time organize */}
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
                  width: 0.45 * screenWidth,
                  justifyContent: "center",
                },
              ]}
              onPress={handleOnPressOrganize}
            >
              <Text style={{ color: Color.colorTextMain, fontSize: 20 }}>
                {dateOrganize}
              </Text>
              <Image
                source={require("../../resource/iconFormCreateActive/triangleDowm.png")}
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
                    mode="calendar"
                    minimumDate={startDateOrganize}
                    selected={dateOrganize}
                    onDateChange={handleChangeOrganize}
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

          {/* Deadline */}
          <View style={styles.containerFormActive}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.headerFormActive}>Hạn chót đăng kí</Text>
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
                  width: 0.45 * screenWidth,
                  justifyContent: "center",
                },
              ]}
              onPress={handleOnPressDeadLine}
            >
              <Text style={{ color: Color.colorTextMain, fontSize: 20 }}>
                {dateDeadLine}
              </Text>
              <Image
                source={require("../../resource/iconFormCreateActive/triangleDowm.png")}
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
              visible={openDeadLine}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <DatePicker
                    mode="calendar"
                    // maximumDate = {startDeadline}
                    selected={dateDeadLine}
                    onDateChange={handleChangeDeadLine}
                  />

                  <TouchableOpacity
                    onPress={handleOnPressDeadLine}
                    style={styles.btnDate}
                  >
                    <Text>Ok</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>

          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between'}}>
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
    width: (2/3) * screenWidth,
    marginLeft: 90
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
    width: '100%',
    height: 100,
    marginBottom: 30,
    // borderWidth: 1,
    justifyContent: 'center'
  },

  headerFormActive: {
     fontSize: 20, 
     fontWeight: '700',
     color: Color.colorTextMain, 
     marginBottom: 10,
     marginRight: 4
  },

  formActive: {
    fontSize: 20,
    height: 40,
    color: Color.colorTextMain,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorBorder,
    paddingLeft: 20
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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
    color: 'white',
  },
});
