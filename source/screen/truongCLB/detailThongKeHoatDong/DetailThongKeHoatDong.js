import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    ImageBackground,
    ScrollView,
  } from "react-native";
  import { useState } from "react";
  import FontSize from "../../../component/FontSize";
  import Color from "../../../component/Color";
  import { screenWidth, screenHeight } from "../../../component/DimensionsScreen";
  
  // 2 cách:
  // - ListView from a map of objects
  // - FlatList
  export default function DetailThongKeHoatDong(props) {
    const {
      id,
      hdDaThamGia,
      mssv,
      ho,
      ten,
      email,
      gioiTinh,
      sdt,
      ngaySinh,
      diaChi,
      maLop,
      chucVu,
    } = props.route.params.detailThongKeHoatDong;

  
    return (
      <ScrollView style={styles.container}>
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
          style={{ width: "100%", height: "120%" }}
        >
          <View style={styles.containerHeader}>
            <Text style={styles.header}>Thông tin chi tiết sinh viên</Text>
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
            ></Image>
          </View>
  
          {/* content 1 */}
          <View
            style={{
              backgroundColor: Color.colorBtn,
              marginHorizontal: 10,
              marginBottom: 50,
              padding: 20,
              borderRadius: 10,
              shadowColor: "black",
              shadowOffset: { width: 500, height: 500 },
              shadowOpacity: 1,
              elevation: 2,
              zIndex: 2,
            }}
          >
            {/* header row*/}
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: "600",
                }}
              >
                Mã số sinh viên
              </Text>
  
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: "600",
                }}
              >
                Tên sinh viên
              </Text>
            </View>
  
            {/* content row */}
            <View
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
                flexDirection: "row",
                borderTopWidth: 0.5,
                borderColor: Color.colorTextMain,
                paddingTop: 26,
                paddingBottom: 13,
              }}
            >
              <View
                style={{
                  marginRight: 10,
                }}
              >
                <Text style={styles.contentText}>{mssv}</Text>
              </View>
  
              <View
                style={{
                  backgroundColor: Color.colorBtn,
                }}
              >
                <Text style={styles.contentText}>{ho + " " + ten}</Text>
              </View>
            </View>
          </View>
  
          {/* content 2 */}
          <View
            style={{
              backgroundColor: Color.colorBtn,
              marginHorizontal: 10,
              padding: 20,
              borderRadius: 10,
              shadowColor: "black",
              shadowOffset: { width: 500, height: 500 },
              shadowOpacity: 1,
              elevation: 0.8,
              zIndex: 2,
            }}
          >
            {/* header column */}
            {/* số hoạt động đã tham gia */}
            <View style={{ width: "100%", marginBottom: 20 }}>
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                  marginBottom: 2,
                }}
              >
                Hoạt động đã tham gia
              </Text>
  
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 400,
                }}
              >
                {hdDaThamGia}
              </Text>
            </View>

            {/* Email */}
            <View style={{ width: "100%", marginBottom: 20 }}>
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                  marginBottom: 2,
                }}
              >
                Email
              </Text>
  
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 400,
                }}
              >
                {email}
              </Text>
            </View>
  
            {/* giới tính*/}
            <View style={{ width: "100%", marginBottom: 20 }}>
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                  marginBottom: 2,
                }}
              >
                Giới tính
              </Text>
  
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 400,
                }}
              >
                {gioiTinh}
              </Text>
            </View>
  
            {/* số điện thoại*/}
            <View style={{ width: "100%", marginBottom: 20 }}>
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                  marginBottom: 2,
                }}
              >
                Số điện thoại
              </Text>
  
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 400,
                }}
              >
                {sdt}
              </Text>
            </View>
  
            {/* mã lớp */}
            <View style={{ width: "100%", marginBottom: 20 }}>
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                  marginBottom: 2,
                }}
              >
                Mã lớp
              </Text>
  
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 400,
                }}
              >
                {maLop}
              </Text>
            </View>
  
            {/* ngày sinh */}
            <View style={{ width: "100%", marginBottom: 20 }}>
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                  marginBottom: 2,
                }}
              >
                Ngày sinh
              </Text>
  
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 400,
                }}
              >
                {ngaySinh}
              </Text>
            </View>
  
            {/* địa chỉ */}
            <View style={{ width: "100%", marginBottom: 20 }}>
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                  marginBottom: 2,
                }}
              >
                Địa chỉ
              </Text>
  
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 400,
                }}
              >
                {diaChi}
              </Text>
            </View>
  
            {/* chức vụ */}
            <View style={{ width: "100%", marginBottom: 20 }}>
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                  marginBottom: 2,
                }}
              >
                Chức vụ
              </Text>
  
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: "400",
                }}
              >
                {chucVu}
              </Text>
            </View>
          </View>
  
        </ImageBackground>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingBottom: 50,
    },
    containerHeader: {
      height: (1 / 6) * screenHeight,
      padding: 30,
      paddingRight: 150,
      zIndex: 2,
      width: screenWidth,
      marginBottom: 20,
    },
    header: {
      fontSize: FontSize.sizeHeader,
      fontWeight: "700",
      color: Color.colorTextMain,
    },
    contentText: {
      color: Color.colorTextMain,
      fontSize: FontSize.sizeMain,
      fontWeight: "400",
    },
    btnCancel: {
      width: 85 * 2,
      height: 30 * 1.6,
      margin: 20,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderRadius: 10,
      borderColor: Color.colorRemove,
    },
  
    btnResigter: {
      width: 85 * 2,
      height: 30 * 1.6,
      borderRadius: 10,
      margin: 20,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: Color.colorTextMain,
      shadowOffset: { width: 500, height: 500 },
      shadowOpacity: 0.8,
      elevation: 2,
    },
  
    resigter: {
      fontSize: FontSize.sizeSmall + 6,
      fontWeight: "700",
    },
  });
  