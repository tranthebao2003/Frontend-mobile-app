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
import ThongKeTruongCLBAction from "../../../redux/action/thongKeAction/ThongKeTruongCLBAction";
import Spinner from "react-native-loading-spinner-overlay";
import { THONG_KE_ACTIVE_TRUONGCLB_RESET } from "../../../redux/types/typesThongKe/TypesThongKeTruongCLB";
export default function ListThongKeHoatDong({ navigation }) {
  // ở đây chỉ thống kế hoạt động của từng sv theo lớp,
  // tùy vào bí thư (trưởng clb) lớp nào thì chỉ có thể xem
  // sv của lớp đó thôi

  const [thongKe, setThongKe] = useState();

  const dispatch = useDispatch();
  const {
    loadingTHONG_KE_TRUONGCLB,
    reponseSuccessTHONG_KE_TRUONGCLB,
    errorTHONG_KE_TRUONGCLB,
    dataTHONG_KE_TRUONGCLB,
  } = useSelector((state) => state.thongKeTruongCLBReducer);
  const { infoUser } = useSelector((state) => state.infoUser);
  const { class_id } = infoUser;

  useEffect(() => {
    dispatch({ type: THONG_KE_ACTIVE_TRUONGCLB_RESET });
  }, [dispatch]);

  useEffect(() => {
    dispatch(ThongKeTruongCLBAction(class_id));
  }, [dispatch]);

  useEffect(() => {
    if (
      (dataTHONG_KE_TRUONGCLB != null && loadingTHONG_KE_TRUONGCLB == false,
      reponseSuccessTHONG_KE_TRUONGCLB == true)
    ) {
      setThongKe(dataTHONG_KE_TRUONGCLB);
    } else if (
      errorTHONG_KE_TRUONGCLB != null &&
      loadingTHONG_KE_TRUONGCLB == false
    ) {
      Alert.alert("Lỗi", error);
    }
  }, [
    dataTHONG_KE_TRUONGCLB,
    errorTHONG_KE_TRUONGCLB,
    loadingTHONG_KE_TRUONGCLB,
    reponseSuccessTHONG_KE_TRUONGCLB,
  ]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Spinner
        visible={loadingTHONG_KE_TRUONGCLB}
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
              Hoạt động đã tham gia
            </Text>
          </View>

          <FlatList
            style={{ flex: 1 }}
            data={thongKe}
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
            keyExtractor={(item) => item.MSSV}
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
          <Text style={styles.headerTruongCLB}>{class_id}</Text>
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
    width: 0.6 * screenWidth,
    marginTop: 15,
    paddingVertical: 20,
    paddingLeft: 20,
    backgroundColor: Color.colorBgUiTap,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "black",
  },

  headerTruongCLB: {
    fontSize: FontSize.sizeMain,
    fontWeight: "600",
    color: Color.colorTextMain,
    marginLeft: 65,
  },
});
