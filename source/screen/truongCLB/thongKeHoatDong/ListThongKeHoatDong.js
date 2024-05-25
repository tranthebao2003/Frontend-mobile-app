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
  import FontSize from "../../../component/FontSize";
  import Color from "../../../component/Color";
  import { screenWidth, screenHeight } from "../../../component/DimensionsScreen";
  import ItemThongKeHoatDong from "./ItemThongKeHoatDong";
  import { useSelector, useDispatch } from "react-redux";
  
  export default function ListThongKeHoatDong({ navigation }) {
    // ở đây chỉ thống kế hoạt động của từng sv theo lớp,
    // tùy vào bí thư (trưởng clb) lớp nào thì chỉ có thể xem
    // sv của lớp đó thôi
     
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
        nameActive: 'Trăng cho em',
        hdDaThamGia: 5
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
        nameActive: 'Trăng cho em',
        hdDaThamGia: 8
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
        nameActive: 'Mùa hè xanh',
        hdDaThamGia: 8
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
        nameActive: 'Đoán hình',
        hdDaThamGia: 10
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
        nameActive: 'Trăng cho em',
        hdDaThamGia: 10
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
        nameActive: 'Tiếp sức mùa thì',
        hdDaThamGia: 22
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
            <Text style={styles.header}>Hoạt động của sinh viên</Text>
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
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                  marginRight: 40,
                }}
              >
                Mã số sinh viên
              </Text>

              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                  width: "40%",
                  textAlign: "center",
                  //   borderWidth: 1,
                }}
              >
                hoạt động đã tham gia
              </Text>
            </View>

            <FlatList
              style={{ flex: 1 }}
              data={active}
              renderItem={({ item }) => (
                <ItemThongKeHoatDong
                  profileSinhVien={item}
                    onPressItem={() => {
                      navigation.navigate("detailThongKeHoatDong", {
                        detailThongKeHoatDong: item,
                      });
                    }}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View style={styles.containerPositionLogo}>
            <Image
              source={require("../../../resource/ListThongKeHoatDong/class.png")}
              style={{
                height: 48,
                width: 48,
                position: "absolute",
                left: 10,
                top: 8,
                borderRadius: 16,
                zIndex: 2,
              }}
              resizeMode="contain"
            ></Image>
            <Text style={styles.headerTruongCLB}>D21CQPT01</Text>
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

    containerPositionLogo: {
        width: 0.6*screenWidth,
        marginTop: 15,
        paddingVertical: 20,
        paddingLeft: 20,
        backgroundColor: Color.colorBgUiTap,
        borderRadius: 10,
        elevation: 2,
        shadowColor: 'black',
    },

    headerTruongCLB: {
        fontSize: FontSize.sizeMain,
        fontWeight: "600",
        color: Color.colorTextMain,
        marginLeft: 65
      },
  });
  