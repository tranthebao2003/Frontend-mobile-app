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
} from "react-native";
import React, { useState, useEffect } from "react";
import FontSize from "../../../component/FontSize";
import Color from "../../../component/Color";
import { screenWidth, screenHeight } from "../../../component/DimensionsScreen";
import OrganizedActiveItemDT from "./OrganizedActiveItemDT";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-native-modern-datepicker";

export default function ListOrganizedActiveDT({ navigation }) {
  // ở đây chỉ bao gồm những hoạt động do đoàn trường tạo
  // do api trả về lun
  // chỉ thống kê những hoạt động đã được phê duyệt và xảy ra rồi, tổ chức rồi
  const [active, setActive] = useState([
    {
      id: 1,
      stt: 1,
      nameActive: "Trăng cho em",
      timeOrganize: "03/02/2005",
      // deadline này là thuộc tính tính toán được
      deadline: "20/01/2005",
      location: "Học viện cơ sở quận 9 hội trường A",
      quantityActived: 30,
      organizer: "Đoàn trường",
      timeCreateActive: "10/01/2005",
      cost: 20000,
      personApprove: "không có",
      timeApprove: "không có",
      minNumber: 50,

      description:
        "Là hoạt động thiện nguyên cho trẻ em vùng cao có hoàn cảnh khó khăn",
      status: "register",
    },

    {
      id: 2,
      stt: 2,
      nameActive: "Mùa hè xanh",
      timeOrganize: "10/02/2005",
      deadline: "10/10/2005",
      location: "Học viện cơ sở quận 9 hội trường B",
      quantityActived: 10,
      organizer: "Đoàn trường",
      timeCreateActive: "10/01/2005",
      cost: 60000,
      personApprove: "không có",
      timeApprove: "không có",
      minNumber: 20,
      description: "Là hoạt động để sinh viên có 1 mùa hè ý nghĩa",
      status: "registered",
    },

    {
      id: 3,
      stt: 3,
      nameActive: "Lập trình cho bé từ 10 đến 12 tuổi",
      timeOrganize: "03/08/2005",
      deadline: "01/09/2005",
      location: "Học viện cơ sở quận 1",
      quantityActived: 50,
      organizer: "Đoàn trường",
      timeCreateActive: "10/01/2005",
      cost: 200000,
      personApprove: "không có",
      timeApprove: "không có",
      minNumber: 80,
      description: "Là hoạt động giới thiệu lập trình đến các em nh3o",
      status: "no register",
    },

    {
      id: 4,
      stt: 4,
      nameActive: "Lập trình cho bé từ 10 đến 12 tuổi",
      timeOrganize: "04/10/2005",
      deadline: "12/12/2005",
      location: "Học viện cơ sở quận 9 phòng 2A11",
      quantityActived: 60,
      organizer: "Đoàn trường",
      timeCreateActive: "10/01/2005",
      cost: 0,
      personApprove: "không có",
      timeApprove: "không có",
      minNumber: 220,
      description: "giới thiệu lập trình đến các em nhỏ",
      status: "registered",
    },

    {
      id: 5,
      stt: 5,
      nameActive: "Lập trình cho bé từ 10 đến 12 tuổi",
      timeOrganize: "04/10/2005",
      deadline: "12/12/2005",
      location: "Học viện cơ sở quận 9 phòng 2A11",
      quantityActived: 60,
      organizer: "Đoàn trường",
      timeCreateActive: "10/01/2005",
      cost: 0,
      personApprove: "không có",
      timeApprove: "không có",
      minNumber: 220,
      description: "giới thiệu lập trình đến các em nhỏ",
      status: "registered",
    },

    {
      id: 6,
      stt: 6,
      nameActive: "Lập trình cho bé từ 10 đến 12 tuổi",
      timeOrganize: "04/10/2005",
      deadline: "12/12/2005",
      location: "Học viện cơ sở quận 9 phòng 2A11",
      quantityActived: 60,
      organizer: "Đoàn trường",
      timeCreateActive: "10/01/2005",
      cost: 0,
      personApprove: "không có",
      timeApprove: "không có",
      minNumber: 220,
      description: "giới thiệu lập trình đến các em nhỏ",
      status: "registered",
    },
  ]);

  const [dateOrganize, setdateOrganize] = useState("MM/YYYY");
  const [openOrganize, setOpenOrganize] = useState(false); // open and close the modal
  const handleOnPressOrganize = () => {
    setOpenOrganize(!openOrganize);
  };

  const handleChangeOrganize = (propDate) => {
    const reversedStrOrganize = propDate.split(" ").reverse().join("/");
    setdateOrganize(reversedStrOrganize);
  };

  const filterForMonthYear = () => {
    return active.filter((eachActive) =>
        eachActive.timeOrganize.includes(dateOrganize)
    );
  };

  console.log(filterForMonthYear())

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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
          <Text style={styles.header}>Thống kê hoạt động</Text>
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
            }}
          >
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 28,
              }}
            >
              STT
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 58,
              }}
            >
              Tên hoạt động
            </Text>

            <View style={{ flex: 1 }}>
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
          </View>

          {filterForMonthYear().length > 0 ? (
            <FlatList
              style={{ flex: 1 }}
              data={filterForMonthYear()}
              renderItem={({ item }) => (
                <OrganizedActiveItemDT
                  activeOrganized={item}
                  onPressItem={() => {
                    navigation.navigate("detailOrganizedActiveDT", {
                      detailOrganizedActiveDT: item,
                    });
                  }}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.sizeMain,
                  color: Color.colorTextMain,
                }}
              >
                Not Found
              </Text>
            </View>)}
        </View>

        {/* btn approve all */}
        <TouchableOpacity
          style={[
            styles.btnCancel,
            {
              borderWidth: dateOrganize == "MM/YYYY" ? 0 : 1,
              borderColor: Color.colorApproveAll,
            },
          ]}
          onPress={() => alert("lọc hoạt động theo tháng, năm")}
          disabled={dateOrganize == "MM/YYYY" ? true : false}
        >
          <Text
            style={[
              styles.resigter,
              {
                color:
                  dateOrganize == "MM/YYYY" ? "gray" : Color.colorApproveAll,
              },
            ]}
          >
            Lọc hoạt động
          </Text>
        </TouchableOpacity>
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
    paddingRight: 25,
    zIndex: 2,
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    fontSize: FontSize.sizeHeader - 3,
    fontWeight: "600",
    color: Color.colorTextMain,
    width: (2 / 5) * screenWidth,
    marginRight: 18
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
    marginRight: 5,
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
});