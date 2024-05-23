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
  import ApproveSvItem from "./ApproveSvItem";
  import { useSelector, useDispatch } from "react-redux";
  import Dialog from "react-native-dialog";
  
  export default function ListApproveSv({ navigation }) {
    // ở đây chỉ bao gồm những hoạt động do đoàn trường tạo
    // do api trả về lun
    const [active, setActive] = useState([
      {
        id: 1,
        mssv: 'N21DCPT008',
        ho: 'Trần',
        ten: 'Thế Bảo',
        email: 'N21DCPT008@gmail.com',
        gioiTinh: 'nam',
        sdt: '0928628748',
        ngaySinh: '22/03/2003',
        diaChi: 'xã đồi 61, trảng bom đồng nai',
        maLop: 'D21CQPT01-N',
        chucVu: 'không',
        nameActive: 'Trăng cho em'
      },
  
      {
        id: 2,
        mssv: 'N21DCPT009',
        ho: 'Nguyễn',
        ten: 'Văn An',
        email: 'N21DCPT009@gmail.com',
        gioiTinh: 'nam',
        sdt: '0938567392',
        ngaySinh: '15/04/2003',
        diaChi: 'phường Hòa Khánh, quận Liên Chiểu, Đà Nẵng',
        maLop: 'D21CQPT01-N',
        chucVu: 'không',
        nameActive: 'Trăng cho em'
    },
    {
        id: 3,
        mssv: 'N21DCPT010',
        ho: 'Lê',
        ten: 'Thị Bích',
        email: 'N21DCPT010@gmail.com',
        gioiTinh: 'nữ',
        sdt: '0912784932',
        ngaySinh: '03/05/2003',
        diaChi: 'phường Bình Hòa, thành phố Thuận An, Bình Dương',
        maLop: 'D21CQPT01-N',
        chucVu: 'không',
        nameActive: 'Mùa hè xanh'
    },
    {
        id: 4,
        mssv: 'N21DCPT011',
        ho: 'Phạm',
        ten: 'Hoàng Nam',
        email: 'N21DCPT011@gmail.com',
        gioiTinh: 'nam',
        sdt: '0909876543',
        ngaySinh: '18/06/2003',
        diaChi: 'phường An Phú, quận 2, TP Hồ Chí Minh',
        maLop: 'D21CQPT01-N',
        chucVu: 'không',
        nameActive: 'Đoán hình'
    },
    {
        id: 5,
        mssv: 'N21DCPT012',
        ho: 'Trịnh',
        ten: 'Ngọc Lan',
        email: 'N21DCPT012@gmail.com',
        gioiTinh: 'nữ',
        sdt: '0987654321',
        ngaySinh: '29/07/2003',
        diaChi: 'phường 9, quận Phú Nhuận, TP Hồ Chí Minh',
        maLop: 'D21CQPT01-N',
        chucVu: 'không',
        nameActive: 'Trăng cho em'
    },
    {
        id: 6,
        mssv: 'N21DCPT013',
        ho: 'Đặng',
        ten: 'Quốc Huy',
        email: 'N21DCPT013@gmail.com',
        gioiTinh: 'nam',
        sdt: '0976543210',
        ngaySinh: '10/08/2003',
        diaChi: 'xã Xuân Hưng, huyện Xuân Lộc, Đồng Nai',
        maLop: 'D21CQPT01-N',
        chucVu: 'không',
        nameActive: 'Tiếp sức mùa thì'
    }
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
            <Text style={styles.header}>Phê duyệt sinh viên tham gia</Text>
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
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                }}
              >
                Mã số sinh viên
              </Text>
              
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                }}
              >
                 Tên hoạt động
              </Text>
              
              
            </View>
  
            <FlatList
              style={{ flex: 1 }}
              data={active}
              renderItem={({ item }) => (
                <ApproveSvItem
                  approveSv={item}
                  onPressItem={() => {
                    navigation.navigate("detailApproveSv", {
                      detailApproveSv: item,
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
  