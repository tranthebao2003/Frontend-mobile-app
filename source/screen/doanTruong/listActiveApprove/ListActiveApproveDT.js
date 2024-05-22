import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import FontSize from "../../../component/FontSize";
import Color from "../../../component/Color";
import { screenWidth, screenHeight } from "../../../component/DimensionsScreen";
import ActiveApproveItemDT from "./ActiveApproveItemDT";
import { useSelector, useDispatch } from "react-redux";
import Dialog from "react-native-dialog";

export default function ListActiveApprove({ navigation }) {
  // ở đây chỉ bao gồm những hoạt động do đoàn trường tạo
  // do api trả về lun
  const [active, setActive] = useState([
    {
      id: 1,
      stt: 1,
      nameActive: "Trăng cho em",
      timeOrganize: "3/2/2005",
      // deadline này là thuộc tính tính toán được
      deadline: "20/1/2005",
      location: "Học viện cơ sở quận 9 hội trường A",
      quantityActived: 30,
      organizer: "Đoàn trường",
      timeCreateActive: "10/1/2005",
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
      timeOrganize: "10/2/2005",
      deadline: "10/10/2005",
      location: "Học viện cơ sở quận 9 hội trường B",
      quantityActived: 10,
      organizer: "Đoàn trường",
      timeCreateActive: "10/1/2005",
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
      timeOrganize: "3/8/2005",
      deadline: "1/9/2005",
      location: "Học viện cơ sở quận 1",
      quantityActived: 50,
      organizer: "Đoàn trường",
      timeCreateActive: "10/1/2005",
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
      timeOrganize: "4/10/2005",
      deadline: "12/12/2005",
      location: "Học viện cơ sở quận 9 phòng 2A11",
      quantityActived: 60,
      organizer: "Đoàn trường",
      timeCreateActive: "10/1/2005",
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
      timeOrganize: "4/10/2005",
      deadline: "12/12/2005",
      location: "Học viện cơ sở quận 9 phòng 2A11",
      quantityActived: 60,
      organizer: "Đoàn trường",
      timeCreateActive: "10/1/2005",
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
      timeOrganize: "4/10/2005",
      deadline: "12/12/2005",
      location: "Học viện cơ sở quận 9 phòng 2A11",
      quantityActived: 60,
      organizer: "Đoàn trường",
      timeCreateActive: "10/1/2005",
      cost: 0,
      personApprove: "không có",
      timeApprove: "không có",
      minNumber: 220,
      description: "giới thiệu lập trình đến các em nhỏ",
      status: "registered",
    },
  ]);

  const [dialogCancel, setDialogCancel] = useState(false);
  const showHideDialogCancel = () => {
    setDialogCancel(!dialogCancel);
  };

  const [yesNotificationCancel, setYesNotificationCancel] = useState(false);
  const yesBtnCancel = () => {
    setDialogCancel(!dialogCancel);
    setYesNotificationCancel(!yesNotificationCancel);
  };

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
          <Text style={styles.header}>Hoạt động chờ phê duyệt</Text>
          <Image
            source={require("../../../resource/iconLogin/lotLogo2.png")}
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
            source={require("../../../resource/iconLogin/logo.png")}
            style={{
              height: 80,
              width: 80,
              position: "absolute",
              right: 30,
              top: 30,
              borderRadius: 16,
              zIndex: 2,
              tintColor: Color.colorTextMain,
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
            elevation: 1,
            zIndex: 2,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
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

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
              }}
            >
              Thời gian
            </Text>
          </View>

          <FlatList
            style={{ flex: 1 }}
            data={active}
            renderItem={({ item }) => (
              <ActiveApproveItemDT
                activeApprove={item}
                onPressItem={() => {
                  navigation.navigate("detailActiveApprove", {
                    detailActiveApprove: item,
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* btn approve all */}
        <TouchableOpacity
          style={styles.btnCancel}
          onPress={showHideDialogCancel}
        >
          <Text style={[styles.resigter, { color: Color.colorApproveAll }]}>
            Duyệt tất cả
          </Text>
          <Dialog.Container visible={dialogCancel}>
            <Dialog.Title
              style={{ color: Color.colorTextMain, fontWeight: "700", fontSize: FontSize.sizeMain}}
            >
              XÁC NHẬN
            </Dialog.Title>
            <Dialog.Description style={{ color: "black", fontSize: FontSize.sizeMain - 2}}>
              Bạn có chắc muốn duyệt tất cả hoạt động ?
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
                  color: Color.colorRemove,
                  borderColor: Color.colorRemove
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
          <Dialog.Container visible={yesNotificationCancel}>
            <Dialog.Title
              style={{ color: Color.colorTextMain, fontWeight: "700" }}
            >
              THÔNG BÁO
            </Dialog.Title>
            <Dialog.Description style={{ color: "black" }}>
              Bạn đã xóa hoạt động thành công!
            </Dialog.Description>
            <Dialog.Button
              label="Ok"
              onPress={() => setYesNotificationCancel(!yesNotificationCancel)}
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
          </Dialog.Container>
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
    zIndex: 2,
    width: screenWidth,
  },
  header: {
    fontSize: FontSize.sizeHeader - 3,
    fontWeight: "600",
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
